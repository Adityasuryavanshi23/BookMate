/* eslint-disable react/prop-types */
import { Navigate } from "react-router";

export const ProtectedRoutes = ({ children }) => {
  const token = sessionStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};
