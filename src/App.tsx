import { useContext } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./context/theme";
import PageRoutes from "./Routes";
import GlobalStyle from "./Style/globalStyle";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
