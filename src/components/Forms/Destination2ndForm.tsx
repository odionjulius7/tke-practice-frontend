import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { MenuItem, Select, Stack } from "@mui/material";

type Props = {
  options: string[];
  handleChange: any;
  handleSelectChange: any;
  handleSelectChangeArray: any;
  choiceActivityWhileTravelling: any;
};
const Destination2ndForm = ({
  options,
  handleChange,
  handleSelectChange,
  handleSelectChangeArray,
  choiceActivityWhileTravelling,
}: Props) => {
  // anythingElseAboutCelebration: "",
  // daysToSpendCelebrating: "",
  // estimateGuestToCelebrateWith: "",
  // howSoonDoYouWantToBook: "",
  // setDateForCel: "",
  // whatTKEServiceDoYouWant: "",
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.5rem 0 0rem 0.7rem" }}>
            How many days would you like to celebrate with your guests?
          </label>
          <TextField
            id="outlined-error"
            name="daysToSpendCelebrating"
            onChange={handleChange}
          />
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.5rem 0 0rem 0.7rem" }}>
            If you have any dates set, or even just a month & year?
          </label>
          <TextField
            id="outlined-error"
            name="setDateForCel"
            onChange={handleChange}
          />
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.5rem 0 0.3rem 0.7rem" }}>
            What TKE service (s) are you interested in?
          </label>
          <Select
            multiple
            name="whatTKEServiceDoYouWant"
            onChange={handleSelectChangeArray}
            style={{ marginLeft: "0.6rem" }}
            value={choiceActivityWhileTravelling}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "1.1rem 0 0rem 0.7rem" }}>
            What is your budget for the celebration
          </label>
          <Stack>
            <TextField id="outlined-error" onChange={handleChange} />
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.8rem 0 0rem 0.7rem" }}>
            Is there anything else we need to know about your celebration?
          </label>
          <TextField
            multiline
            rows={4}
            name="anythingElseAboutCelebration"
            id="outlined-error"
            placeholder="type here..."
            onChange={handleChange}
          />
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.8rem 0 0.3rem 0.7rem" }}>
            How soon are you looking to book?
          </label>
          <Select
            // error
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ width: "99%", marginLeft: "0.49rem" }}
            name="howSoonDoYouWantToBook"
            onChange={handleSelectChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="bespoke">Bespoke</MenuItem>
            <MenuItem value="destination">Destination</MenuItem>
          </Select>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Destination2ndForm;
