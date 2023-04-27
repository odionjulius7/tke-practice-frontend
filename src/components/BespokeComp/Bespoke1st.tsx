import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import { FormWrapper, HeaderText, Helmet } from "../commom-components";
import Bespoke1stForm from "../Forms/Bespoke1stForm";
import ProgressBar from "../ProgressBar";

type Props = {
  handleChange: any;
};

const Bespoke1st = ({ handleChange }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Stack sx={{ margin: "0 2rem" }}>
      <Helmet text="BESPOKE TRAVEL QUESTIONNAIRE" />
      <HeaderText />
      <ProgressBar value={33.3333 * 2} />

      <FormWrapper>
        <Bespoke1stForm handleChange={handleChange} />
      </FormWrapper>
    </Stack>
  );
};

export default Bespoke1st;
