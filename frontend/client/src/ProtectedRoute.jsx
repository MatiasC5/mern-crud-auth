import { useAuth } from "./hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
export const ProtectedRoute = () => {
  const { loading, isAuthenticated } = useAuth();
  if (loading) return <h1>Loading...</h1>;
  if (!isAuthenticated && !loading) return <Navigate to="/login" replace />;

  return <Outlet />;
};
