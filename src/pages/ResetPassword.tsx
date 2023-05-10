import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../Features/storeHook";
import { forgotPasswrod, resetPassword } from "../Features/auth/authSlice";
import { useNavigate } from "react-router-dom";

type Props = {};
type ResetType = {
  newPassword: string;
  token: any;
};
const ResetPassword = (props: Props) => {
  const { isLoading, isSuccess } = useAppSelector((state) => state.auth);
  const [newPassword, setNewPassword] = useState("");
  const [token, setToken] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEmailSubmission = async () => {
    try {
      if (newPassword.length === 0 || token.length === 0) return;
      const resetP: ResetType = { token, newPassword };
      await dispatch(resetPassword(resetP));
      if (isSuccess) {
        setNewPassword("");
        setToken("");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setNewPassword("");
      setToken("");
    }
  };
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          height: "240px",
        }}
      >
        <Card
          sx={{
            bgcolor: "#ffffff",
            borderRadius: "7px",
            width: "40%",
            height: "100%",
            margin: "4rem auto",
            marginTop: "11rem",
            textAlign: "center",
            padding: "2rem 1rem",
            paddingTop: "2rem ",
          }}
        >
          <Stack>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              Reset Password
            </Typography>
          </Stack>
          <Stack
            sx={{
              width: "80%",
              margin: "1.4rem auto",
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              name="newPassword"
              label="New Password"
              onChange={(e) => setNewPassword(e.target.value)}
              sx={{
                margin: "1rem 0",
              }}
            />
            <TextField
              id="outlined-multiline-flexible"
              name="token"
              label="Reset Token"
              onChange={(e) => setToken(e.target.value)}
            />
          </Stack>
          <Stack>
            <Button onClick={handleEmailSubmission}>
              {isLoading ? "loading.." : "Submit email"}
            </Button>
          </Stack>
        </Card>
      </Box>
    </Container>
  );
};

export default ResetPassword;
