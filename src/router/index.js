import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import CreatePage from "../views/Dashboard/CreatePage";
import EnterGamePage from "../views/Dashboard/EnterGamePage";
import PrivateRoutes from "./PrivateRoutes";
import CreatedGamePage from "../views/Dashboard/CreatedGame";
import GamePage from "../views/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/crear",
        element: <CreatePage />,
      },
      {
        path: "/dashboard/entrar",
        element: <EnterGamePage />,
      },
      {
        path: "/dashboard/creado",
        element: <CreatedGamePage />,
      },
      {
        path: "/game/:id",
        element: <GamePage />,
      },
    ],
  },
]);

export default router;
