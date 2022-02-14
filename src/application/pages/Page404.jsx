/** @jsxImportSource theme-ui */
import React from "react";
import { Container, Message } from "theme-ui";

const Page404 = () => {
  return (
    <Container
      sx={{
        variant: "container.md",
      }}
      p={4}
    >
      <Message variant="message.primary">404 not found!</Message>
    </Container>
  );
};

export default Page404;
