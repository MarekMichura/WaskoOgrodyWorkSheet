import styled, {FastOmit} from 'styled-components'
import {IStyledComponentBase} from 'styled-components/dist/types'

export const Container = styled.div`
  min-height: 100dvh;
  min-width: 100dvw;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;

  @media screen and (max-width: 600px) {
    grid-template-rows: auto 1fr auto auto;
    grid-template-columns: 1fr;
  }
`

export const TopBar = styled.div`
  position: relative;
  padding-bottom: 5px;
  padding-right: 15px;
  padding-top: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  grid-row: 1 / 2;
  grid-column: 1 / 3;

  border-bottom: 1px solid ${(a) => a.theme.background[100].default};

  @media screen and (max-width: 600px) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
`

export const UserName = styled.h3`
  font-size: 15pt;
  padding: 0;
  margin: 0;
`

export const UserProfile = styled.img`
  height: 40px;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: ${(p) => p.theme.background[200].default};
`

export const TopBarIcon = styled.svg`
  height: 40px;
  aspect-ratio: 1;

  cursor: pointer;

  path {
    fill: ${(a) => a.theme.background[600].default};
  }
  overflow: hidden;
`
export const FaceIcon = styled(TopBarIcon)`
  border-radius: 100%;
  background-color: ${(p) => p.theme.background[200].default};
` as IStyledComponentBase<'web', FastOmit<React.SVGProps<SVGSVGElement>, never>>

export const Content = styled.div`
  padding-top: 15px;
  padding-left: 15px;

  grid-row: 2 / 3;
  grid-column: 2 / 3;

  @media screen and (max-width: 600px) {
    padding-left: 0;

    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
`

export const Bottom = styled.div`
  display: none;
  grid-row: 1 / 3;
  grid-column: 1 / 2;

  @media screen and (max-width: 600px) {
    display: block;
    grid-row: 3 / 4;
    grid-column: 1 / 2;
  }
`

export const Menu = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;

  @media screen and (max-width: 600px) {
    grid-row: 4 / 5;
    grid-column: 1 / 2;
  }
`
