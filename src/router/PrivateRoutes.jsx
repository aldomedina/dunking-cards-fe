import { Navigate, Outlet, useLocation } from "react-router-dom";
import useUserStore from "../store/userStore";

const PrivateRoutes = () => {
  const location = useLocation();
  const user = useUserStore((state) => state.user);

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default PrivateRoutes;
