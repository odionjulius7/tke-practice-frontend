import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import { useAppDispatch, useAppSelector } from "../Features/storeHook";
import { fetchAUsersTrip } from "../Features/Trip/tripSlice";

export default function ButtonAppBar() {
  const { usertrips } = useAppSelector((state) => state.trips);
  const token = useAppSelector((state) => state.auth.tkeClientToken);
  const { singleUser } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  let _userId = singleUser?._id;

  React.useEffect(() => {
    if (_userId && token) {
      // Make sure the token is available before making the request
      // convert the id to string if it wasn't a string before
      const ids: { token: string; _id: string } = { token, _id: _userId };
      dispatch(fetchAUsersTrip(ids));
    }
  }, [_userId, token, dispatch]);

  const sortedTrip = [...usertrips]?.sort(
    (a, b) =>
      new Date(b?.overview.startDate).getTime() -
      new Date(a?.overview.startDate).getTime()
  );

  const currentDate = Date.now();

  const upcomingTrips = sortedTrip.filter(
    (trip) => new Date(trip?.overview.startDate).getTime() >= currentDate
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        "& .css-hip9hq-MuiPaper-root-MuiAppBar-root": {
          bgcolor: "#A78A48",
          borderRadius: "7px",
        },
        "& .css-hglhb7-MuiStack-root": {
          //   bgcolor: "#A78A48",
          borderRadius: "7px",
        },
        borderRadius: "7px",
      }}
    >
      <AppBar
        position="static"
        sx={{ borderRadius: "7px", bgcolor: "#A78A48" }}
      >
        <Toolbar
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
              <Typography
                sx={{
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "16px",
                  },
                  fontWeight: 600,
                }}
              >
                Upcoming
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "18px",
                    md: "20px",
                  },
                }}
              >
                {upcomingTrips.length}
              </Typography>
            </Stack>
            <Stack
              direction="column"
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "16px",
                  },
                  fontWeight: 600,
                }}
              >
                Total Trips
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "18px",
                    md: "20px",
                  },
                }}
              >
                {usertrips.length}
              </Typography>
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
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                    },
                    fontWeight: 600,
                  }}
                >
                  Essential Member
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "13px",
                      sm: "16px",
                      md: "18px",
                    },
                  }}
                >
                  1
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "13px",
                      sm: "16px",
                      md: "18px",
                    },
                  }}
                >
                  One Night Rest
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "13px",
                      sm: "16px",
                      md: "18px",
                    },
                  }}
                >
                  2
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "13px",
                      sm: "16px",
                      md: "18px",
                    },
                  }}
                >
                  One Night Rest
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
