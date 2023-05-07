import { Stack } from "@mui/material";
import React from "react";

type Props = {
  text: string;
};

const Helmet = ({ text }: Props) => {
  return (
    <Stack
      sx={{
        fontSize: {
          xs: "15px",
          sm: "20px",
          md: "23px",
          lg: "23px",
        },
        fontWeight: 700,
        color: "#2D2E61",
      }}
    >
      {text}
    </Stack>
  );
};

export default Helmet;
