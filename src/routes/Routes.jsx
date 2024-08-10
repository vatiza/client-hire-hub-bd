import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [],
  },
]);
