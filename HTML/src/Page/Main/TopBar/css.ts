import styled from 'styled-components'

import {ITheme} from '/QueryFn/Theme/types/ITheme'

export const Container = styled.header`
  position: relative;
  height: 60px;
  padding-right: 30px;
  padding-left: 10px;

  grid-row: 1/2;
  grid-column: 2/3;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    grid-column: 1/2;
  }
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 1fr;
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  width: 1fr;
  max-height: 100%;
  gap: 5px;
`

export const Title = styled.h3`
  margin: 0;
  margin-left: 10px;
  display: block;

  font-family: 'Archivo Black';

  @media screen and (max-width: 600px) {
    display: none;
  }
`

export const Icon = styled.svg`
  width: 30px;
  height: 30px;
  aspect-ratio: 1;

  display: block;

  cursor: pointer;
  fill: ${(a) => a.theme.background[800].default};
`

export const IconCon = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 100%;
  padding: 5px;

  box-shadow: 0 0 5px 0
    ${(p) => (p.theme.name == ITheme.THEME_DARK ? p.theme.background[50].default : p.theme.background[500].default)};

  background-color: ${(p) =>
    p.theme.name == ITheme.THEME_DARK ? p.theme.background[100].default : p.theme.background[50].default};
`

export const BelNum = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  font-size: 10pt;
  text-align: center;

  overflow: hidden;
  background-color: ${(p) => p.theme.primary.default};
`

export const MenuCon = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  padding-left: 10px;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0 0 5px 0
    ${(p) => (p.theme.name == ITheme.THEME_DARK ? p.theme.background[50].default : p.theme.background[500].default)};

  background-color: ${(p) =>
    p.theme.name == ITheme.THEME_DARK ? p.theme.background[100].default : p.theme.background[50].default};
`

export const IconSmall = styled.svg`
  margin-left: -5px;

  width: 30px;
  height: 30px;
  aspect-ratio: 1;

  display: block;
  fill: ${(a) => a.theme.background[800].default};
`

export const MenuItem = styled.div`
  overflow: hidden;
`

export const Menu = styled.div`
  position: absolute;
  padding: 0 10px;
  right: 30px;
  top: 65px;
  width: 300px;

  display: grid;
  overflow: hidden;
  z-index: 10;

  grid-template-rows: 0fr;

  box-shadow: 0 0 5px 0
    ${(p) => (p.theme.name == ITheme.THEME_DARK ? p.theme.background[50].default : p.theme.background[500].default)};
  background-color: ${(p) =>
    p.theme.name == ITheme.THEME_DARK ? p.theme.background[100].default : p.theme.background[50].default};

  transition:
    grid-template-rows 300ms ease-in-out,
    padding 300ms ease-in-out;

  &[data-open='true'] {
    grid-template-rows: 1fr;
    padding: 10px;
  }

  @media screen and (max-width: 600px) {
    right: 5px;
    left: 5px;
    top: 65px;
    width: auto;
  }
`

export const MenuBehind = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  transition: backdrop-filter 300ms ease-in-out;

  &[data-open='true'] {
    pointer-events: all;
    backdrop-filter: blur(3px);
  }
`

export const UserFlex = styled.div`
  display: flex;
  gap: 5px;
`

export const UserRightFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const BigIcon = styled.svg`
  width: 50px;
  height: 50px;
  aspect-ratio: 1;

  display: block;

  fill: ${(a) => a.theme.background[800].default};
`

export const MenuOption = styled.div`
  cursor: pointer;
  text-align: center;
`
