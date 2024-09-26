import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root[data-theme="light"] {
    --text-50:  hsl(120, 31%, 95%);
    --text-100: hsl(120, 33%, 90%);
    --text-200: hsl(120, 33%, 80%);
    --text-300: hsl(120, 33%, 70%);
    --text-400: hsl(120, 33%, 60%);
    --text-500: hsl(120, 33%, 50%);
    --text-600: hsl(120, 33%, 40%);
    --text-700: hsl(120, 33%, 30%);
    --text-800: hsl(120, 33%, 20%);
    --text-900: hsl(120, 33%, 10%);
    --text-950: hsl(120, 31%, 5%);

    --background-50:  hsl(0, 0%, 95%);
    --background-100: hsl(0, 0%, 90%);
    --background-200: hsl(0, 0%, 80%);
    --background-300: hsl(0, 0%, 70%);
    --background-400: hsl(0, 0%, 60%);
    --background-500: hsl(0, 0%, 50%);
    --background-600: hsl(0, 0%, 40%);
    --background-700: hsl(0, 0%, 30%);
    --background-800: hsl(0, 0%, 20%);
    --background-900: hsl(0, 0%, 10%);
    --background-950: hsl(0, 0%, 5%);

    --primary: #226322;
    --primary-50:  hsl(120, 46%, 95%);
    --primary-100: hsl(120, 49%, 90%);
    --primary-200: hsl(120, 49%, 80%);
    --primary-300: hsl(120, 49%, 70%);
    --primary-400: hsl(120, 49%, 60%);
    --primary-500: hsl(120, 49%, 50%);
    --primary-600: hsl(120, 49%, 40%);
    --primary-700: hsl(120, 49%, 30%);
    --primary-800: hsl(120, 49%, 20%);
    --primary-900: hsl(120, 49%, 10%);
    --primary-950: hsl(120, 46%, 5%);

    --secondary-50:  hsl(120, 31%, 95%);
    --secondary-100: hsl(120, 33%, 90%);
    --secondary-200: hsl(120, 31%, 80%);
    --secondary-300: hsl(120, 32%, 70%);
    --secondary-400: hsl(120, 32%, 60%);
    --secondary-500: hsl(120, 32%, 50%);
    --secondary-600: hsl(120, 32%, 40%);
    --secondary-700: hsl(120, 32%, 30%);
    --secondary-800: hsl(120, 31%, 20%);
    --secondary-900: hsl(120, 33%, 10%);
    --secondary-950: hsl(120, 31%, 5%);

    --accent-50:  hsl(120, 15%, 95%);
    --accent-100: hsl(120, 18%, 90%);
    --accent-200: hsl(120, 16%, 80%);
    --accent-300: hsl(120, 16%, 70%);
    --accent-400: hsl(120, 16%, 60%);
    --accent-500: hsl(120, 16%, 50%);
    --accent-600: hsl(120, 16%, 40%);
    --accent-700: hsl(120, 16%, 30%);
    --accent-800: hsl(120, 16%, 20%);
    --accent-900: hsl(120, 18%, 10%);
    --accent-950: hsl(120, 15%, 5%);

  }
  :root[data-theme="dark"] {
    --text-50:  hsl(120, 31%, 5%);
    --text-100: hsl(120, 33%, 10%);
    --text-200: hsl(120, 33%, 20%);
    --text-300: hsl(120, 33%, 30%);
    --text-400: hsl(120, 33%, 40%);
    --text-500: hsl(120, 33%, 50%);
    --text-600: hsl(120, 33%, 60%);
    --text-700: hsl(120, 33%, 70%);
    --text-800: hsl(120, 33%, 80%);
    --text-900: hsl(120, 33%, 90%);
    --text-950: hsl(120, 31%, 95%);

    --background-50:  hsl(0, 0%, 5%);
    --background-100: hsl(0, 0%, 10%);
    --background-200: hsl(0, 0%, 20%);
    --background-300: hsl(0, 0%, 30%);
    --background-400: hsl(0, 0%, 40%);
    --background-500: hsl(0, 0%, 50%);
    --background-600: hsl(0, 0%, 60%);
    --background-700: hsl(0, 0%, 70%);
    --background-800: hsl(0, 0%, 80%);
    --background-900: hsl(0, 0%, 90%);
    --background-950: hsl(0, 0%, 95%);

    --primary: #226322;
    --primary-50:  hsl(120, 46%, 5%);
    --primary-100: hsl(120, 49%, 10%);
    --primary-200: hsl(120, 49%, 20%);
    --primary-300: hsl(120, 49%, 30%);
    --primary-400: hsl(120, 49%, 40%);
    --primary-500: hsl(120, 49%, 50%);
    --primary-600: hsl(120, 49%, 60%);
    --primary-700: hsl(120, 49%, 70%);
    --primary-800: hsl(120, 49%, 80%);
    --primary-900: hsl(120, 49%, 90%);
    --primary-950: hsl(120, 46%, 95%);

    --secondary-50:  hsl(120, 31%, 5%);
    --secondary-100: hsl(120, 33%, 10%);
    --secondary-200: hsl(120, 31%, 20%);
    --secondary-300: hsl(120, 32%, 30%);
    --secondary-400: hsl(120, 32%, 40%);
    --secondary-500: hsl(120, 32%, 50%);
    --secondary-600: hsl(120, 32%, 60%);
    --secondary-700: hsl(120, 32%, 70%);
    --secondary-800: hsl(120, 31%, 80%);
    --secondary-900: hsl(120, 33%, 90%);
    --secondary-950: hsl(120, 31%, 95%);

    --accent-50:  hsl(120, 15%, 5%);
    --accent-100: hsl(120, 18%, 10%);
    --accent-200: hsl(120, 16%, 20%);
    --accent-300: hsl(120, 16%, 30%);
    --accent-400: hsl(120, 16%, 40%);
    --accent-500: hsl(120, 16%, 50%);
    --accent-600: hsl(120, 16%, 60%);
    --accent-700: hsl(120, 16%, 70%);
    --accent-800: hsl(120, 16%, 80%);
    --accent-900: hsl(120, 18%, 90%);
    --accent-950: hsl(120, 15%, 95%);
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--text-950);
    background-color: var(--background-50);
  }
`

export default GlobalStyle
