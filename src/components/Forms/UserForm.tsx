import React, { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Features/storeHook";
import { updateTravelData } from "../../Features/tripRequest/tripRequestSlice";
type Props = {};

interface TravelData {
  email: string;
  postCode: string;
  gender: string;
  lastName: string;
  firstName: string;
  tripType: string;
  phoneNumber: string;
  dateOfBirth: string;
}

const UserForm = (props: Props) => {
  const [travelData, setTravelData] = useState<TravelData>({
    email: "",
    postCode: "",
    dateOfBirth: "",
    gender: "",
    lastName: "",
    firstName: "",
    tripType: "",
    phoneNumber: "",
  });
  // const [tripType, setTripType] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNextPage = () => {
    dispatch(updateTravelData({ ...travelData }));

    if (travelData.tripType === "bespoke") {
      navigate("/bespoke");
    } else {
      navigate("/destination");
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setTravelData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setTravelData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack>
        <Stack direction="row" spacing={2}>
          <Stack sx={{ width: "100%", textAlign: "start" }}>
            <label style={{ margin: "0.5rem 0 0rem 0.7rem" }}>First Name</label>
            <TextField
              // error
              id="outlined-error"
              name="firstName"
              onChange={handleChange}
            />
          </Stack>
          <Stack sx={{ width: "100%", textAlign: "start" }}>
            <label style={{ margin: "0.5rem 0 0rem 0.7rem" }}>Last Name</label>
            <TextField
              // error
              name="lastName"
              id="outlined-error"
              onChange={handleChange}
            />
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.5rem 0 0rem 0.7rem" }}>Email</label>
          <TextField
            name="email"
            // error
            id="outlined-error"
            onChange={handleChange}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ width: "100%", alignItems: "center", justifyContent: "center" }}
        >
          <Stack sx={{ width: "20%", textAlign: "start" }}>
            <label style={{ margin: "0rem 0 0.5rem 0.7rem" }}>Post Code</label>
            <Select
              // error
              name="postCode"
              onChange={handleSelectChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              value={travelData.postCode}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="+123">+234</MenuItem>
              <MenuItem value="+1">+1</MenuItem>
              <MenuItem value="+123">+123</MenuItem>
              <MenuItem value="+12">+12</MenuItem>
              <MenuItem value="+40">+40</MenuItem>
              <MenuItem value="+233">+233</MenuItem>
            </Select>

            {/* <FormHelperText>Without label</FormHelperText> */}
          </Stack>
          <Stack sx={{ width: "76%", textAlign: "start" }}>
            <label style={{ margin: "0.5rem 0 0rem 0.7rem" }}>Phone Num:</label>
            <TextField
              // error
              id="outlined-error"
              name="phoneNumber"
              onChange={handleChange}
            />
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 0.2rem",
          }}
        >
          <Stack sx={{ width: "48%", textAlign: "start" }}>
            <label style={{ margin: "0rem 0 0.5rem 0.7rem" }}> Gender</label>
            <Select
              // error
              name="gender"
              onChange={handleSelectChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              value={travelData.gender}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
            {/* <FormHelperText>Without label</FormHelperText> */}
          </Stack>
          <Stack sx={{ width: "48%", textAlign: "start" }}>
            <label style={{ margin: "0.5rem 0 0rem 0.7rem" }}>D.O.B</label>
            <TextField
              // error
              id="outlined-error"
              name="dateOfBirth"
              onChange={handleChange}
            />
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%", textAlign: "start" }}>
          <label style={{ margin: "0.3rem 0 0.2rem 0.7rem" }}>Trip Type</label>
          {/* <TextField error id="outlined-error" /> */}
          <Select
            // error
            value={travelData.tripType}
            onChange={handleSelectChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ width: "100%" }}
            name="tripType"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="bespoke">Bespoke</MenuItem>
            <MenuItem value="destination">Destination</MenuItem>
          </Select>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        sx={{ margin: "4rem 0 0rem 0", width: "100%", justifyContent: "end" }}
      >
        <Button
          size="large"
          sx={{
            width: "20%",
            bgcolor: "#A78A48",
            outlineOffset: "3px",
            outline: "1px solid #A78A48",
            "&:hover": {
              bgcolor: "#B78B49",
            },
          }}
          variant="contained"
          onClick={handleNextPage}
          disabled={!travelData.tripType}
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default UserForm;
