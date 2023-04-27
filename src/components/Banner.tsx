import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { CardMedia, Stack } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";

import PlaceBanner from "../Images/placesBanner.png";

export default function Banner() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          borderRadius: "7px",
        }}
      >
        {/* <Toolbar
          sx={{
            borderRadius: "7px",
          }}
        >
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              padding: "0.9rem 0rem",
            }}
          >
            <Stack
              direction="column"
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Typography>Upcoming</Typography>
              <Typography>1</Typography>
            </Stack>
            <Stack
              direction="column"
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Typography>Total Trips</Typography>
              <Typography>5</Typography>
            </Stack>
            <Stack
              direction="column"
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack direction="row">
                <BoltIcon />
                <Typography>Essential Member</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Typography>1</Typography>
                <Typography>One Night Rest</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Typography>2</Typography>
                <Typography>One Night Rest</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar> */}
        <Stack>
          <CardMedia
            sx={{ width: "100%", height: "100%" }}
            component="img"
            image={PlaceBanner}
            alt="Paella dish"
          />
        </Stack>
      </AppBar>
    </Box>
  );
}
