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
import { forgotPasswrod } from "../Features/auth/authSlice";
import { useNavigate } from "react-router-dom";

type Props = {};

const ForgotPassword = (props: Props) => {
  const { isLoading, isSuccess } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEmailSubmission = async () => {
    try {
      if (email.length === 0) return;
      //   const loginUser: { email: string } = { email };
      await dispatch(forgotPasswrod(email));

      if (!isSuccess) {
        return;
      }
      navigate("/reset-password");
      setEmail("");
    } catch (error) {
      console.log(error);
      setEmail("");
    }
  };
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          height: "200px",
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
            paddingTop: "3rem ",
          }}
        >
          <Stack>
            <Typography>Forgot Password</Typography>
          </Stack>
          <Stack
            sx={{
              width: "80%",
              margin: "2rem auto",
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              name="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
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

export default ForgotPassword;
