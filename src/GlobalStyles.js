/** @format */

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
}

body {
  font-family: 'Worksans',  'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	background-image: url('https://static.wixstatic.com/media/c86aa8_19e4d7b13e704d5e94e25ed56ded56cc~mv2.jpg/v1/fill/w_1296,h_473,al_c,q_85,enc_auto/c86aa8_19e4d7b13e704d5e94e25ed56ded56cc~mv2.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`

export default GlobalStyle
