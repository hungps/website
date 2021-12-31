import { createGlobalStyle } from 'styled-components'

import RobotoFont from 'src/assets/fonts/roboto-regular.ttf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url(${RobotoFont}) format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: black;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
    white-space: pre-line;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  div {
    display: flex;
  }
`
