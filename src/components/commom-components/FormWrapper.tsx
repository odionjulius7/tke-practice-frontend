import { Stack } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactElement | undefined;
};

const FormWrapper = ({ children }: Props) => {
  return (
    <Stack
      sx={{
        margin: "2rem 0",
      }}
    >
      {children}
    </Stack>
  );
};

export default FormWrapper;
