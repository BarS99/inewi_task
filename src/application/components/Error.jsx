import React from "react";
import { Container, Message } from "theme-ui";

const Error = ({ message }) => {
  return (
    <Container
      sx={{
        variant: "container.full",
      }}
      p={4}
    >
      <Message variant="message.primary">{message}</Message>
    </Container>
  );
};

export default Error;
