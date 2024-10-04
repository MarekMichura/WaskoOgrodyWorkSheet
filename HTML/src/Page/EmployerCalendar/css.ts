import styled from 'styled-components'

export const Container = styled.div`
  font-size: 15pt;
  min-width: fit-content;
  min-height: calc(100% - 20px);
  text-align: center;
  display: grid;
  grid-template-columns: repeat(7, minmax(1fr, fit-content));
  /* grid-template-rows: repeat(8, minmax(1fr, 60px)); */
  background-color: ${(p) => p.theme.background[300].default};
  border-radius: 10px;
  overflow: hidden;
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1/8;
  padding: 5px 15px;
  background-color: ${(p) => p.theme.secondary[300].default};
`

export const TopRow = styled.div`
  display: contents;

  & > * {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(p) => p.theme.secondary[300].default};
  }
`

export const Row = styled.div`
  display: contents;

  & > * {
    position: relative;
    min-width: min(100px fit-content);
    padding: 5px;
    display: flex;
    min-height: 1fr;
  }
  & > *:after {
    content: ' ';
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    border-top: 1px solid ${(p) => p.theme.background[50].default};
    border-left: 1px solid ${(p) => p.theme.background[50].default};
  }
  & > *:first-child::after {
    border-left: none;
  }
`
