import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(145.87deg, rgb(28, 42, 52) 10.36%, rgb(17, 26, 32) 49.58%, rgb(17, 26, 32) 49.58%);
    color: var(--white);
  }
  body, input, button {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

  :root {
    --white: rgb(236, 248, 255);
  }
`;
