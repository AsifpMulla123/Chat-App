import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ childen, user, redirect = "/login" }) => {
  if (!user) return <Navigate to={redirect} />;
  return childen ? childen : <Outlet />;
};

export default ProtectedRoute;
