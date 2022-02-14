/** @jsxImportSource theme-ui */
import { Container, Box } from "theme-ui";

const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        backgroundColor: "primary",
        lineHeight: "text",
        textAlign: "center",
        fontSize: 0,
      }}
    >
      <Container px={4} py={2} sx={{ variant: "container.md" }}>
        Copyright © 2022 - Bartłomiej Święch for INEWI
      </Container>
    </Box>
  );
};

export default Footer;
