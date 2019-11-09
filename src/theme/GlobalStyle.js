import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    font-size: 13pt;
  }

  @media (min-width: 420px) {
    html {
      font-size: 14pt;
    }
  }

  body {
    min-width: 310px;
    font-family: verdana, sans-serif;
    color: rgb(58, 58, 58);
  }

  ::selection {
    background-color: rgba(100, 190, 50, 0.2);
  }

  p {
    line-height: 1.8;
  }

  @media (max-width: 419px) {
    p {
      margin-top: 0;
    }
  }

  a {
    font-family: monospace;
    color: rgb(58, 58, 58);
  }

  img {
    max-width: 100%;
  }

`