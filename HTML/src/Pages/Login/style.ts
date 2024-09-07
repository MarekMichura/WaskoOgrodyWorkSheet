import styled from 'styled-components'
import { WebTarget } from 'styled-components/dist/types'

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
`

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  max-width: 350px;
  max-height: 90vh;
  width: 90%;
  margin: 30px 0;

  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #000;
`

export const SVG = styled.svg`
  width: 33px;
  height: 33px;
  padding: 7px;
`

export const Title = styled.h1`
  font-family: "Archivo Black", sans-serif;
  font-weight: bolder;
  font-style: normal;
  font-size: 21pt;
  margin: 0 0 25px 0;
`

export const Bottom = styled.div`
`