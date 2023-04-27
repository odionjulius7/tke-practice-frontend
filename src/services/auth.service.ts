import axios from "axios";

import { DisplayUser } from "../models/DisplayUser.interface";

import { LoginUser } from "../models/LoginUser.interface";
import { NewUser } from "../models/NewUser";

//the register() in our authSlice pass in the user input details from the register component
const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/register`,
    newUser
  );

  return response.data;
};

// Same
const login = async (user: LoginUser) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_ENDPOINT}/auth/login/user`,
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response);
  if (response) {
    return { user: response.data.user, token: response.data.token };
  }
  return { token: response, user: null };
};

const logout = (): void => {
  localStorage.removeItem("user");
  localStorage.removeItem("jwt");
};

// const verifyJwt = async (jwt: string): Promise<boolean> => {
//   const response = await axios.post(
//     `${process.env.REACT_APP_BASE_API}/auth/verify-jwt`,
//     { jwt }
//   );

//   if (response.data) {
//     const jwtExpirationMs = response.data.exp * 1000;
//     return jwtExpirationMs > Date.now();
//   }

//   return false;
// };

// this is where ware exporting all the Http action
const authService = {
  register,
  login,
  logout,
  // verifyJwt,
};

export default authService;
