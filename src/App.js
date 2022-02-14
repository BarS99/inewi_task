/** @jsxImportSource theme-ui */
import { Routes, Route, useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import LayoutBasic from "./application/layouts/LayoutBasic";
import Index from "./application/pages/Index";
import ToWatch from "./application/pages/ToWatch";
import Favorite from "./application/pages/Favorite";
import MediaView from "./application/pages/MediaView";
import Search from "./application/pages/Search";
import Page404 from "./application/pages/Page404";
import { ThemeProvider, Spinner, Flex, Box } from "theme-ui";
import { theme } from "./application/abstract/Theme";
import { RecoilRoot } from "recoil";

function App() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useLayoutEffect(() => {
    const displayLoader = async () => {
      setLoader((prev) => {
        return true;
      });

      try {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 500);
        });

        setLoader((prev) => {
          return false;
        });
      } catch {}
    };

    displayLoader();
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <div className="App">
          <Routes>
            <Route path="" element={<LayoutBasic />}>
              <Route path="" element={<Index />} />
              <Route path="/to-watch" element={<ToWatch />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/media/:id" element={<MediaView />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>

          {loader && (
            <Flex
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "background",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100000,
              }}
            >
              <Spinner mr={3} />
              <Box
                sx={{
                  fontSize: 2,
                }}
              >
                Loading...
              </Box>
            </Flex>
          )}
        </div>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
