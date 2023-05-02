import React from "react";
import { useAppSelector } from "../../Features/storeHook";
import { Stack } from "@mui/material";

type Props = {};

const TripItinerary = (props: Props) => {
  const { singleTrip } = useAppSelector((state) => state.trips);
  console.log(singleTrip?.itinerary?.data);

  return (
    <Stack
      dangerouslySetInnerHTML={{ __html: singleTrip?.itinerary?.data }}
    ></Stack>
  );
};

export default TripItinerary;
