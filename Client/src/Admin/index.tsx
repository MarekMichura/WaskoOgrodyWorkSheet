import { Formik } from "formik";
import AnimatedButton from "../Login/animatedButton";
import { FormGroup, Input } from "../Login/style"

function Admin() {
  return <div>
    <Formik initialValues={{ start: "", end: "" }} onSubmit={(values, { setSubmitting }) => {
      window.open('/GetExcel?start=2024-07-29&end=2024-09-01', '_blank');
      setSubmitting(false)
    }}>
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (<>
        <form onSubmit={handleSubmit}>
          <AnimatedButton disabled={isSubmitting} onChange={handleChange} onBlur={handleBlur}
            value={values.start} error={errors.start} name="start" type="date" label="Data rozpoczęcia" />
          <AnimatedButton disabled={isSubmitting} onChange={handleChange} onBlur={handleBlur}
            value={values.end} error={errors.end} name="end" type="date" label="Data zakończenia" />
          <FormGroup>
            <Input type="submit" value="Zaloguj się" disabled={isSubmitting} style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }} />
          </FormGroup>
        </form>
      </>
      )}
    </Formik>
  </div >
}

export default Admin;