import styled, {keyframes} from 'styled-components'

import {ITheme} from '/QueryFn/Theme/types/ITheme'

const Context = styled.div`
  position: relative;
  width: calc(100% - 10px);
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContextButton = styled(Context)`
  border-radius: 15px;
  width: fit-content;
  height: 54px;

  flex-shrink: 0;
  align-self: flex-end;

  overflow: hidden;
`

export const ContextInput = styled(Context)`
  padding: 5px 5px;
  gap: 5px;
  background-color: ${(p) => p.theme.background[100].default};

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
    background-color: ${(p) => p.theme.primary.default};
    bottom: 0;
  }

  &:focus-within::after,
  &:focus-within::before {
    width: 50%;
  }

  &:focus-within {
    background-color: ${(p) => p.theme.secondary[100].default};
  }
`

export const Ripple = keyframes`
  from{
    transform: scale(0);
    opacity: 1;
  }
  to{
    transform: scale(5);
    opacity: 0;
  }
`

export const EFFECT_DURATION = 2000
export const Effect = styled.span`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  border-radius: 100%;
  aspect-ratio: 1;
  background-color: ${(p) => p.theme.text[50].default};
  pointer-events: none;
  transform: scale(0);
  opacity: 1;
  animation-name: ${Ripple};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-play-state: paused;
  animation-iteration-count: 1;
`

export const Label = styled.label`
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 15pt;

  pointer-events: none;
  font-family: 'Roboto', sans-serif;
  transform: translateX(-50%) translateY(-50%);

  transition: top, bottom, left, transform, font-size;
  transition-duration: 300ms;
`

export const Error = styled.label`
  position: absolute;
  left: 10px;
  top: 100%;

  font-family: 'Roboto', sans-serif;
  color: red;
`

export const SVG = styled.svg`
  width: 40px;

  fill: ${(p) => p.theme.primary.default};
`

export const Button = styled.button`
  width: fit-content;
  align-self: flex-end;
  padding: 15px;
  height: 100%;

  font-family: 'Roboto', sans-serif;
  font-size: 15pt;
  border: none;
  outline: none;

  cursor: pointer;

  color: ${(p) => p.theme.text[950].default};
  background-color: ${(p) =>
    p.theme.name == ITheme.THEME_LIGHT ? p.theme.primary[500].default : p.theme.primary[200].default};

  &:disabled {
    cursor: not-allowed !important;
  }
`

export const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 15pt;
  border: none;
  outline: none;
  width: calc(100% - 50px);

  align-self: flex-end;

  background-color: transparent;
  color: ${(p) => p.theme.text[900].default};

  &:disabled {
    cursor: not-allowed !important;
  }

  &::placeholder {
    visibility: hidden;
  }

  &:focus + ${Label}, &:valid + ${Label} {
    top: calc(3px);
    left: 70px;
    transform: translateX(-50%);
    font-size: 10pt;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${(p) => p.theme.text[900].default};
    box-shadow: inset 0 0 20px 20px ${(p) => p.theme.background[100].default};
  }

  &:-webkit-autofill:focus {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${(p) => p.theme.text[900].default};
    box-shadow: inset 0 0 20px 20px ${(p) => p.theme.secondary[100].default};
  }
`
