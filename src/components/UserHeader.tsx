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
          sx={{
            width: {
              xs: "70px",
              sm: "120px",
              md: "130px",
            },
            height: {
              xs: "60px",
              sm: "110px",
              md: "120px",
            },
          }}
          component="img"
          image={Logo}
          alt="Paella dish"
        />
      </Stack>
      <Stack
        direction="row"
        spacing={{
          xs: 2,
          sm: 3,
          md: 4,
        }}
        sx={{ alignItems: "center" }}
      >
        <Stack>
          <IconLabelButtons
            startIconOption={<EmailIcon />}
            variant={"contained"}
            sx={{
              padding: {
                xs: "2px 5px",
                sm: "6px 16px",
                md: "6px 16px",
              },
              backgroundColor: "#ffffff66",
              "&:hover": { backgroundColor: "#ffffff77" },
              "& .css-1xiv7qz-MuiButtonBase-root-MuiButton-root": {
                color: "#ffffff",
                fontSize: {
                  xs: "10px",
                  sm: "15px",
                  md: "16px",
                },
                padding: {
                  xs: "1px 5px",
                  sm: "6px 16px",
                  md: "6px 16px",
                },
              },
            }}
          />
        </Stack>
        <Stack>
          <ProfileBtn
            startIconOption={
              <AccountCircleIcon
                sx={{
                  fontSize: {
                    xs: "10px",
                    sm: "14px",
                    md: "16px",
                  },
                  color: "white",
                  "& .css-z8x9km-MuiButtonBase-root-MuiButton-root": {
                    color: "white",
                    fontSize: {
                      xs: "10px",
                      sm: "14px",
                      md: "16px",
                    },
                  },
                  width: {
                    xs: "20px",
                    sm: "30px",
                    md: "30px",
                  },
                  height: "30px",
                }}
              />
            }
            variant={"text"}
            sx={{
              padding: {
                xs: "1px 5px",
                sm: "6px 16px",
                md: "6px 16px",
              },
              fontSize: {
                xs: "10px",
                sm: "14px",
                md: "16px",
              },
              "&:hover": { backgroundColor: "#ffffff77" },
              "& .css-1xiv7qz-MuiButtonBase-root-MuiButton-root": {
                color: "#ffffff",
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                  md: "16px",
                },
                padding: {
                  xs: "1px 5px",
                  sm: "6px 16px",
                  md: "6px 16px",
                },
              },
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default UserHeader;
