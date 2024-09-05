import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 15px;
  top: 15px;
  bottom: 15px;
  overflow: hidden;
`;

export const NotificationLabel = styled.span`
  display: block;
  padding: 10px;
  flex: 1;

  h3{
    margin: 0;
  }
`

export const NotificationCloseButton = styled.svg`
  background-color: transparent;
  outline: none;
  border: none;
  width: 15px;
  height: 15px;
  top: 5px;
  right: 5px;
  display: none;
  position: absolute;
  cursor: pointer;
`

export const NotificationSVG = styled.svg`
  display: block;
  width: 40px;
  height: 40px;
  padding: 10px;
  flex-shrink: 0;
`

const fadeOff = keyframes`
  0%{
    grid-template-rows: 1fr;
    margin: 0 0 20px;
    opacity: 1;
  }
  100%{
    grid-template-rows: 0fr;
    margin: 0 0 0;
    opacity: 0;
  }
`

export const NotificationContainer = styled.div<{ time: number }>`
  display: grid;
  grid-template-rows: 1fr;
  margin: 0 0 20px;
  animation: ${fadeOff} 2s ease-out ${props => props.time}ms forwards;
`

const Notification = styled.div`
  position: relative;
  display: flex;
  width: 300px;
  overflow: hidden;

  &:hover ${NotificationCloseButton}{
    display: block;
  }
`

export const Error = styled(Notification)`
  border-color: #ad292e;
  background-color: #eec8c5;
  color: #ad292e;

  ${NotificationSVG}{
    background-color: #e3b0ad;
    fill: #ad292e;
  }
`

export const Info = styled(Notification)`
  border-color: #5d8fb6;
  background-color: #cbe7f5;
  color: #5d8fb6;

  ${NotificationSVG}{
    background-color: #a5d3ed;
    fill: #5d8fb6;
  }
`

export const Warn = styled(Notification)`
  border-color: #97722c;
  background-color: #f8f4c4;
  color: #97722c;

  ${NotificationSVG}{
    background-color: #ebe0a9;
    fill: #97722c;
    stroke: #97722c;
  }
`

export const Success = styled(Notification)`
  border-color: #457d58;
  background-color: #dcf3d6;
  color: #457d58;

  ${NotificationSVG}{
    background-color: #c7e0b9;
    fill: #457d58;
  }
`