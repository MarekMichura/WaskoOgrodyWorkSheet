import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  display: flex;
  background-color: #e5e5e5;
  position: relative;
  margin-bottom: 15px;
  border-radius: 15px;
  overflow: hidden;
`

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  font-size: 14pt;
  padding-right: 10px;
  
  &:focus{
    outline: none;
  }
`

export const Label = styled.label < {open: boolean, disabled: boolean} > `
  font-size: 14pt;
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  left: 45px;
  width: calc(100% - 55px);
  transform: translateY(-50%);
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'text'};;
  height: 100%;
  vertical-align: middle;
  opacity: ${(props) => props.open ? '0' : '1'};
  transition: 0.3s opacity;
`

export const BottomBorder = styled.div < {$left: boolean, open: boolean} > `
  position: absolute;
  height: 2px;
  width: ${(p) => p.open ? '50%' : '0%'};
  transition: 0.3s width;
  ${(p) => p.$left ? 'right' : 'left'}: 50%;
  bottom: 0px;
  background-color: #004f00;
`