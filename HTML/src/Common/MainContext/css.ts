import styled, {createGlobalStyle, keyframes} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    font-family: "Lato", sans-serif;

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
  width: min(calc(100vw - 30px), 300px);

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

export const LoadingContainer = styled.div<{$start: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(0);
  pointer-events: none;

  background-color: rgba(0, 0, 0, 0);
  ${(p) => !p.$start && `transition: 500ms ease-in-out backdrop-filter, 500ms ease-in-out background-color;`}
  ${(p) => p.$start && `background-color: rgba(0, 0, 0, 0.3); backdrop-filter: blur(10px); pointer-events: all;`}
`

export const LoadingContent = styled.div<{$start: boolean}>`
  padding: 20px;
  max-width: fit-content;
  max-height: fit-content;
  border-radius: 100%;
  aspect-ratio: 1;

  gap: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transform: scale(0);

  ${(p) => !p.$start && `transition: 500ms ease-in-out transform;`}
  ${(p) => p.$start && `transform: scale(1); pointer-events: all;`}
`

const load = keyframes`
0% {
  -webkit-mask-size:auto,0 0,0 0,0 0,0 0,0 0,0 0;
}
15% {
  -webkit-mask-size:auto,20px 20px,0 0,0 0,0 0,0 0,0 0;
}
30% {
  -webkit-mask-size:auto,20px 20px,20px 20px,0 0,0 0,0 0,0 0;
}
45% {
  -webkit-mask-size:auto,20px 20px,20px 20px,20px 20px,0 0,0 0,0 0;
}
60% {
  -webkit-mask-size:auto,20px 20px,20px 20px,20px 20px,20px 20px,0 0,0 0;
}
75% {
  -webkit-mask-size:auto,20px 20px,20px 20px,20px 20px,20px 20px,20px 20px,0 0;
}
90%,
100% {
  -webkit-mask-size:auto,20px 20px,20px 20px,20px 20px,20px 20px,20px 20px,20px 20px;
}
`

export const LoadingMelon = styled.div<{$start: boolean}>`
  width: 80px;
  height: 40px;
  border-radius: 0 0 100px 100px;

  border: 5px solid #538a2d;
  box-sizing: border-box;
  border-top: 0;

  background:
    radial-gradient(farthest-side at top, #0000 calc(100% - 5px), #e7ef9d calc(100% - 4px)),
    radial-gradient(2px 3px, #5c4037 89%, #0000) 0 0/17px 12px,
    #ff1643;

  -webkit-mask:
    linear-gradient(#0000 0 0),
    radial-gradient(farthest-side, #000 94%, #0000) 12px -8px,
    radial-gradient(farthest-side, #000 94%, #0000) 29px -8px,
    radial-gradient(farthest-side, #000 94%, #0000) 45px -6px,
    radial-gradient(farthest-side, #000 94%, #0000) 22px -2px,
    radial-gradient(farthest-side, #000 94%, #0000) 34px 6px,
    radial-gradient(farthest-side, #000 94%, #0000) 21px 6px,
    linear-gradient(#000 0 0);
  mask:
    linear-gradient(#000 0 0),
    radial-gradient(farthest-side, #000 94%, #0000) 12px -8px,
    radial-gradient(farthest-side, #000 94%, #0000) 29px -8px,
    radial-gradient(farthest-side, #000 94%, #0000) 45px -6px,
    radial-gradient(farthest-side, #000 94%, #0000) 22px -2px,
    radial-gradient(farthest-side, #000 94%, #0000) 34px 6px,
    radial-gradient(farthest-side, #000 94%, #0000) 21px 6px,
    linear-gradient(#0000 0 0);

  -webkit-mask-composite: destination-out;
  mask-composite: exclude, add, add, add, add, add, add;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  animation-duration: 3s;
  animation-name: ${load};
  animation-iteration-count: infinite;
  animation-play-state: ${(a) => (a.$start ? 'running' : 'paused')};
`

export const LoadingTitleContainer = styled.div``

export const LoadingTitle = styled.div`
  margin: 0;

  text-align: center;
  font-family: 'Archivo Black';
  text-transform: uppercase;

  color: #226322;
`
