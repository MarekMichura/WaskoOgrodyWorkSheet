import styled from 'styled-components';

export const Calendar = styled.div`
  font-weight: 100;
  background: #4A4A4A;
  color: white;

  width: 420px;
  margin: 0 auto;
`

export const Header = styled.h1`
  height: 50px;
  width: 100%;
  background: rgba(66, 66, 66, 1);
  text-align: center;
  position: relative;

  display: block;
  margin: 0;
  padding: 0;
  font-size: 20px;
  line-height: 50px;
  font-weight: 100;
  letter-spacing: 1px;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  padding: 5px;
  font-size: 25px;

  & > div{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4A4A4A;
    margin: 5px;
  }
`
const Arrow = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  border-style: solid;
  top: 50%;
  margin-top: -7.5px;
  cursor: pointer;
`;

export const left = styled(Arrow) `
  border-width: 7.5px 10px 7.5px 0;
  border-color: transparent rgba(160, 159, 160, 1) transparent transparent;
  left: 20px;
`

export const right = styled(Arrow) `
  border-width: 7.5px 0 7.5px 10px;
  border-color: transparent transparent transparent rgba(160, 159, 160, 1);
  right: 20px;
`
