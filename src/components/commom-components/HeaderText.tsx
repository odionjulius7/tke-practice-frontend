import { Stack } from "@mui/material";
import React from "react";

type Props = {};

const HeaderText = (props: Props) => {
  return (
    <Stack
      sx={{
        fontSize: {
          xs: "12px",
          sm: "13px",
          md: "14px",
        },
        fontWeight: 600,
        margin: {
          xs: "0.4rem 0rem",
          md: "1rem 0rem",
        },
        color: "#5F5F5F",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas nunc sit
      elementum gravida. Massa vel egestas orci elementum.{" "}
    </Stack>
  );
};

export default HeaderText;
