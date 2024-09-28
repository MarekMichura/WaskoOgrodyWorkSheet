import styled, {createGlobalStyle, keyframes} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    
    color: ${(a) => a.theme.text[950].default};
    background-color: ${(a) => a.theme.background[50].default};
  }
`
export default GlobalStyle

export const Notifications = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  top: 15px;

  display: flex;
  flex-direction: column;

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

export const NotificationContainer = styled.div<{$time: number}>`
  margin: 0 0 20px;

  display: grid;
  grid-template-rows: 1fr;
  pointer-events: all;

  animation: ${fadeOut} 1s ease-out ${({$time}) => $time}ms forwards;
`

export const NotificationSVG = styled.svg`
  width: 40px;
  padding: 10px;

  display: block;
  flex-shrink: 0;
`

export const NotificationLabel = styled.span`
  display: block;
  padding: 10px;
  flex: 1;
`

export const NotificationTitle = styled.h3`
  margin: 0;

  text-transform: uppercase;
  font-family: 'Archivo Black';
`

export const NotificationCloseButton = styled.svg`
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

const Notification = styled.div`
  position: relative;
  width: 300px;

  display: flex;

  overflow: hidden;
  opacity: 0.8;

  &:hover > ${NotificationCloseButton} {
    opacity: 1;
  }
`

export const Error = styled(Notification)`
  border-color: #ad292e;
  background-color: #eec8c5;
  color: #ad292e;

  ${NotificationSVG} {
    background-color: #e3b0ad;
    fill: #ad292e;
  }
`

export const Info = styled(Notification)`
  border-color: #5d8fb6;
  background-color: #cbe7f5;
  color: #5d8fb6;

  ${NotificationSVG} {
    background-color: #a5d3ed;
    fill: #5d8fb6;
  }
`

export const Warn = styled(Notification)`
  border-color: #97722c;
  background-color: #f8f4c4;
  color: #97722c;

  ${NotificationSVG} {
    background-color: #ebe0a9;
    fill: #97722c;
    stroke: #97722c;
  }
`

export const Success = styled(Notification)`
  border-color: #457d58;
  background-color: #dcf3d6;
  color: #457d58;

  ${NotificationSVG} {
    background-color: #c7e0b9;
    fill: #457d58;
  }
`
