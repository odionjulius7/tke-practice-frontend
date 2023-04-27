import { Stack } from "@mui/material";
import React from "react";
import { FormWrapper, HeaderText, Helmet } from "../commom-components";
import Destination2ndForm from "../Forms/Destination2ndForm";
import ProgressBar from "../ProgressBar";

type Props = {
  handleChange: any;
  handleSelectChange: any;
  handleSelectChangeArray: any;
  choiceActivityWhileTravelling: any;
};

const Destionation2nd = ({
  handleChange,
  handleSelectChange,
  handleSelectChangeArray,
  choiceActivityWhileTravelling,
}: Props) => {
  return (
    <Stack sx={{ margin: "0 2rem" }}>
      <Helmet text="DESTINATION CELEBRATION QUESTIONNAIRE" />
      <HeaderText />
      <ProgressBar value={33.3333 * 3} />
      <FormWrapper>
        <Destination2ndForm
          options={["now", "later", "soon"]}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
          handleSelectChangeArray={handleSelectChangeArray}
          choiceActivityWhileTravelling={choiceActivityWhileTravelling}
        />
      </FormWrapper>
    </Stack>
  );
};

export default Destionation2nd;
