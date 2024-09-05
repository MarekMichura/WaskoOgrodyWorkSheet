import styled from 'styled-components';

export const Input = styled.input`
  width: 292px;
  height: 43px;
  background-color: ${(p) => p.disabled ? '#303030' : '#004f00'};
  cursor: ${(p) => p.disabled ? 'wait' : 'pointer'};
  transition: 0.3s background-color;
  border: 0;
  font-size: 14pt;
  border-radius: 15px;
  color: #fff;
  
  &:focus{
    outline: none;
  }
`