import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    --white: #fff;
    --gray: #e5e5e5;
    --dark: #14213d;
    --black: #000;
    --color: #fca311;
    --green: #06a77d;
    --red: #f25c54;
    box-sizing: inherit;
  }

  body {
    /* size */
    min-height: 100vh;
    margin: 0;
    padding: 0;
    /* bg color */
    background-color: var(--gray);
    box-sizing: border-box;
    color: var(--black);
  }
`;

export default GlobalStyle;