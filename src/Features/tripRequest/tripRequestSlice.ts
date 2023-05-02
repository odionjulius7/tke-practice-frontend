import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { TripRequest } from "../../models/TripRequest.interface";

interface TripRequestState {
  travelData: any | null; // i had to make it an array of TripRequest  cos of some unknown errors
  loading: boolean;
  error: string | null;
  successRequest: boolean;
}

const initialState: TripRequestState = {
  travelData: null, // i had to make it an array cos of some unknown errors
  loading: false,
  error: null,
  successRequest: false,
};

export const createTripRequest = createAsyncThunk(
  "tripRequests/createTripRequest",
  async (ids: { tripRequest: TripRequest; token?: any }, thunkAPI) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        ...(ids.token && { Authorization: `Bearer ${ids.token}` }),
      };
      const response = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/trip/request`,
        ids.tripRequest,
        { headers }
      );
      toast.success("Trip request created successfully!");
      return response.data;
    } catch (error) {
      toast.error("Trip request could not be created!");
      return thunkAPI.rejectWithValue("Unable to create trip request");
    }
  }
);

// export const fetchTripRequests = createAsyncThunk(
//   "tripRequests/fetchTripRequests",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_API_ENDPOINT}/trip/request`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       // toast.success("Trip request fetched successfully!");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue("Unable to fetch tip requests");
//     }
//   }
// );

export const tipRequestsSlice = createSlice({
  name: "tripRequests",
  initialState,
  reducers: {
    updateTravelData: (state, action: PayloadAction<any>) => {
      state.travelData = { ...state.travelData, ...action.payload };
    },
    resetSuccessTrue: (state) => {
      state.successRequest = true;
    },
    resetSuccessFalse: (state) => {
      state.successRequest = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTripRequest.pending, (state) => {
        state.loading = true;
        state.successRequest = false;
        state.error = null;
      })
      .addCase(createTripRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.successRequest = true;
        // toast.success("Trip request created successfully!");
      })
      .addCase(createTripRequest.rejected, (state, action) => {
        state.loading = false;
        state.successRequest = false;
        state.error = action.error.message || "Failed to create trip request";
      });
  },
});
export const { updateTravelData, resetSuccessTrue } = tipRequestsSlice.actions;

export default tipRequestsSlice.reducer;
