import { Box, Stack } from "@mui/material";
import React from "react";
import {
  FormWrapper,
  HeaderText,
  Helmet,
  LogoFile,
} from "../components/commom-components";
import CompWrapper from "../components/CompWrapper";
import { UserForm } from "../components/Forms";
import ProgressBar from "../components/ProgressBar";

type Props = {};

const TravelRegister = (props: Props) => {
  return (
    <CompWrapper>
      <Stack
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          margin: {
            xs: "0 1rem",
            sm: "0 2rem",
            md: "0 2rem",
          },
        }}
      >
        <LogoFile
          sx={{
            margin: {
              xs: "0.9rem auto",
              sm: "1.5rem auto",
              md: "2rem auto",
            },
            marginBottom: {
              xs: "3.2rem",
              sm: "3rem",
              md: "3rem",
            },
          }}
        />
        <Box
          sx={{
            width: {
              xs: "90%",
              // sm: "60%",
              md: "60%",
            },
            backgroundColor: "#ffffff",
            padding: "2.5rem 3rem",
            borderRadius: "7px",
            minHeight: "400px",
            textAlign: "center",
          }}
        >
          <Stack>
            <Helmet text="TRAVEL QUESTIONNAIRE" />
            <HeaderText />
            <ProgressBar value={33.333333} />
          </Stack>
          <FormWrapper>
            <UserForm />
          </FormWrapper>
        </Box>
      </Stack>
    </CompWrapper>
  );
};

export default TravelRegister;
