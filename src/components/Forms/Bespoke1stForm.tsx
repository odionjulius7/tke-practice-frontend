import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
type Props = {
  handleChange: any;
};

const Bespoke1stForm = ({ handleChange }: Props) => {
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
            Where would you like to go ?
          </label>
          <TextField
            // error
            id="outlined-error"
            name="whereTo"
            onChange={handleChange}
          />
        </Stack>
        <Stack>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              margin: "1rem",
            }}
          >
            <FormLabel id="demo-controlled-radio-buttons-group">
              Would you require a visa to the destination?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="needVisa"
              onChange={handleChange}
            >
              <FormControlLabel value="no" control={<Radio />} label="No" />
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
            </RadioGroup>
          </FormControl>
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.5rem 0 0rem 0.7rem" }}>
            What city would you be travelling from?
          </label>
          <TextField
            // error
            id="outlined-error"
            name="whatCity"
            onChange={handleChange}
          />
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.5rem 0 0rem 0.7rem" }}>
            How many days would you like to travel for?
          </label>
          <TextField
            // error
            id="outlined-error"
            name="daysLikelyToSpend"
            onChange={handleChange}
          />
        </Stack>
        <Stack>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              margin: "1rem",
            }}
          >
            <FormLabel id="demo-controlled-radio-buttons-group">
              Do you have your dates set?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="haveDateSet"
              onChange={handleChange}
            >
              <FormControlLabel value="no" control={<Radio />} label="No" />
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>
        </Stack>
        <Stack>
          <Typography
            sx={{ textAlign: "start", margin: "0.3rem 0 0rem 0.7rem" }}
          >
            If yes, enter the your below.
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", margin: "0.5rem 0" }}
        >
          <Stack sx={{ width: "30%", textAlign: "start" }}>
            <TextField
              error={false}
              id="outlined-error"
              name="enterDateToTravel"
              type="date"
              onChange={handleChange}
            />
          </Stack>
          <Stack>
            <label style={{ margin: "0.5rem 0 0rem 0.7rem" }}>To</label>
          </Stack>
          <Stack sx={{ width: "30%", textAlign: "start" }}>
            <TextField
              // error
              type="date"
              id="outlined-error"
              name="enterDateToArrive"
              onChange={handleChange}
            />
          </Stack>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          sx={{ alignItems: "start", margin: "0.5rem 0" }}
        >
          <Typography sx={{ margin: "0 0rem -1rem 0.6rem" }}>
            If not, do you have an idea of the month/year you’d like to travel
          </Typography>
          <Stack sx={{ width: "30%", textAlign: "start" }}>
            <TextField
              error={false}
              id="outlined-error"
              name="anyDateSet"
              type="date"
              onChange={handleChange}
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Bespoke1stForm;
