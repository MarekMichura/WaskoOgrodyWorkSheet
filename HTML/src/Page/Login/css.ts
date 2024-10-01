import styled from 'styled-components'

import {IThemes} from '/global/THEME'

export const Center = styled.div`
  min-height: 100dvh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  max-height: max(Calc(100dvh - 100px), 280px);
  width: min(350px, Calc(100%), 100vw);
  border-radius: 20px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 20px;

  overflow: hidden;
  background-color: ${(a) => a.theme.background[50].default};
  box-shadow: ${(a) =>
    a.theme.name == IThemes.THEME_LIGHT
      ? `0 0 3px 0 ${a.theme.background[900].default}`
      : `inset 0 0 5px 0 ${a.theme.background[300].default}`};

  @media screen and (max-width: 370px) {
    padding-left: Calc(100vw - 350px);
    padding-right: Calc(100vw - 350px);
    box-shadow: none;
  }
`

export const Top = styled.div`
  display: contents;

  @media screen and (max-height: 480px) {
    padding: 0 10px;

    display: flex;
    gap: 5px;

    align-items: center;
  }
`

export const SVG = styled.svg`
  height: max-content;
  width: 100%;

  flex: 1;
`

export const Title = styled.h1`
  margin: 0;

  text-align: center;
  font-family: 'Archivo Black';

  color: ${(a) => a.theme.primary.default};
`

export const SubTitle = styled.h3`
  margin: 0;

  text-align: center;
  font-family: 'Archivo Black';

  color: ${(a) => a.theme.primary.default};
`
