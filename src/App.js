/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";
import { theme } from "./application/abstract/Theme";
import { RecoilRoot } from "recoil";
import Router from "./static/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <div className="App">
          <Router />
        </div>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
