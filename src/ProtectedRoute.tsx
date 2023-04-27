import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "./Features/storeHook";
// import jwt_decode from "jwt-decode";

interface Props {
  page: JSX.Element;
}
const ProtectedRoute = ({ page }: Props) => {
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const { isAuthenticated, tkeClientToken, user } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!tkeClientToken) return;
  }, [tkeClientToken]);

  return isAuthenticated ? page : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

//
//
// useEffect(() => {;

// if (token !== null && token !== undefined) {
//   const verifyJwt = jwt_decode(token ); //jwt_decode only acceept type of string, would throw error is it has type null or undefined
//   console.log(verifyJwt);
// }
// or
// const verifyJwt: { email: string; userId: string } = jwt_decode(token ?? "");
// const decode = () => {
//   const email = user?.email;
//   const yes = verifyJwt.email !== email;
//   if (yes) {
//     return true;
//   }
//   return false;
// };
