import styled from 'styled-components'

import {IThemes} from '/global/THEME'

export const Container = styled.nav`
  position: relative;
  width: 60px;
  height: 100%;

  grid-row: 1/3;
  grid-column: 1/2;
  display: flex;
  flex-direction: column;

  overflow: auto;
  transition:
    1s width ease-in-out,
    1s height ease-in-out;

  @media screen and (min-width: 600px) {
    &[data-open='true'] {
      width: 230px;
    }
  }

  @media screen and (max-width: 600px) {
    grid-row: 3/4;
    width: 100%;
    flex-direction: row;
    height: 60px;

    &[data-open='true'] {
      height: 230px;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
  padding: 10px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 10px;
  width: calc(100% - 20px);
  min-height: calc(100% - 20px);

  @media screen and (max-width: 600px) {
    flex-direction: row;
    justify-content: space-evenly;

    [data-open='true'] & {
      display: grid;
      grid-template-columns: 1fr 1fr;
      overflow-y: scroll;
    }
  }
`

export const MenuOption = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 0fr;
  align-items: center;
  border-radius: 30px;

  background-size: 400% 100%;
  cursor: pointer;

  box-shadow: 0 0 5px 0
    ${(p) => (p.theme.name == IThemes.THEME_DARK ? p.theme.background[50].default : p.theme.background[500].default)};
  background: linear-gradient(
    to right,
    ${(a) => a.theme.background[100].default} 0%,
    ${(a) => a.theme.background[100].default} 25%,
    ${(a) => a.theme.background[200].default} 75%,
    ${(a) => a.theme.background[200].default} 100%
  );

  background-size: 400% 400%;
  background-position: left;

  transition: 1s ease-in-out background-position;

  &:hover {
    background-position: right;
  }

  [data-open='true'] & {
    grid-template-columns: auto 1fr;
    padding-right: 10px;
  }

  [data-selected='true']& {
    box-shadow: 0 0 3px 2px ${(a) => a.theme.primary.default};
  }
`

export const MenuOptionDown = styled(MenuOption)``

export const MenuIconContainer = styled.div`
  border-radius: 100%;
  width: 30px;
  height: 30px;
  padding: 5px;
`

export const MenuIcon = styled.svg`
  height: 30px;
  width: 30px;

  fill: ${(a) => a.theme.background[800].default};
`

export const MenuText = styled.div`
  overflow: hidden;
  text-align: center;
`
