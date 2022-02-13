import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}
a{
  text-decoration: none;
  color:#000;
}
`;

export default GlobalStyle;
