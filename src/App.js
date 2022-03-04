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
          {/* <Routes>
            <Route path="/" element={<LayoutBasic />}>
              <Route path="" element={<Index />} />
              <Route path="/to-watch" element={<ToWatch />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/media/:id" element={<MediaView />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes> */}
        </div>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
