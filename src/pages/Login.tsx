import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CompWrapper from "../components/CompWrapper";
import { useAppDispatch, useAppSelector } from "../Features/storeHook";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../models/LoginUser.interface";
import { login, reset } from "../Features/auth/authSlice";

type Props = {};

const Login = (props: Props) => {
  const [open, setOpen] = useState<boolean>(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, isSuccess, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const clearForm = () => {
    setPassword("");
    setEmail("");
  };

  const [openModal, setOpenModal] = React.useState(true);

  const handleLogin = async () => {
    try {
      if (email.length === 0 && password.length === 0) return;
      const loginUser: LoginUser = { email, password };
      await dispatch(login(loginUser));
      setPassword("");
      setEmail("");
    } catch (error) {
      console.log(error);
      setPassword("");
      setEmail("");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      clearForm();
    }
  }, [isSuccess, dispatch]);
  useEffect(() => {
    if (!isAuthenticated) return;
    navigate("/");
  }, [isAuthenticated, navigate]);

  if (isLoading)
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openModal}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );

  const message = (
    <React.Fragment>
      <em>login details</em>
      <br />
      <em>Email: tkeAdmin@example.com</em> <br />
      <span>Password: password123</span>
    </React.Fragment>
  );
  return (
    <CompWrapper>
      <Stack
        sx={{
          width: {
            xs: "80%",
            sm: "50%",
            md: "50%",
          },
          minHeight: {
            xs: "300px",
            sm: "400px",
            md: "400px",
          },
          backgroundColor: "#ffffff",
          margin: "0rem auto",
          marginTop: {
            xs: "7rem",
            sm: "8rem",
            md: "9rem",
          },
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: {
                xs: "80%",
                sm: "70%",
                md: "70%",
              },
            },
            margin: {
              xs: "1rem",
              sm: "2rem",
              md: "2rem",
            },
            textAlign: "center",
          }}
          noValidate
          autoComplete="off"
        >
          {" "}
          <Stack
            sx={{
              margin: {
                xs: "1rem 0",
                sm: "2rem 0",
                md: "2rem 0",
              },
              cursor: "pointer",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  xs: "17px",
                  sm: "18px",
                  md: "20px",
                },
              }}
              fontWeight={700}
            >
              Login
            </Typography>
          </Stack>
          <div style={{ margin: "1rem 0" }}>
            <TextField
              name="email"
              id="outlined-multiline-flexible"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-multiline-flexible"
              name="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Stack sx={{ marginBottom: "1rem", width: "60%" }}>
            <Typography
              sx={{
                cursor: "pointer",
                color: "#000000",
                fontSize: {
                  xs: "12px",
                  sm: "16px",
                  md: "16px",
                },
              }}
            >
              <Link to="/forgot-password">Forgot Password</Link>
            </Typography>
          </Stack>
          <Button
            variant="contained"
            onClick={handleLogin}
            disabled={email.length === 0 || password.length === 0}
            sx={{
              bgcolor: "#A78A48",
              width: "120px",
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
              },
            }}
          >
            Log in
          </Button>
        </Box>
      </Stack>
    </CompWrapper>
  );
};

export default Login;
