import {styled} from 'styled-components'

export const Container = styled.div`
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

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 8pt;
`

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`

export const Arrow = styled.svg`
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

export const MonthsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin: 15px 0;
`

export const Month = styled.div`
  position: relative;
  color: ${(p) => p.theme.background[300].default};
  pointer-events: none;
  &[data-active='true'] {
    cursor: pointer;
    pointer-events: all;
    color: ${(p) => p.theme.background[900].default};
    cursor: pointer;
  }
  &[data-current='true'] {
    cursor: default;
    color: ${(p) => p.theme.primary[700].default};
  }
`

export const Content = styled.div`
  display: grid;
  font-size: 15pt;
  min-height: calc(100% - 70px);
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  text-align: center;
`
