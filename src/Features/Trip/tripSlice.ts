import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { Trips } from "../../models/TripRequest.interface";

interface TripRequestState {
  allTrips: Trips[];
  usertrips: Trips[];
  singleTrip: Trips | null; // i had to make it an array of TripRequest  cos of some unknown errors
  loadingTrip: boolean;
  error: string | null;
  createdTripId: { msg: string; _id: string } | null;
  status: boolean;
}

const initialState: TripRequestState = {
  allTrips: [],
  usertrips: [],
  singleTrip: null,
  loadingTrip: false,
  error: null,
  createdTripId: null,
  status: false,
};

export const fetchAUsersTrip = createAsyncThunk(
  "trips/fetchAUsersTrip",
  async (ids: { _id: string; token: string }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/trip/user/${ids._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ids.token}`,
          },
        }
      );
      // toast.success("Trip request fetched successfully!");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Unable to fetch tip requests");
    }
  }
);

export const fetchSingleTrip = createAsyncThunk(
  "trips/fetchSingleTrip",
  async (ids: { token: string; id: string }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/trip/${ids.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ids.token}`,
          },
        }
      );
      // console.log(ids);

      return response.data;
    } catch (error) {
      toast.error("Unable to Trip request!");
      return thunkAPI.rejectWithValue("Unable to fetch tip requests");
    }
  }
);

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    resetTripId: (state) => {
      state.createdTripId = null;
    },
    resetLoadingTrip: (state) => {
      state.status = false;
      // state.loadingTrip = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all trip request
      .addCase(fetchAUsersTrip.pending, (state) => {
        state.loadingTrip = true;
        state.error = null;
      })
      .addCase(fetchAUsersTrip.fulfilled, (state, action) => {
        state.loadingTrip = false;
        state.usertrips = action.payload.trips.reverse();
      })
      .addCase(fetchAUsersTrip.rejected, (state, action) => {
        state.loadingTrip = false;
        state.error = action.error.message || "Failed to fetch trip requests";
      })
      // fetch single trip
      .addCase(fetchSingleTrip.pending, (state) => {
        state.loadingTrip = true;
        state.error = null;
      })
      .addCase(fetchSingleTrip.fulfilled, (state, action) => {
        state.loadingTrip = false;
        state.singleTrip = action.payload.trip;
      })
      .addCase(fetchSingleTrip.rejected, (state, action) => {
        state.loadingTrip = false;
        state.singleTrip = null;
        state.error = action.error.message || "Failed to fetch trip requests";
      });
  },
});

export const { resetTripId, resetLoadingTrip } = tripsSlice.actions;
export default tripsSlice.reducer;
