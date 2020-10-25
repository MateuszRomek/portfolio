import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin:0;
    padding:0;
    font-family: 'Jost', sans-serif;
    font-size: 16px;
    color: rgb(23,37,42);
    background-color: rgb(247,250,252);
  }
`

export default GlobalStyle
