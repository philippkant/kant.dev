import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: #111827;
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
  }
  p {
    color: #111827;
    //line-height: 100%;
  }

  body {
    background-color: #f6f7f8;
    //overflow: overlay;
  }

  html {
    //margin-left: calc(100vw - 100%);
    //margin-right: 0;
    //overflow-y: scroll;
    //width: 100vw
  }
  
`;
export default GlobalStyles;