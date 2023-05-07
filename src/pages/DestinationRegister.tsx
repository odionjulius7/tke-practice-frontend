import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CompWrapper from "../components/CompWrapper";
import LogoFile from "../components/commom-components/LogoFile";
import { SelectChangeEvent, Stack } from "@mui/material";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import Destionation2nd from "../components/DestinationComp/Destionation2nd";
import Destionation1st from "../components/DestinationComp/Destionation1st";
import { useAppDispatch, useAppSelector } from "../Features/storeHook";
import {
  createTripRequest,
  resetSuccessTrue,
} from "../Features/tripRequest/tripRequestSlice";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  // "Create an ad",
];

interface TravelFormData {
  anythingElseAboutCelebration?: string;
  childrenCelebratingWith?: number | string;
  choiceActivityWhileTravelling?: string[] | string;
  daysToSpendCelebrating?: number | string;
  estimateGuestToCelebrateWith?: number | string;
  howSoonDoYouWantToBook?: string;
  likeToCelebrateWhat?: string;
  occationYouAreCelebrating?: string;
  setDateForCel?: string;
  whatCityYouMostLikelyExpectQuests?: string;
  whatTKEServiceDoYouWant?: string;
  AdultsCeleberatingWith?: number | string;
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
    anythingElseAboutCelebration?: string;
    childrenCelebratingWith?: number | string;
    choiceActivityWhileTravelling?: string[] | string;
    daysToSpendCelebrating?: number | string;
    estimateGuestToCelebrateWith?: number | string;
    howSoonDoYouWantToBook?: string;
    likeToCelebrateWhat?: string;
    occationYouAreCelebrating?: string;
    setDateForCel?: string;
    whatCityYouMostLikelyExpectQuests?: string;
    whatTKEServiceDoYouWant?: string;
    AdultsCeleberatingWith?: number | string;
  };
  tripType: string;
}

function DestinationRegister() {
  const token1 = useAppSelector((state) => state.auth.tkeClientToken);
  const travelData1 = useAppSelector((state) => state.tripRequests.travelData);
  const { loading, successRequest } = useAppSelector(
    (state) => state.tripRequests
  );
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  //
  const [choiceActivityWhileTravelling, setChoiceActivityWhileTravelling] =
    React.useState<string[]>([]);
  const [travelData, setTravelData] = React.useState<TravelFormData>({
    anythingElseAboutCelebration: "",
    childrenCelebratingWith: 0,
    daysToSpendCelebrating: "",
    estimateGuestToCelebrateWith: 0,
    howSoonDoYouWantToBook: "",
    likeToCelebrateWhat: "",
    occationYouAreCelebrating: "",
    setDateForCel: "",
    whatCityYouMostLikelyExpectQuests: "",
    whatTKEServiceDoYouWant: "",
    AdultsCeleberatingWith: 0,
  });

  const location = useLocation();
  let pathname = location.pathname;

  if (pathname.startsWith("/")) {
    pathname = pathname.slice(1);
  }

  // console.log(pathname);

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

  const handleSelectChangeArray = (event: SelectChangeEvent<string[]>) => {
    // setSelectedValues(event.target.value as string[]); //or the one below
    const {
      target: { value },
    } = event;
    setChoiceActivityWhileTravelling(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  //
  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
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
        occationYouAreCelebrating: travelData?.occationYouAreCelebrating,
        likeToCelebrateWhat: travelData?.likeToCelebrateWhat,
        estimateGuestToCelebrateWith: travelData?.estimateGuestToCelebrateWith,
        childrenCelebratingWith: travelData?.childrenCelebratingWith,
        whatCityYouMostLikelyExpectQuests:
          travelData?.whatCityYouMostLikelyExpectQuests,
        daysToSpendCelebrating: travelData?.daysToSpendCelebrating,
        setDateForCel: travelData?.setDateForCel,
        whatTKEServiceDoYouWant: travelData?.whatTKEServiceDoYouWant,
        anythingElseAboutCelebration: travelData?.anythingElseAboutCelebration,
        howSoonDoYouWantToBook: travelData?.howSoonDoYouWantToBook,
        AdultsCeleberatingWith: travelData?.AdultsCeleberatingWith,
        choiceActivityWhileTravelling: choiceActivityWhileTravelling,
      },
      tripType: pathname ?? travelData1?.tripType,
    };
    try {
      const token: any = token1;
      await dispatch(createTripRequest({ tripRequest, token }));

      if (successRequest) navigate("/finish");
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
              xs: "80%",
              sm: "70%",
              md: "60%",
            },
            backgroundColor: "#ffffff",
            padding: "3.5rem",
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
                <Destionation1st handleChange={handleChange} />
              ) : (
                <Destionation2nd
                  handleChange={handleChange}
                  handleSelectChange={handleSelectChange}
                  handleSelectChangeArray={handleSelectChangeArray}
                  choiceActivityWhileTravelling={choiceActivityWhileTravelling}
                />
              )}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{
                    mr: 1,
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
                  }}
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
                      bgcolor: "#A78A48",
                      outlineOffset: "3px",
                      outline: "1px solid #A78A48",
                      "&:hover": {
                        bgcolor: "#B78B49",
                      },
                      height: {
                        xs: "35px",
                        sm: "40px",
                        md: "40px",
                      },
                    }}
                    variant="contained"
                    onClick={handleNext}
                    // disabled={
                    //   !travelData?.needVisa ||
                    //   !travelData?.whatCity ||
                    //   !travelData?.whereTo
                    // }
                  >
                    Next
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Stack>
    </CompWrapper>
  );
}

export default DestinationRegister;
