import { useContext } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./context/theme";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={theme}></ThemeProvider>
    </>
  );
}

export default App;
