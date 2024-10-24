import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  a {
    all: unset;
  }

  body {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    font-family: "Lato", sans-serif;

    color: ${(a) => a.theme.text[950].default};
    background-color: ${(a) => a.theme.background[100].default};
  }
`
