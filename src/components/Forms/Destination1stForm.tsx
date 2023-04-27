import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { Stack, Typography } from "@mui/material";
type Props = {
  handleChange: any;
};

const Destination1stForm = ({ handleChange }: Props) => {
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
            What occasion are you celebrating
          </label>
          <TextField
            name="occationYouAreCelebrating"
            id="outlined-error"
            onChange={handleChange}
          />
        </Stack>

        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.5rem 0 0rem 0.7rem" }}>
            What would you like to celebrate
          </label>
          <TextField
            name="likeToCelebrateWhat"
            id="outlined-error"
            onChange={handleChange}
          />
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.5rem 0 0rem 0.7rem" }}>
            How many guests are you expecting (an estimate or range)
          </label>
          <TextField
            // error
            id="outlined-error"
            name="estimateGuestToCelebrateWith"
            placeholder="(an estimate or range)..."
            onChange={handleChange}
            type="number"
          />
        </Stack>

        <Stack>
          <Typography sx={{ textAlign: "start", margin: "0.6rem 0 0 0.6rem" }}>
            Expected Number Of Guest?
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
              name="AdultsCeleberatingWith"
              placeholder="Adults..."
              type="number"
              onChange={handleChange}
            />
          </Stack>

          <Stack sx={{ width: "30%", textAlign: "start" }}>
            <TextField
              // error
              id="outlined-error"
              name="childrenCelebratingWith"
              placeholder="Children.."
              type="number"
              onChange={handleChange}
            />
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.5rem 0 0rem 0.7rem" }}>
            What city would majority of your guests be travelling from?
          </label>
          <TextField
            name="whatCityYouMostLikelyExpectQuests"
            // error
            id="outlined-error"
            onChange={handleChange}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Destination1stForm;
