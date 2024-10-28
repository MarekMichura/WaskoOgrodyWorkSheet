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

export const Date = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  cursor: pointer;
  transition: color 300ms ease-in-out;
  color: ${(p) => p.theme.background[800].default};

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 100%;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    transition: background-color 300ms ease-in-out;
  }

  &[data-status='false-false-false'] {
    opacity: 0.3; // poza zakresem
    // nie wolne
    color: red; // nie pracował
  }

  &[data-status='false-false-true'] {
    opacity: 0.3; // poza zakresem
    // nie wolne
    // pracował
  }

  &[data-status='false-true-false'] {
    opacity: 0.3; // poza zakresem
    // wolne
    &:after {
      background-color: ${(p) => p.theme.primary.default};
    }
    // nie pracował
  }

  &[data-status='false-true-true'] {
    opacity: 0.3; // poza zakresem
    // wolne
    // pracował
    &:after {
      background-color: ${(p) => p.theme.secondary[500].default};
    }
  }

  &[data-status='true-false-false'] {
    // miesiac
    // nie wolne
    color: red; // nie pracował
  }

  &[data-status='true-false-true'] {
    // miesiac
    // nie wolne
    // pracował
  }

  &[data-status='true-true-false'] {
    // miesiac
    // wolne
    &:after {
      background-color: ${(p) => p.theme.primary.default};
    }
    // nie pracował
  }

  &[data-status='true-true-true'] {
    // miesiac
    // wolne
    &:after {
      background-color: ${(p) => p.theme.secondary[500].default};
    }
    // pracował
  }
`
