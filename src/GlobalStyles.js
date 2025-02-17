import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 1.4;
    color: #000000;
    background-color: #FAF5F0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;