import { Stack } from "@mui/system";
import React from "react";
import { FormWrapper, HeaderText, Helmet } from "../commom-components";
import Destination1stForm from "../Forms/Destination1stForm";
import ProgressBar from "../ProgressBar";

type Props = {
  handleChange: any;
};

const Destionation1st = ({ handleChange }: Props) => {
  return (
    <Stack
      sx={{
        margin: {
          xs: "0 1rem",
          sm: "0 2rem",
          md: "0 2rem",
        },
      }}
    >
      <Helmet text="DESTINATION CELEBRATION QUESTIONNAIRE" />
      <HeaderText />
      <ProgressBar value={33.3333 * 2} />
      <FormWrapper>
        <Destination1stForm handleChange={handleChange} />
      </FormWrapper>
    </Stack>
  );
};

export default Destionation1st;
