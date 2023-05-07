import { Backdrop, CircularProgress, Container, Stack } from "@mui/material";
import React, { useEffect } from "react";
import UserHeader from "../components/UserHeader";
import { useAppDispatch, useAppSelector } from "../Features/storeHook";
import { useParams } from "react-router-dom";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { fetchSingleTrip } from "../Features/Trip/tripSlice";
import TripOverview from "../components/TripContent/TripOverview";
import TripAgreement from "../components/TripContent/TripAgreement";
import TripPayment from "../components/TripContent/TripPayment";
import TripItinerary from "../components/TripContent/TripItinerary";
import TripVisa from "../components/TripContent/TripVisa";
import TripConfirmation from "../components/TripContent/TripConfirmation";
import TripReview from "../components/TripContent/TripReview";
import Footer from "../components/Footer";

type Props = {};

const TripDetails = (props: Props) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const { loadingTrip, singleTrip } = useAppSelector((state) => state.trips);
  const token = useAppSelector((state) => state.auth.tkeClientToken);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id && token) {
      const ids: { token: string; id: string } = { token, id };
      dispatch(fetchSingleTrip(ids));
    }
  }, [dispatch, id]);
  // console.log(singleTrip);

  //
  const [openModal, setOpenModal] = React.useState(true);
  if (loadingTrip)
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
  return (
    <Container sx={{ color: "white", minHeight: "650px" }}>
      <Stack
        sx={{
          margin: {
            xs: "0 0rem",
            sm: "0 6rem",
            md: "0 6rem",
          },
        }}
      >
        <TabContext value={value}>
          {" "}
          <Stack
            direction={{
              xs: "row",
              sm: "row",
              md: "row",
            }}
            spacing={4}
            sx={{ justifyContent: "space-between", marginBottom: "3rem" }}
          >
            <UserHeader />
          </Stack>
          <Stack
            direction={{
              xs: "column",
              sm: "row",
              md: "row",
            }}
            spacing={{
              xs: 2,
              sm: 8,
              md: 8,
            }}
          >
            <Stack
              // direction="column"
              sx={{
                bgcolor: "white",
                width: {
                  xs: "100%",
                  sm: "28%",
                  md: "28%",
                },
                height: {
                  xs: "300px",
                  sm: "400px",
                  md: "400px",
                },
                color: "black",
                borderRadius: "7px",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                orientation="vertical"
                sx={{
                  padding: "1.2rem",
                  justifyContent: "space-between",
                  "& .css-1ivz7ma-MuiButtonBase-root-MuiTab-root.Mui-selected":
                    {
                      bgcolor: "#A78A4833",
                      borderRadius: "5px",
                      color: "#A78A48",
                      width: {
                        xs: "50%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: "flex-start",
                    },
                  "& .css-10d9dml-MuiTabs-indicator": {
                    bgcolor: {
                      xs: "transparent",
                      sm: "#A78A4833",
                      md: "#A78A4833",
                    },
                  },
                  "& .css-lfwcke-MuiTabs-flexContainer": {
                    alignItems: "flex-start",
                    // padding: "0.5rem 1rem",
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "column",
                      md: "column",
                    },
                    flexWrap: "wrap",
                    gap: "1rem",
                  },
                }}
              >
                <Tab label="Over View" value="1" />
                <Tab label="Agreement" value="2" />
                <Tab label="Payment" value="3" />
                <Tab label="Itinerary " value="4" />
                <Tab label="Visa" value="5" />
                <Tab label="Travel Confirmation" value="6" />
                <Tab label="Review" value="7" />
              </TabList>
            </Stack>
            <Stack
              sx={{
                bgcolor: "white",
                width: {
                  xs: "100%",
                  sm: "72%",
                  md: "72%",
                },
                minHeight: "400px",
                color: "black",
                borderRadius: "7px",
              }}
            >
              <TabPanel value="1">
                <TripOverview />
              </TabPanel>
              <TabPanel value="2">
                <TripAgreement />
              </TabPanel>
              <TabPanel value="3">
                <TripPayment />
              </TabPanel>
              <TabPanel value="4">
                <TripItinerary />
              </TabPanel>
              <TabPanel value="5">
                <TripVisa />
              </TabPanel>
              <TabPanel value="6">
                <TripConfirmation />
              </TabPanel>
              <TabPanel value="7">
                <TripReview />
              </TabPanel>
            </Stack>
          </Stack>
        </TabContext>
      </Stack>
      <Footer />
    </Container>
  );
};

export default TripDetails;
