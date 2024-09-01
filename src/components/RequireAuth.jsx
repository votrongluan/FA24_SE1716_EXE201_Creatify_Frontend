import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();

  return auth?.role === allowedRoles ? (
    <Outlet />
  ) : auth?.username ? (
    <Navigate to="/unauthorized" replace />
  ) : (
    <Navigate to="/auth" replace />
  );
};

export default RequireAuth;
