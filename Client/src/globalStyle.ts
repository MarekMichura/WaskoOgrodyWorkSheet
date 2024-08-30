import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #e5e5e5;
    box-sizing: border-box;
    color: var(--black);
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
    min-width: 100vw;
  }
`

export default GlobalStyle