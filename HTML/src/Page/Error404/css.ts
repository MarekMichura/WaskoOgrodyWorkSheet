import styled from 'styled-components'

export const Content = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  color: ${(a) => a.theme.primary.default};

  text-transform: uppercase;
  font-family: 'Archivo Black';
`

export const SVG = styled.svg`
  max-height: 300px;
  max-width: 300px;
`

export const TMP_Twoja_Mac = styled.div`
  width: 190px;
  height: 254px;
  background: #1a1a1a;
  border-radius: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  &:before {
    content: 'dsa';
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(0deg, red 0%, green 50%, blue 100%);
    filter: blur(20px);
    transition: opacity 0.3s;
    border-radius: inherit;
  }
`
