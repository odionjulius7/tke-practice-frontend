import { Divider, Stack } from "@mui/material";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Stack sx={{ margin: "6rem 0 0rem 0" }}>
      <Divider sx={{ bgcolor: "#fff", margin: "1rem 0" }} />
      <Stack
        sx={{
          textAlign: "center",
          fontSize: "14px",
          fontWeight: 400,
          margin: "0.2rem 0 1.3rem 0",
        }}
      >
        © 2022 All right reserved by The Keona Experience
      </Stack>
    </Stack>
  );
};

export default Footer;
