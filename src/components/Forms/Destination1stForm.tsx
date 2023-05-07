import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { Stack, Typography } from "@mui/material";
type Props = {
  handleChange: any;
};

const styleLabel = {
  margin: "0.5rem 0 0rem 0.7rem",
  fontSize: {
    xs: "14px",
    sm: "15px",
    md: "16px",
  },
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
          <Stack sx={styleLabel}>What occasion are you celebrating</Stack>
          <TextField
            name="occationYouAreCelebrating"
            id="outlined-error"
            onChange={handleChange}
          />
        </Stack>

        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <Stack sx={styleLabel}>What would you like to celebrate</Stack>
          <TextField
            name="likeToCelebrateWhat"
            id="outlined-error"
            onChange={handleChange}
          />
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <Stack sx={styleLabel}>
            How many guests are you expecting (an estimate or range)
          </Stack>
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
          <Typography
            sx={{
              textAlign: "start",
              margin: "0.6rem 0 0 0.6rem",
              fontSize: {
                xs: "14px",
                sm: "15px",
                md: "16px",
              },
            }}
          >
            Expected Number Of Guest?
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", margin: "0rem 0 0.3rem 0" }}
        >
          <Stack
            sx={{
              width: {
                xs: "40%",
                sm: "30%",
                md: "30%",
              },
              textAlign: "start",
            }}
          >
            <TextField
              error={false}
              id="outlined-error"
              name="AdultsCeleberatingWith"
              placeholder="Adults..."
              type="number"
              onChange={handleChange}
            />
          </Stack>

          <Stack
            sx={{
              width: {
                xs: "40%",
                sm: "30%",
                md: "30%",
              },
              textAlign: "start",
            }}
          >
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
          <Stack sx={styleLabel}>
            What city would majority of your guests be travelling from?
          </Stack>
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
