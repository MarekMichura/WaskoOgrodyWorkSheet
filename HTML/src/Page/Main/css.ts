import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 100dvh;
  width: 100dvw;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;

  overflow: hidden;
  /* background-color: ${(a) => a.theme.background[100].default}; */

  @media screen and (max-width: 600px) {
    grid-template-rows: auto 1fr auto auto;
    grid-template-columns: 1fr;
  }
`

export const Content = styled.div`
  position: relative;
  border-top-left-radius: 30px;
  max-height: 100%;
  padding: 15px;

  grid-row: 2/3;
  grid-column: 2/3;
  overflow: auto;

  background-color: ${(a) => a.theme.background[200].default};
  @media screen and (max-width: 600px) {
    border-top-left-radius: 0;
    grid-row: 2/3;
    grid-column: 1/2;
  }
`
