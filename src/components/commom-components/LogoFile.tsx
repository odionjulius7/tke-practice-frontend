import { Avatar } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Logo from "../../Images/TKE_logo.png";
import { useNavigate } from "react-router-dom";

type Props = {
  sx: {};
};

const LogoFile = ({ sx }: Props) => {
  const navigate = useNavigate();
  return (
    <Stack sx={sx}>
      <Avatar
        src={Logo}
        variant="square"
        sx={{ width: 120, height: 110, cursor: "pointer" }}
        onClick={() => navigate("/")}
      />
    </Stack>
  );
};

export default LogoFile;
