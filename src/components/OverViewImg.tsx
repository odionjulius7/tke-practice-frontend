import React from "react";
import { useAppSelector } from "../Features/storeHook";
import { Stack, Typography } from "@mui/material";

type Props = {};

const OverViewImg = (props: Props) => {
  const { singleTrip } = useAppSelector((state) => state.trips);

  return (
    <Stack sx={{ padding: "2rem 0" }}>
      <Stack sx={{ width: "100%" }}>
        <img
          style={{ width: "60%", height: "200px" }}
          src={singleTrip?.overview?.image}
          alt=""
        />
      </Stack>
      <Typography variant="subtitle1" sx={{ margin: "2rem 1rem" }}>
        {singleTrip?.overview?.description}
      </Typography>
    </Stack>
  );
};

export default OverViewImg;
