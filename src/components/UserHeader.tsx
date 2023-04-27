import React from "react";
import { CardMedia, Container, Stack } from "@mui/material";
import IconLabelButtons from "../components/HomeBTN";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";

import Logo from "../Images/TKE_logo.png";
import ProfileBtn from "../components/ProfileBtn";
type Props = {
  // user: any;
};

const UserHeader = (props: Props) => {
  //
  const navigate = useNavigate();

  return (
    <>
      <Stack onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
        <CardMedia
          sx={{ width: "130px", height: "120px" }}
          component="img"
          image={Logo}
          alt="Paella dish"
        />
      </Stack>
      <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
        <Stack>
          <IconLabelButtons
            startIconOption={<EmailIcon />}
            variant={"contained"}
            sx={{
              backgroundColor: "#ffffff66",
              "&:hover": { backgroundColor: "#ffffff77" },
              "& .css-1xiv7qz-MuiButtonBase-root-MuiButton-root": {
                color: "#ffffff",
              },
            }}
          />
        </Stack>
        <Stack>
          <ProfileBtn
            startIconOption={
              <AccountCircleIcon
                sx={{
                  color: "white",
                  "& .css-z8x9km-MuiButtonBase-root-MuiButton-root": {
                    color: "white",
                  },
                  width: "30px",
                  height: "30px",
                }}
              />
            }
            variant={"text"}
            sx={{
              "&:hover": { backgroundColor: "#ffffff77" },
              "& .css-1xiv7qz-MuiButtonBase-root-MuiButton-root": {
                color: "#ffffff",
              },
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default UserHeader;
