import React from "react";
import { useAppSelector } from "../Features/storeHook";
import { CardMedia, Stack, Typography } from "@mui/material";

type Props = {};

const OverViewImg = (props: Props) => {
  const { singleTrip } = useAppSelector((state) => state.trips);

  return (
    <Stack sx={{ padding: "2rem 0" }}>
      <Stack sx={{ width: "100%" }}>
        {/* <img
          style={{ width: "70%", height: "300px" }}
          src={singleTrip?.overview?.image}
          alt=""
        /> */}
        <CardMedia
          component="img"
          sx={{
            width: {
              xs: "100%",
              sm: "60%",
              MozWindowDragging: "60%",
            },
          }}
          image={singleTrip?.overview?.image}
          alt="green iguana"
        />
      </Stack>
      <Typography variant="subtitle1" sx={{ margin: "2rem 1rem" }}>
        {singleTrip?.overview?.description}
      </Typography>
    </Stack>
  );
};

export default OverViewImg;
