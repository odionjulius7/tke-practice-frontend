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

const styledLabel = {
  margin: "0.5rem 0 0rem 0.7rem",
  fontSize: {
    xs: "14px",
    sm: "15px",
    md: "16px",
  },
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
          <Stack sx={styledLabel}>Where would you like to go ?</Stack>
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
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "15px",
                  md: "16px",
                },
              }}
            >
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
          <Stack sx={styledLabel}>
            What city would you be travelling from?
          </Stack>
          <TextField
            // error
            id="outlined-error"
            name="whatCity"
            onChange={handleChange}
          />
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <Stack sx={styledLabel}>
            How many days would you like to travel for?
          </Stack>
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
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "15px",
                  md: "16px",
                },
              }}
            >
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
            sx={{
              textAlign: "start",
              margin: "0.3rem 0 0rem 0.7rem",
              fontSize: {
                xs: "14px",
                sm: "15px",
                md: "16px",
              },
            }}
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
            <Stack sx={styledLabel}>To</Stack>
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
          <Typography
            sx={{
              margin: "0 0rem -1rem 0.6rem",
              fontSize: {
                xs: "14px",
                sm: "15px",
                md: "16px",
              },
            }}
          >
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
