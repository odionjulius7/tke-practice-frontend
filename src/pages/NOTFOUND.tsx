import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function NOTFOUND() {
  return (
    <Stack
      spacing={1}
      sx={{
        margin: "7rem auto",
        width: "40%",
        background: "white",
        padding: "3rem",
        borderRadius: "7px",
      }}
    >
      {/* For variant="text", adjust the height via font-size */}
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        404
      </Typography>
      <Typography variant="h5" component="p" sx={{ textAlign: "center" }}>
        Page Not Found : 404
      </Typography>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
}
