import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes({ redirectPath }) {
  const token = useSelector((state) => state.user.token);
  console.log(token);
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
