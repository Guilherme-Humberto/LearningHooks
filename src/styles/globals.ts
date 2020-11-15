import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  h1, h2, h3, p {
    font-family: Roboto
  }

  button {
    padding: 10px;
    border: none;
    font-size: 15;
    font-weight: bold;
    margin: 10px 0;
  }

`
