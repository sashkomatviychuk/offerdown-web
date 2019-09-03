import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap');
  
  ${normalize}
  
  html {
    box-sizing: border-box;
  }

  body {
    color: ${theme.black};
    font-family: 'Lato', sans-serif;
    line-height: 24px;
    overflow-y: scroll;
    user-select: none;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  input {
    font-family: 'Lato', sans-serif;
  }

  :focus {
    outline: 0;
  }

  a {
    color: ${theme.black};
    text-decoration: none;
  }

  svg {
    fill: ${theme.white};
  }
`
