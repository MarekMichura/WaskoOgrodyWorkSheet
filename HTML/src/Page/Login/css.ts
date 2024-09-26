import styled from 'styled-components'

export const Center = styled.div`
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  box-shadow: 0 0 3px 0 var(--background-900);

  border-radius: 20px;
  width: min(350px, Calc(100%), 100vw);
  /* height: min(600px, max(Calc(100dvh - 40px), 310px)); */
  max-height: max(Calc(100dvh - 100px), 280px);
  overflow: hidden;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 20px;

  [data-theme='dark'] & {
    box-shadow: inset 0 0 5px 0 var(--background-300);
  }

  @media screen and (max-width: 370px) {
    padding-left: Calc(100vw - 350px);
    padding-right: Calc(100vw - 350px);
    box-shadow: none;
  }
`

export const Top = styled.div`
  display: contents;
  @media screen and (max-height: 480px) {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 10px;
  }
`

export const SVG = styled.svg`
  flex: 1;
  width: 100%;
  height: max-content;
`

export const Title = styled.h1`
  text-align: center;
  font-family: 'Archivo Black';
  color: var(--primary);
  margin: 0;
`

export const SubTitle = styled.h3`
  text-align: center;
  font-family: 'Archivo Black';
  color: var(--primary);
  margin: 0;
`

export const ButtonSpace = styled.div`
  min-height: 40px;
  width: min(350px, 100vw - 40px);
  background-color: red;
`
