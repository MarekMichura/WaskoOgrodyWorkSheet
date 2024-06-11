import styled from "styled-components";

export const Center = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: var(--text1);
  font-family: "RobotoDraft", "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Content = styled.div`
  max-width: 350px;
  padding: 15px;
  width: 90%;
  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0 3px 5px var(--black), 3px 0 5px var(--black);
`

export const Form = styled.form`
  flex-direction: column;
  display: flex;
  gap: 14px;
`

export const FormGroup = styled.div`
  display: flex;
  background-color: var(--gray);
  position: relative;
`

export const IconHolder = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  width: 53px;
  height: 53px;
`;

export const IconSVG = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 50%;
  max-width: 50%;
  overflow: hidden;
  border-radius: 100%;
`

export const Input = styled.input`
  flex: 1;
  border: 0;
  font: inherit;
  position: relative;
  outline: 0;
  background-color: inherit;
  transition: background-color 0.3s;
  padding: 16px;
  width: 100%;
  cursor: inherit;
  &[type='submit'], &[type='button']{
    background-color: var(--color);
  }

  &[type='submit']:disabled{
    filter: brightness(95%);
  }
`

export const Label = styled.label`
  position: absolute;
  left: 70px;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 500ms;
  cursor: inherit;
`

export const BottomBorder = styled.div`
  position: absolute;
  background-color: var(--red);
  height: 3px;
  transition: width 500ms;
  bottom: 0;
`