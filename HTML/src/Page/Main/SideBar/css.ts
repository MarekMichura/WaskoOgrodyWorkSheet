import {Link} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'

import {IThemes} from '/global/THEME'

export const Container = styled.nav`
  position: relative;
  width: 60px;
  height: 100%;

  grid-row: 1/3;
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: auto;
  transition: 300ms width ease-in-out;

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
    transition: 300ms height ease-in-out;

    &[data-open='true'] {
      height: 230px;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-shrink: 0;
  padding-top: 10px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

export const MenuContainer = styled.div`
  position: relative;
  padding: 10px;
  width: calc(100% - 20px);
  @media screen and (max-width: 600px) {
    [data-open='true'] & {
      display: flex;
      align-items: center;
      justify-content: center;
      height: calc(100% - 20px);
    }
  }
  /* min-height: calc(100% - 20px); */
`

export const MenuScroll = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  scroll-snap-type: x mandatory;

  @media screen and (max-width: 600px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: calc(100% - 20px);

    [data-open='true'] & {
      padding: 5px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      & > * {
        grid-column: span 2;
      }

      &:has(:nth-child(9)) {
        height: calc(100% - 20px);
      }
      &:has(:nth-child(5)) {
        > * {
          grid-column: span 1;
        }
      }
    }
  }

  @media screen and (max-width: 300px) {
    [data-open='true'] & {
      height: 100%;
      grid-template-columns: 1fr;
    }
    & > * {
      grid-column: 1/1 !important;
    }
  }
`

const keyframe = keyframes`
  0%{background-position:10% 0%}
  50%{background-position:91% 100%}
  100%{background-position:10% 0%}
`

export const MenuOption = styled.div`
  position: relative;
  min-width: 40px;
  display: grid;
  grid-template-columns: auto 0fr;
  align-items: center;
  border-radius: 30px;

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
  transition: 300ms ease-in-out background-position;

  &:hover {
    background-position: right;
  }

  [data-open='true'] & {
    grid-template-columns: auto 1fr;
    padding-right: 10px;
  }

  @media screen and (max-width: 600px) {
    [data-open='true'] & {
      &:nth-child(odd):last-child {
        grid-column: span 2;
      }
    }
  }

  &[data-selected='true']:before {
    content: '';
    z-index: -1;
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    background: linear-gradient(
      ${(p) => p.theme.secondary[500].default} 0%,
      ${(p) => p.theme.primary.default} 50%,
      ${(p) => p.theme.secondary[500].default} 100%
    );
    background-size: 200% 200%;
    border-radius: inherit;
    animation: 3s ${keyframe} linear infinite;
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
  max-height: 0;

  [data-open='true'] & {
    max-height: 1000px;
    transition: 1s max-height ease-in-out 200ms;
  }
`
