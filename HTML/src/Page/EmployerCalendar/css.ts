import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  font-size: 15pt;
  text-align: center;
`

export const NavBar = styled.div`
  grid-column: 1/8;
  background-color: ${(p) => p.theme.background[50].default};
  padding: 5px 15px;
`

export const TopRow = styled.div`
  display: contents;

  & > * {
    background-color: ${(p) => p.theme.background[50].default};
  }
`

export const Row = styled.div`
  display: contents;
  & > * {
    background-color: ${(p) => p.theme.background[50].default};
    padding: 5px 15px;
  }
`
