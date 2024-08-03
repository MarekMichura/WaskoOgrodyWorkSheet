import { Formik } from "formik";
import { useLocation, useNavigate, useNavigation, useParams } from "react-router-dom";
import styled from "styled-components";
import { Form, FormGroup, Input } from "../Login/style";
import AnimatedButton from "../Login/animatedButton";

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.2);
`;

const Content = styled.div`
  background-color: rgba(66, 66, 66, 1);
  width: 450px;
  height: 300px;
  margin: 0 auto;
`;

const Header = styled.h2`
  margin-top: 0;
  padding-top: 15px;
  text-align: center;
`

const Edytor = () => {
  const { Date } = useParams();
  const nav = useNavigate();

  function close() {
    nav("../");
  }

  return <Container onClick={close}>
    <Content>
      <Header>Ustawienia dla daty {Date}</Header>
      <Formik initialValues={{ StartTime: "", EndTime: "" }} onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        fetch("/UpdatePanel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ Date: Date, Start: values.StartTime, End: values.EndTime })
        })
          .then(() => {
            close();
          })
          .catch(() => {
          }).finally(() => {
            setSubmitting(false);
          })
      }}>
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} onClick={(a) => { a.stopPropagation() }}>
            <AnimatedButton disabled={isSubmitting} onChange={handleChange} onBlur={handleBlur}
              value={values.StartTime} error={errors.StartTime} name="StartTime" type="time" label="Godzina rozpoczęcia pracy" />
            <AnimatedButton disabled={isSubmitting} onChange={handleChange} onBlur={handleBlur}
              value={values.EndTime} error={errors.EndTime} name="EndTime" type="time" label="Godzina zakończenia pracy" />
            <FormGroup>
              <Input type="submit" value="Ustaw" disabled={isSubmitting} style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }} />
            </FormGroup>
          </Form>
        )}
      </Formik>
    </Content>
  </Container>
};

export default Edytor;