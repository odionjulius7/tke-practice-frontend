import React, { useEffect, useState } from "react";
import {
  Backdrop,
  CircularProgress,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import ButtonAppBar from "../components/ServiceTag";
import UserHeader from "../components/UserHeader";
import Banner from "../components/Banner";
import TripBox from "../components/TripBox";
import { fetchSingleUser } from "../Features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "../Features/storeHook";
import { fetchAUsersTrip } from "../Features/Trip/tripSlice";
import Footer from "../components/Footer";

type Props = {};

const Home = (props: Props) => {
  const { loadingTrip, usertrips } = useAppSelector((state) => state.trips);
  const token = useAppSelector((state) => state.auth.tkeClientToken);
  const { loadingUser, singleUser, bannerStatus } = useAppSelector(
    (state) => state.user
  );
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  let email = user?.email;
  useEffect(() => {
    if (email && token) {
      // Make sure the token is available before making the request
      // convert the id to string if it wasn't a string before
      email = email as string;
      const ids: { token: string; email: string } = { token, email };
      dispatch(fetchSingleUser(ids));
    }
  }, [email, token, bannerStatus]);

  // loading back dop circle
  const [openModal, setOpenModal] = React.useState(true);
  // loading back dop circle
  if (loadingUser)
    return (
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme: { zIndex: { drawer: number } }) =>
            theme.zIndex.drawer + 1,
        }}
        open={openModal}
        // onClick={handleToggle1}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  // get the length of the array
  const length = usertrips.length;
  //
  const sortedArr = [...usertrips];
  const sortedTrip = sortedArr?.sort(
    (a, b) =>
      new Date(b?.overview.startDate).getTime() -
      new Date(a?.overview.startDate).getTime()
  );
  // console.log(singleUser);

  return (
    <Container sx={{ color: "white" }}>
      <Stack
        sx={{
          margin: {
            xs: "0 0rem",
            sm: "0 2rem",
            md: "0 6rem",
          },
        }}
      >
        <Stack
          direction="row"
          spacing={{
            xs: 2,
            sm: 3,
            md: 4,
          }}
          sx={{
            justifyContent: "space-between",
            marginBottom: "2rem",
            // borderRadius: "7px",
          }}
        >
          <UserHeader />
        </Stack>
        <Stack
          sx={{
            color: "#fff",
            bgcolor: "#A78A48",
            borderRadius: "7px",
            marginBottom: "2rem",
          }}
        >
          <ButtonAppBar />
        </Stack>
        <Stack
          sx={{
            color: "#fff",
            bgcolor: "#A78A48",
            borderRadius: "7px",
            marginBottom: "4rem",
          }}
        >
          <Banner banner={singleUser?.banner?.imgURL} />
        </Stack>
        <Stack
          sx={{
            color: "#fff",
            marginBottom: "2rem",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: {
                xs: "18px",
                sm: "22px",
                md: "24px",
              },
              fontWeight: 700,
            }}
          >
            Trips
          </Typography>
        </Stack>
        <Stack>
          {sortedTrip.map((item, index) => {
            return (
              <Stack
                direction="row"
                spacing={{
                  xs: 4,
                  sm: 9,
                  md: 9,
                }}
                sx={{ width: "100%", margin: "1rem 0", alignItems: "center" }}
              >
                <Stack sx={{ width: "10%" }}>
                  <Typography
                    sx={{
                      bgcolor: "#A78A48",
                      width: {
                        xs: "25px",
                        sm: "29px",
                        md: "29px",
                      },
                      height: {
                        xs: "25px",
                        sm: "29px",
                        md: "29px",
                      },
                      borderRadius: "200px",
                      position: "relative",
                    }}
                  >
                    {index < length - 1 && (
                      <Divider
                        orientation="vertical"
                        sx={{
                          backgroundColor: "#A78A48",
                          height: {
                            xs: "60px",
                            sm: "75px",
                            md: "80px",
                          },
                          transform: "skewed(90deg)",
                          width: "3px",
                          marginLeft: "45%",
                          marginTop: {
                            xs: "1.9rem",
                            sm: "2.2rem",
                            md: "2.2rem",
                          },
                          // marginbottom: "-1rem",
                        }}
                      />
                    )}
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "90%",
                      md: "90%",
                    },
                  }}
                >
                  <TripBox length={length} index={index} item={item} />
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
      <Footer />
    </Container>
  );
};

export default Home;
