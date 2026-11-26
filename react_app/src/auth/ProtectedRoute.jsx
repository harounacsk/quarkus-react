import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../service/AuthService";

const ProtectedRoute = () => {
  const token = getToken()
  // return <Outlet/> affiche les routes enfants 
  return token ? <Outlet /> :  <Navigate to="/login" replace />;
};

export default ProtectedRoute;