import { Container } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const CompWrapper = ({ children }: Props) => {
  return <Container sx={{ minHeight: "660px" }}>{children}</Container>;
};

export default CompWrapper;
