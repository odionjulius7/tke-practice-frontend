import React from "react";
import logo from "./logo.svg";
import {
  Home,
  BespokeRegister,
  ChangePassword,
  DestinationRegister,
  Login,
  TravelRegister,
  TripDetails,
  FinishPage,
} from "./pages";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import NOTFOUND from "./pages/NOTFOUND";
import { Stack } from "@mui/system";
import TkeBg from "./Images/tkeBG.jpg";

function App() {
  return (
    <Stack
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.418), rgba(0, 0, 0, 0.418)), url(${TkeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "contain",
        backgroundRepeat: "no-repeat",
        // overflow: "hidden",
        minHeight: "720px",
        width: "100%",
        padding: {
          xs: "1rem 0 0rem 0",
          sm: "1rem 0 0rem 0",
          md: "1rem 0 0rem 0",
        },
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute page={<Home />} />} />
        <Route
          path="/trip/:id"
          element={<ProtectedRoute page={<TripDetails />} />}
        />
        <Route
          path="/change-password"
          element={<ProtectedRoute page={<ChangePassword />} />}
        />
        <Route path="/travel" element={<TravelRegister />} />
        <Route path="/bespoke" element={<BespokeRegister />} />
        <Route path="/destination" element={<DestinationRegister />} />
        <Route path="/finish" element={<FinishPage />} />
        <Route path="/*" element={<NOTFOUND />} />
      </Routes>
    </Stack>
  );
}

export default App;
