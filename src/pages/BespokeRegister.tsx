import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CompWrapper from "../components/CompWrapper";
import LogoFile from "../components/commom-components/LogoFile";
import { SelectChangeEvent, Stack } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../Features/storeHook";
import { useLocation, useNavigate } from "react-router-dom";
import Bespoke1st from "../components/BespokeComp/Bespoke1st";
import Bespoke2nd from "../components/BespokeComp/Bespoke2nd";
import {
  createTripRequest,
  resetSuccessTrue,
  updateTravelData,
} from "../Features/tripRequest/tripRequestSlice";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  // "Create an ad",
];

interface TravelFormData {
  anyDateSet?: string;
  daysLikelyToSpend?: string | number;
  enterDateToArrive?: string;
  enterDateToTravel?: string;
  ideaMonthYear?: string;
  needVisa?: string;
  numberOfTravellerAdult?: string | number;
  numberOfTravellerKids?: string | number;
  travelForWhat?: string;
  travelWithWho?: string;
  whatCity?: string;
  whereTo?: string;
  haveDateSet?: string;
  budgetForEntireTrip?: string;
  choiceActivityWhileTravelling?: string;
  aboutTrip?: string;
  bookingTime?: string;
}

interface tripRequest1 {
  user: {
    email?: string;
    postCode?: string;
    age?: string | number;
    gender?: string;
    lastName?: string;
    firstName?: string;
    userType?: string;
    phoneNumber?: string | number;
    dateOfBirth?: string;
  };
  tripDetails: {
    anyDateSet?: string;
    daysLikelyToSpend?: string | number;
    enterDateToArrive?: string;
    enterDateToTravel?: string;
    ideaMonthYear?: string;
    needVisa?: boolean;
    numberOfTravellerAdult?: string | number;
    numberOfTravellerKids?: string | number;
    travelForWhat?: string;
    travelWithWho?: string;
    whatCity?: string;
    whereTo?: string;
    choiceActivityWhileTravelling?: string[] | string;
    budgetForEntireTrip?: string;
    aboutTrip?: string;
    bookingTime?: string;
  };
  tripType: string;
  //

  //
}

function BespokeRegister() {
  const token = useAppSelector((state) => state.auth.tkeClientToken);
  const travelData1 = useAppSelector((state) => state.tripRequests.travelData);
  const { loading, successRequest } = useAppSelector(
    (state) => state.tripRequests
  );
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  //

  const [travelData, setTravelData] = React.useState<TravelFormData>({
    anyDateSet: "",
    daysLikelyToSpend: "",
    enterDateToArrive: "",
    enterDateToTravel: "",
    ideaMonthYear: "",
    needVisa: "",
    numberOfTravellerAdult: "",
    numberOfTravellerKids: "",
    travelForWhat: "",
    travelWithWho: "",
    whatCity: "",
    whereTo: "",
    haveDateSet: "",
    budgetForEntireTrip: "",
    choiceActivityWhileTravelling: "",
    bookingTime: "",
    aboutTrip: "",
  });

  const location = useLocation();
  let pathname = location.pathname;

  if (pathname.startsWith("/")) {
    pathname = pathname.slice(1);
  }
  console.log(pathname);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    if (type === "radio") {
      setTravelData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setTravelData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setTravelData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //
  const isStepOptional = (step: number) => {
    return step === 1;
  };
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (!travelData.needVisa) return;
    // dispatch(updateTravelData({ ...travelData }));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleFinish = async () => {
    try {
      const tripRequest: tripRequest1 = {
        user: {
          email: travelData1?.email,
          postCode: travelData1?.postCode,
          age: travelData1?.age,
          gender: travelData1?.gender,
          lastName: travelData1?.lastName,
          firstName: travelData1?.firstName,
          userType: travelData1?.userType,
          phoneNumber: travelData1?.phoneNumber,
          dateOfBirth: travelData1?.dateOfBirth,
        },
        tripDetails: {
          anyDateSet: travelData?.anyDateSet,
          daysLikelyToSpend: travelData?.daysLikelyToSpend,
          enterDateToArrive: travelData?.enterDateToArrive,
          enterDateToTravel: travelData?.enterDateToTravel,
          ideaMonthYear: travelData?.ideaMonthYear,
          needVisa: travelData?.needVisa === "yes" ? true : false,
          numberOfTravellerAdult: travelData?.numberOfTravellerAdult,
          numberOfTravellerKids: travelData?.numberOfTravellerKids,
          travelForWhat: travelData?.travelForWhat,
          travelWithWho: travelData?.travelWithWho,
          whatCity: travelData?.whatCity,
          whereTo: travelData?.whereTo,
          choiceActivityWhileTravelling:
            travelData?.choiceActivityWhileTravelling,
          budgetForEntireTrip: travelData?.budgetForEntireTrip,
          aboutTrip: travelData?.aboutTrip,
          bookingTime: travelData?.bookingTime,
        },
        tripType: pathname ?? travelData1?.tripType,
      };

      await dispatch(createTripRequest({ tripRequest, token }));
      if (!successRequest) {
        return;
      }
      navigate("/finish");
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    dispatch(resetSuccessTrue());
  }, [successRequest]);

  return (
    <CompWrapper>
      <Stack
        direction="column"
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <LogoFile
          sx={{
            margin: {
              xs: "1.8rem auto",
              sm: "2rem auto",
              md: "2rem auto",
            },
            marginBottom: "3rem",
          }}
        />
        <Box
          sx={{
            width: {
              xs: "90%",
              sm: "60%",
              md: "60%",
            },
            backgroundColor: "#ffffff",
            padding: {
              xs: "2rem",
              sm: "3.5rem",
              md: "3.5rem",
            },
            borderRadius: "7px",
            minHeight: "400px",
            textAlign: "center",
          }}
        >
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 ? (
                <Bespoke1st handleChange={handleChange} />
              ) : (
                <Bespoke2nd
                  handleSelectChange={handleSelectChange}
                  handleChange={handleChange}
                />
              )}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />

                {activeStep === steps.length - 1 ? (
                  <Button
                    size="large"
                    sx={{
                      width: {
                        xs: "35%",
                        sm: "20%",
                        md: "20%",
                      },
                      height: {
                        xs: "35px",
                        sm: "40px",
                        md: "40px",
                      },
                      bgcolor: "#A78A48",
                      outlineOffset: "3px",
                      outline: "1px solid #A78A48",
                      "&:hover": {
                        bgcolor: "#B78B49",
                      },
                    }}
                    variant="contained"
                    onClick={handleFinish}
                    disabled={
                      !travelData?.travelForWhat || !travelData?.bookingTime
                    }
                  >
                    {loading ? "loading..." : "Submit"}
                  </Button>
                ) : (
                  <Button
                    size="large"
                    sx={{
                      width: {
                        xs: "35%",
                        sm: "20%",
                        md: "20%",
                      },
                      height: {
                        xs: "35px",
                        sm: "40px",
                        md: "40px",
                      },
                      bgcolor: "#A78A48",
                      outlineOffset: "3px",
                      outline: "1px solid #A78A48",
                      "&:hover": {
                        bgcolor: "#B78B49",
                      },
                    }}
                    variant="contained"
                    onClick={handleNext}
                    disabled={
                      !travelData?.needVisa ||
                      !travelData?.whatCity ||
                      !travelData?.whereTo
                    }
                  >
                    Next
                  </Button>
                  // <Button onClick={handleNext}>Next</Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Stack>
    </CompWrapper>
  );
}

export default BespokeRegister;
