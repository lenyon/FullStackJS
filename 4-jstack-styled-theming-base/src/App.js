import React, { useState, useMemo } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

import themes from "./styles/themes";

function App() {
  const [theme, setTheme] = useState("dark");

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark; //mesma coisa que usar themes.dark, mas para acessar o valor de uma a variavel. Se nao ele vai tentar acessar/achar a propriedade theme e nao o valor dark.
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState == "dark" ? "light" : "dark"));
  }
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
    </ThemeProvider>
  );
}

export default App;
