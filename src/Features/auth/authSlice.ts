import { createAsyncThunk, createSlice, Reducer } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { DisplayUser } from "../../models/DisplayUser.interface";
import { LoginUser } from "../../models/LoginUser.interface";
import authService from "../../services/auth.service";
import axios from "axios";

// const storedUser: string | null = localStorage.getItem("user"); //the name of the data store on lstorage is string
// const user: DisplayUser | null = !!storedUser ? JSON.parse(storedUser) : null;

export const login = createAsyncThunk(
  "auth/login",
  async (user: LoginUser, thunkAPI) => {
    try {
      // return await authService.login(user);
      const response = await authService.login(user);
      toast.success("Login successful");
      console.log("successfully logged in");
      return response;
    } catch (error) {
      console.log(error);
      toast.error("Unable to login");
      return thunkAPI.rejectWithValue("Unable to login");
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (
    ids: {
      token: string;
      email: string;
      newPassword: string;
      currentPassword: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/auth/change/password`,
        {
          email: ids.email,
          newPassword: ids.newPassword,
          currentPassword: ids.currentPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ids.token}`,
          },
        }
      );

      toast.success("Password Changed successful");
      return response.data;
    } catch (error: any) {
      toast.error("Password Change Unsuccessful, check you password");
      console.log(error.response.data);
      // If there is an error, we can use the `thunkAPI.rejectWithValue` function to return the error message
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// Extensibility: An interface can be extended to add additional properties, while a type cannot.
interface AsyncState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface AuthState extends AsyncState {
  user?: DisplayUser | null;
  tkeClientToken?: string | null;
  isAuthenticated?: boolean;
}

const initialState: AuthState = {
  user: null,
  tkeClientToken: null,
  isAuthenticated: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
    resetTokenUser: (state) => {
      state.user = null;
      state.tkeClientToken = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    // LOGIN
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = true;
        state.tkeClientToken = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.isAuthenticated = false;
        state.user = null;
      })
      // Change Password
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        // state.errorMessage = null;
      });
    builder.addCase(changePassword.fulfilled, (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(changePassword.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      // state.errorMessage = action.payload as string;
    });
  },
});

export const { reset, resetTokenUser } = authSlice.actions;

export const authReducer: Reducer<AuthState> = authSlice.reducer;

// const storedUser: string | null = localStorage.getItem("user"); //the name of the data store on lstorage is string
// const user: DisplayUser | null = !!storedUser ? JSON.parse(storedUser) : null;

// const storedToken: string | null = localStorage.getItem("loginToken");
// const tokened: string | null = !!storedToken ? JSON.parse(storedToken) : null;
// Http API Calls
