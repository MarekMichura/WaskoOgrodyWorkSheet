import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
`

export const Bar = styled.div`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;
  box-shadow: 0px 0px 20px -10px #000;
  text-align: center;
  gap: 15px;

  h2, h3 {
    margin: 0;
  }
`

export const Bottom = styled.div`
  padding: 10px 30px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-evenly;
  background-color: #eee;
  box-shadow: 0px 0px 20px -10px #000;
  text-align: center;
  gap: 30px;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`

export const BottomContainer = styled.div`
  display: flex;
  width: 320px;
  justify-content: space-evenly;
`

export const BottomContent = styled.div`
 display: flex;
 min-width: 60px;
 height: 60px;
 background-color: #fff;
 border-radius: 100%;
 flex: 1;
 flex-direction: column;
 overflow: hidden;
 justify-content: center;
`

export const Menu = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
`

export const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-family: "Archivo Black", sans-serif;
`;


export const Content = styled.div`
  flex: 2;
`


