import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100dvh;
    margin: 0;
    padding: 0;
    background-color: #e5e5e5;
    box-sizing: border-box;
    color: var(--black);
  }
`

export default GlobalStyle