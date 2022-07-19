import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

:root{
  ::-webkit-scrollbar{
      display: none;
  }
}
p,h1,h2,h3,h4,h5,h6,div {
    margin: 0;
    padding: 0;
    color:  ${props => props.theme.colors.color};
}
main,body{
    background-color: ${props => props.theme.colors.primary};
}

li{

    background-color: ${props => props.theme.colors.secondary};
}
 button{
     border: none;
     color :#D1D0D8;
     background-color:  transparent;

 }
`
export default GlobalStyle