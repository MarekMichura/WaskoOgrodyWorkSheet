import styled, {keyframes} from 'styled-components'

export const LoadingContainer = styled.div`
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
  &[data-start='false'] {
    transition:
      500ms ease-in-out backdrop-filter,
      500ms ease-in-out background-color;
  }
  &[data-start='true'] {
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    pointer-events: all;
  }
`

export const LoadingContent = styled.div`
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

  [data-start='false'] & {
    transition: 500ms ease-in-out transform;
  }
  [data-start='true'] & {
    transform: scale(1);
    pointer-events: all;
  }
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

export const LoadingMelon = styled.div`
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
`

export const LoadingText = styled.div`
  margin: 0;

  text-align: center;
  font-family: 'Archivo Black';
  text-transform: uppercase;

  color: #226322;
`
