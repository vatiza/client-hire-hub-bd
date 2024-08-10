import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/Main";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
