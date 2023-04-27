import React from "react";
import { useAppSelector } from "../../Features/storeHook";
import { Avatar, Box, Chip, Divider, Stack, Typography } from "@mui/material";

import ForwardStrick from "../../Images/UserProfileImg/forward1.png";
import BarkwardStrick from "../../Images/UserProfileImg/forward4.png";
import moment from "moment";
import OverViewImg from "../OverViewImg";

type Props = {};

const TripOverview = (props: Props) => {
  const { singleTrip } = useAppSelector((state) => state.trips);
  const myName = "james";
  const newCode = () => {
    return (
      myName
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase() +
      Math.floor(10 + Math.random() * 90) +
      Math.floor(10 + Math.random() * 90)
    );
  };

  // console.log(newCode());

  return (
    <Stack>
      <Typography variant="h6" sx={{ marginBottom: "2rem" }}>
        {singleTrip?.overview?.title}
      </Typography>
      <Stack
        direction="row"
        // spacing={6}
        sx={{ justifyContent: "space-around", alignItems: "center" }}
      >
        {singleTrip?.flightDetails[0] ? (
          <Box
            sx={{
              width: 120,
              height: 100,
              backgroundColor: "#F8F8F8",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#F8F8F8",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Stack sx={{ textAlign: "center" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {singleTrip?.flightDetails[0]?.location}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {moment(singleTrip?.flightDetails[0]?.date).format("MMM Do YY")}
              </Typography>
              <Typography variant="body2">
                {moment(singleTrip?.flightDetails[0]?.date)
                  .format("dddd")
                  .slice(0, 3)}
              </Typography>
            </Stack>
          </Box>
        ) : null}

        {singleTrip?.flightDetails[1] ? (
          <>
            <Divider
              sx={{
                width: "15%",
                margin: "0 0.1rem",
              }}
            >
              <img src={ForwardStrick} style={{ width: "20px" }} />
            </Divider>
            <Box
              sx={{
                width: 120,
                height: 100,
                backgroundColor: "#F8F8F8",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "#F8F8F8",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Stack sx={{ textAlign: "center" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  {singleTrip?.flightDetails[1]?.location}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {moment(singleTrip?.flightDetails[1]?.date).format(
                    "MMM Do YY"
                  )}
                </Typography>
                <Typography variant="body2">
                  {moment(singleTrip?.flightDetails[1]?.date)
                    .format("dddd")
                    .slice(0, 3)}
                </Typography>
              </Stack>
            </Box>
          </>
        ) : null}

        {singleTrip?.flightDetails[2] ? (
          <>
            <Divider
              sx={{
                width: "15%",
                margin: "0 0.1rem",
              }}
            >
              <img src={ForwardStrick} style={{ width: "20px" }} />
            </Divider>
            <Box
              sx={{
                width: 120,
                height: 100,
                backgroundColor: "#F8F8F8",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "#F8F8F8",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Stack sx={{ textAlign: "center" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  {singleTrip?.flightDetails[2]?.location}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {moment(singleTrip?.flightDetails[2]?.date).format(
                    "MMM Do YY"
                  )}
                </Typography>
                <Typography variant="body2">
                  {moment(singleTrip?.flightDetails[2]?.date)
                    .format("dddd")
                    .slice(0, 3)}
                </Typography>
              </Stack>
            </Box>
          </>
        ) : null}
      </Stack>
      {singleTrip?.flightDetails[3] ? (
        <Stack
          direction="row"
          sx={{
            margin: "2rem 0",
            height: "15%",
            width: "100%",
            justifyContent: "end",
          }}
        >
          <img
            src={BarkwardStrick}
            style={{ width: "20px", margin: "0 3rem 0 0" }}
          />
        </Stack>
      ) : null}
      <Stack
        direction="row"
        // spacing={6}
        sx={{ justifyContent: "space-around", alignItems: "center" }}
      >
        {singleTrip?.flightDetails[3] ? (
          <Box
            sx={{
              width: 120,
              height: 100,
              backgroundColor: "#F8F8F8",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#F8F8F8",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Stack sx={{ textAlign: "center" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {singleTrip?.flightDetails[3]?.location}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {moment(singleTrip?.flightDetails[3]?.date).format("MMM Do YY")}
              </Typography>
              <Typography variant="body2">
                {moment(singleTrip?.flightDetails[3]?.date)
                  .format("dddd")
                  .slice(0, 3)}
              </Typography>
            </Stack>
          </Box>
        ) : null}

        {singleTrip?.flightDetails[4] ? (
          <>
            <Divider
              sx={{
                width: "15%",
                margin: "0 0.1rem",
              }}
            >
              <img src={BarkwardStrick} style={{ width: "20px" }} />
            </Divider>
            <Box
              sx={{
                width: 120,
                height: 100,
                backgroundColor: "#F8F8F8",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "#F8F8F8",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Stack sx={{ textAlign: "center" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  {singleTrip?.flightDetails[4]?.location}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {moment(singleTrip?.flightDetails[4]?.date).format(
                    "MMM Do YY"
                  )}
                </Typography>
                <Typography variant="body2">
                  {moment(singleTrip?.flightDetails[4]?.date)
                    .format("dddd")
                    .slice(0, 3)}
                </Typography>
              </Stack>
            </Box>
          </>
        ) : null}

        {singleTrip?.flightDetails[5] ? (
          <>
            <Divider
              sx={{
                width: "15%",
                margin: "0 0.1rem",
              }}
            >
              <img src={BarkwardStrick} style={{ width: "20px" }} />
            </Divider>
            <Box
              sx={{
                width: 120,
                height: 100,
                backgroundColor: "#F8F8F8",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "#F8F8F8",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Stack sx={{ textAlign: "center" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  {singleTrip?.flightDetails[5]?.location}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {moment(singleTrip?.flightDetails[5]?.date).format(
                    "MMM Do YY"
                  )}
                </Typography>
                <Typography variant="body2">
                  {moment(singleTrip?.flightDetails[5]?.date)
                    .format("dddd")
                    .slice(0, 3)}
                </Typography>
              </Stack>
            </Box>
          </>
        ) : null}
      </Stack>
      <OverViewImg />
    </Stack>
  );
};

export default TripOverview;
