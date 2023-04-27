import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
type Props = {
  handleSelectChange: any;
  handleChange: any;
};

const Bespoke2ndForm = ({ handleSelectChange, handleChange }: Props) => {
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
            What are you travelling for ?
          </label>
          <TextField
            id="outlined-error"
            name="travelForWhat"
            onChange={handleChange}
          />
        </Stack>

        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.5rem 0 0rem 0.7rem" }}>
            Who are you travelling with ?
          </label>
          <TextField
            id="outlined-error"
            name="travelWithWho"
            onChange={handleChange}
          />
        </Stack>

        <Stack>
          <Typography sx={{ textAlign: "start", margin: "0.5rem 0 0 0.3rem" }}>
            How many people will be travelling in total?
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", margin: "0rem 0 0.3rem 0" }}
        >
          <Stack sx={{ width: "30%", textAlign: "start" }}>
            <TextField
              error={false}
              id="outlined-error"
              placeholder="Adults"
              name="numberOfTravellerAdult"
              onChange={handleChange}
            />
          </Stack>

          <Stack sx={{ width: "30%", textAlign: "start" }}>
            <TextField
              name="numberOfTravellerKids"
              id="outlined-error"
              placeholder="Children..."
              onChange={handleChange}
            />
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.5rem 0 0rem 0.7rem" }}>
            What would you like to do while travelling?
          </label>
          <TextField
            id="outlined-error"
            name="choiceActivityWhileTravelling"
            onChange={handleChange}
          />
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.8rem 0 0rem 0.7rem" }}>
            What is your budget for your entire trip? Enter a range or single
            amount
          </label>
          <Stack sx={{ width: "40%", textAlign: "start" }}>
            <TextField
              id="outlined-error"
              name="budgetForEntireTrip"
              onChange={handleChange}
            />
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.8rem 0 0rem 0.7rem" }}>
            Is there anything else we need to know about your trip?
          </label>
          <TextField
            multiline
            rows={4}
            name="aboutTrip"
            id="outlined-error"
            placeholder="Type here..."
            onChange={handleChange}
          />
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.8rem 0 0.3rem 0.7rem" }}>
            How soon are you looking to book?
          </label>
          <Select
            // error
            name="bookingTime"
            onChange={handleSelectChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ width: "99%", marginLeft: "0.49rem" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Ready To Book">Ready To Book</MenuItem>
            <MenuItem value="Within 30 Days">Within 30 Days</MenuItem>
            <MenuItem value="Research Stage">Research Stage</MenuItem>
          </Select>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Bespoke2ndForm;
