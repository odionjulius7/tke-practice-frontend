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
          margin: "0 2rem",
        }}
      >
        <LogoFile
          sx={{
            margin: "2rem auto",
            marginBottom: "3rem",
          }}
        />
        <Box
          sx={{
            width: "60%",
            backgroundColor: "#ffffff",
            padding: "2.5rem 4rem",
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
