/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";

const Score = ({ score, text }) => {
  return (
    <Box
      my={3}
      sx={{
        backgroundColor: "backgroundContrast",
        borderRadius: "sm",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: `${score}%`,
          backgroundColor: "tertiary",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
        }}
      />
      <Box
        p={1}
        sx={{
          fontSize: 1,
          position: "relative",
          fontWeight: "bold",
          textAlign: "center",
          textShadow: "1px 1px 4px #000",
        }}
      >
        {`${text}${parseInt(score)}%`}
      </Box>
    </Box>
  );
};

export default Score;
