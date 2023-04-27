import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { User } from "../../models/DisplayUser.interface";

// Create User

export const fetchSingleUser = createAsyncThunk(
  "users/fetchSingleUser",
  async (ids: { token: string; email: string }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/auth/user/${ids.email}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ids.token}`,
          },
        }
      );
      // console.log(response.data);

      // toast.success("Trip request fetched successfully!");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Unable to fetch Users");
    }
  }
);
//

interface UserState {
  users: User[];
  singleUser: User | null;
  loadingUser: boolean;
  error: string | null;
  bannerStatus: boolean;
}

const initialState: UserState = {
  users: [],
  singleUser: null,
  loadingUser: false,
  error: null,
  bannerStatus: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // fetch single trip request
      .addCase(fetchSingleUser.pending, (state) => {
        state.loadingUser = true;
        state.error = null;
      })
      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.loadingUser = false;
        state.singleUser = action.payload.user; // i had to make it an array cos of some unknown errors
      })
      .addCase(fetchSingleUser.rejected, (state, action) => {
        state.loadingUser = false;
        state.singleUser = null;
        state.error = action.error.message || "Failed to fetch trip requests";
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;

// reducers: {
//     setUsers: (state, action: PayloadAction<User[]>) => {
//       state.users = action.payload;
//     },
//     setSelectedUser: (state, action: PayloadAction<User>) => {
//       state.selectedUser = action.payload;
//     },
//     updateUser: (state, action: PayloadAction<User>) => {
//       const index = state.users.findIndex((user) => user.id === action.payload.id);
//       if (index !== -1) {
//         state.users[index] = action.payload;
//       }
//     },
//     deleteUser: (state, action: PayloadAction<number>) => {
//       state.users = state.users.filter((user) => user.id !== action.payload);
//       state.selectedUser = null;
//     },
//   },
