/** @jsxImportSource theme-ui */
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Flex, Box } from "theme-ui";

const LayoutBasic = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Header />
        <Box as="main">
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
};

export default LayoutBasic;
