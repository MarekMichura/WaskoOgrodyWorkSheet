import {styled} from 'styled-components'

import {ITheme} from '/QueryFn/Theme/types/ITheme'

export const Container = styled.div`
  display: flex;
  min-width: 100%;
  width: fit-content;
  min-height: 100%;

  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  position: relative;
  display: grid;
  min-width: 650px;
  min-height: 400px;
  grid-template-columns: 250px 1fr;

  @media screen and (max-width: 730px) {
    min-width: 100%;
    grid-template-columns: 1fr;
  }
`

export const DateInformation = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: max-content max-content 1fr max-content;
  padding: 15px;
  border-radius: 15px 0 0 15px;
  background-color: ${(p) =>
    p.theme.name == ITheme.THEME_DARK ? p.theme.primary[300].default : p.theme.primary[700].default};
  color: ${(p) => (p.theme.name == ITheme.THEME_DARK ? p.theme.text[900].default : p.theme.text[100].default)};

  @media screen and (max-width: 730px) {
    grid-template-rows: max-content max-content 1fr;
    grid-template-columns: 1fr 2fr;
    min-height: 190px;
    grid-column-gap: 30px;

    grid-row: 2/3;
    border-radius: 0 0 15px 15px;
  }
`

export const DateSelectedDay = styled.h1`
  margin: 0;
  text-align: center;
  width: 100%;
  font-size: 60pt;
  @media screen and (max-width: 730px) {
    grid-column: 1/2;
  }
`

export const DateSelectedMonth = styled.h3`
  margin: 0;
  text-align: center;
  font-size: 23pt;
  @media screen and (max-width: 730px) {
    grid-column: 1/2;
  }
`

export const DateSelectedMod = styled.div`
  margin-top: auto;
  margin-left: auto;
  @media screen and (max-width: 730px) {
    margin-right: auto;
    grid-column: 1/2;
  }
`

export const DateYearContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`

export const DateContent = styled.div`
  padding: 15px;
  border-radius: 0 15px 15px 0;
  background-color: ${(p) => p.theme.background[100].default};

  @media screen and (max-width: 730px) {
    border-radius: 15px 15px 0 0;
  }
  * {
    user-select: none;
  }
`

export const DateYearArrow = styled.svg`
  width: 30px;
  height: 30px;
  fill: ${(p) => p.theme.background[950].default};

  &[data-rotate='true'] {
    transform: rotate(180deg);
  }

  &[data-active='true'] {
    cursor: pointer;
  }
  &[data-active='false'] {
    pointer-events: none;
    fill: ${(p) => p.theme.background[300].default};
  }
`

export const DateMonths = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin: 15px 0;
`

export const DateMonth = styled.div`
  position: relative;
  color: ${(p) => p.theme.background[300].default};
  pointer-events: none;
  &[data-active='ok'] {
    cursor: pointer;
    pointer-events: all;
    color: ${(p) => p.theme.background[900].default};
    cursor: pointer;
  }
  &[data-active='current'] {
    color: ${(p) => p.theme.primary[700].default};
  }
`

export const Calendar = styled.div`
  display: grid;
  font-size: 15pt;
  min-height: calc(100% - 70px);
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  text-align: center;
`

export const Date = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  cursor: pointer;
  color: ${(p) => p.theme.background[300].default};

  &[data-status='off']:after {
    position: absolute;
    content: '';
    top: 0;
    left: 100%;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background-color: ${(p) => p.theme.secondary[200].default};
  }
  &[data-date='true'][data-status='notSet'] {
    color: rgba(255, 0, 0, 0.35);
  }
  &[data-date='false'] {
    color: ${(p) => p.theme.background[900].default};
  }
  &[data-date='false'][data-status='notSet'] {
    color: red;
  }
  &[data-date='false'][data-status='off']:after {
    background-color: ${(p) => p.theme.secondary[500].default};
  }
`

export const SelectedInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;

  @media screen and (max-width: 730px) {
    grid-column: 2/3;
    grid-row: 1/ 4;
  }

  h3 {
    margin: 0;
  }
`
