import UserHeader from "../components/UserHeader";
import Footer from "../components/Footer";
//
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Input,
  Stack,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Features/storeHook";
import { changePassword, reset } from "../Features/auth/authSlice";

type Props = {};

const ChangePassword = (props: Props) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { isLoading, isSuccess, tkeClientToken, user } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  const clearForm = () => {
    setNewPassword("");
    setCurrentPassword("");
  };

  const [openModal, setOpenModal] = React.useState(true);
  const handleLogin = async () => {
    try {
      if (currentPassword.length === 0 && newPassword.length === 0) return;
      const token: any = tkeClientToken;
      const loginUser: {
        currentPassword: string;
        newPassword: string;
        email: any;
        token: string;
      } = {
        currentPassword,
        newPassword,
        token,
        email: user?.email,
      };
      await dispatch(changePassword(loginUser));
      setNewPassword("");
      setCurrentPassword("");
    } catch (error) {
      console.log(error);
      setNewPassword("");
      setCurrentPassword("");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      clearForm();
    }
  }, [isSuccess, dispatch]);

  if (isLoading)
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openModal}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );

  return (
    <Container sx={{ color: "white" }}>
      <Stack
        sx={{
          margin: {
            xs: "0 0rem",
            sm: "0 4rem",
            md: "0 6rem",
          },
        }}
      >
        <Stack
          direction="row"
          spacing={4}
          sx={{
            justifyContent: "space-between",
            marginBottom: "2rem",
            // borderRadius: "7px",
          }}
        >
          <UserHeader />
        </Stack>
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1.6rem",
          }}
        >
          <Stack
            sx={{
              bgcolor: "white",
              width: {
                xs: "100%",
                sm: "80%",
                md: "60%",
              },
              minHeight: "450px",
              color: "black",
              borderRadius: "7px",
            }}
          >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "80%",
                },
                margin: "2rem",
                textAlign: "center",
              }}
              noValidate
              autoComplete="off"
            >
              {" "}
              <Stack sx={{ margin: "2rem 0" }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px",
                      sm: "20px",
                      md: "24px",
                    },
                    fontWeight: 500,
                  }}
                  variant="h4"
                >
                  Change Password
                </Typography>
              </Stack>
              <div style={{ margin: "1rem 0" }}>
                <TextField
                  name="currentPassword"
                  id="outlined-multiline-flexible"
                  label="Current Password"
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <TextField
                  id="outlined-multiline-flexible"
                  name="newPassword"
                  label="New Password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <Button
                variant="contained"
                onClick={handleLogin}
                disabled={
                  currentPassword.length === 0 || newPassword.length === 0
                }
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Container>
  );
};

export default ChangePassword;
