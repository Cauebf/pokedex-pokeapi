import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  ul, li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: #000000;
  }

  body {
    height: 100%;
    font-family: "Roboto", sans-serif;
  }
`;
