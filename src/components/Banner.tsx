import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { CardMedia, Stack } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";

import PlaceBanner from "../Images/placesBanner.png";

type Props = {
  banner: any;
};

export default function Banner({ banner }: Props) {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          borderRadius: "7px",
        }}
      >
        <Stack
          sx={{
            height: {
              xs: "80px",
              sm: "120px",
              md: "120px",
            },
          }}
        >
          <CardMedia
            sx={{ width: "100%", height: "100%" }}
            component="img"
            image={banner ? banner : PlaceBanner}
            alt="Paella dish"
          />
        </Stack>
      </AppBar>
    </Box>
  );
}
