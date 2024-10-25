import styled, {keyframes} from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  top: 15px;

  display: flex;
  flex-direction: column;
  justify-content: end;

  overflow: hidden;
  pointer-events: none;
`

const fadeOut = keyframes`
  from{
    grid-template-rows: 1fr;
    margin: 0 0 20px;
    opacity: 1;
  }
  
  to{
    grid-template-rows: 0fr;
    margin: 0 0 0;
    opacity: 0;
  }
`

export const Notification = styled.div`
  margin: 0 0 20px;

  display: grid;
  grid-template-rows: 1fr;
  pointer-events: all;

  animation: ${fadeOut} 1s ease-out forwards;
`

export const CloseSVG = styled.svg`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 5px;
  right: 5px;

  opacity: 0;
  outline: none;
  border: none;
  cursor: pointer;

  background-color: transparent;
  transition: 300ms opacity ease-in-out;
`

export const Content = styled.div`
  position: relative;
  width: min(calc(100vw - 30px), 300px);

  display: flex;

  overflow: hidden;
  opacity: 0.8;

  &:hover {
    opacity: 1;

    ${CloseSVG} {
      opacity: 1;
    }
  }

  &[data-type='info'] {
    border-color: #5d8fb6;
    background-color: #cbe7f5;
    color: #5d8fb6;
  }
  &[data-type='warning'] {
    border-color: #97722c;
    background-color: #f8f4c4;
    color: #97722c;
  }
  &[data-type='error'] {
    border-color: #ad292e;
    background-color: #eec8c5;
    color: #ad292e;
  }
  &[data-type='success'] {
    border-color: #457d58;
    background-color: #dcf3d6;
    color: #457d58;
  }
`

export const SVG = styled.svg`
  width: 40px;
  padding: 10px;

  display: block;
  flex-shrink: 0;

  [data-type='info'] & {
    background-color: #a5d3ed;
    fill: #5d8fb6;
  }
  [data-type='warning'] & {
    background-color: #ebe0a9;
    fill: #97722c;
    stroke: #97722c;
  }
  [data-type='error'] & {
    background-color: #e3b0ad;
    fill: #ad292e;
  }
  [data-type='success'] & {
    background-color: #c7e0b9;
    fill: #457d58;
  }
`

export const Label = styled.div`
  display: block;
  padding: 10px;
  flex: 1;
`

export const Title = styled.h3`
  margin: 0;

  text-transform: uppercase;
  font-family: 'Archivo Black';
`
