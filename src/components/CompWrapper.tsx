import { Container } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const CompWrapper = ({ children }: Props) => {
  return (
    <Container
      sx={{
        minHeight: {
          xs: "680px",
          sm: "660px",
          md: "660px",
        },
        padding: {
          xs: "1rem 1rem",
          sm: "1rem 2rem",
          md: "1rem 2rem",
        },
      }}
    >
      {children}
    </Container>
  );
};

export default CompWrapper;
