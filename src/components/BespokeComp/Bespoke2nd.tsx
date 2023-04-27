import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { FormWrapper, HeaderText, Helmet } from "../commom-components";
import Bespoke2ndForm from "../Forms/Bespoke2ndForm";
import ProgressBar from "../ProgressBar";

type Props = {
  handleSelectChange: any;
  handleChange: any;
};

const Bespoke2nd = ({ handleChange, handleSelectChange }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Stack sx={{ margin: "0 2rem" }}>
      <Helmet text="BESPOKE TRAVEL QUESTIONNAIRE" />
      <HeaderText />
      <ProgressBar value={33.3333 * 3} />

      <FormWrapper>
        <Bespoke2ndForm
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
        />
      </FormWrapper>
    </Stack>
  );
};

export default Bespoke2nd;
