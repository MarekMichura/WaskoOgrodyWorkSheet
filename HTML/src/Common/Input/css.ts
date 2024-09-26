import styled, {keyframes} from 'styled-components'

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 15pt;
  transition: top, bottom, left, transform, font-size;
  transition-duration: 300ms;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
`

export const Error = styled.label`
  font-family: 'Roboto', sans-serif;
  position: absolute;
  left: 10px;
  top: 100%;
  color: red;
`

export const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  background-color: transparent;
  border: none;
  outline: none;
  width: calc(100% - 50px);
  font-size: 15pt;
  color: var(--text-900);
  align-self: flex-end;

  &::placeholder {
    visibility: hidden;
  }
  &:focus + ${Label}, &:valid + ${Label} {
    top: calc(3px);
    left: 70px;
    transform: translateX(-50%);
    font-size: 10pt;
  }

  &[type='submit'],
  &[type='button'] {
    background-color: var(--primary-500);
    color: var(--text-950);
    cursor: pointer;
    width: fit-content;
    padding: 15px;
    height: 100%;
  }

  [data-theme='dark'] &[type='submit'],
  [data-theme='dark'] &[type='button'] {
    background-color: var(--primary-200);
  }

  &:disabled {
    cursor: not-allowed;
  }
`

const Context = styled.div`
  position: relative;
  height: 40px;
  width: calc(100% - 10px);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContextInput = styled(Context)`
  background-color: var(--background-100);
  padding: 5px 5px;
  gap: 5px;

  &::after {
    left: 0;
  }
  &::before {
    right: 0;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 0%;
    height: 1px;

    transition: 300ms width ease-in-out;
    background-color: var(--primary);
    bottom: 0;
  }

  &:focus-within::after,
  &:focus-within::before {
    width: 50%;
  }

  &:focus-within {
    background-color: var(--secondary-100);
  }
`

export const SVG = styled.svg`
  width: 40px;
  fill: var(--primary);
`

export const Ripple = keyframes`
  to{
    transform: scale(5);
    opacity: 0;
  }
`

export const Effect = styled.span`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  border-radius: 100%;
  aspect-ratio: 1;
  background-color: var(--text-50);
  pointer-events: none;
  transform: scale(0);
  opacity: 1;
  /* animation-name: ${Ripple}; */
  animation-duration: 1s;
  animation-fill-mode: forwards;
`

export const ContextButton = styled(Context)`
  flex-shrink: 0;
  width: fit-content;
  align-self: flex-end;
  height: 54px;
  border-radius: 15px;
  overflow: hidden;
`
