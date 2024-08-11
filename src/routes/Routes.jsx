import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/Main";
import Home from "../pages/home/Home";
import Jobs from "../pages/jobs/Jobs";
import JobDetails from "../pages/jobs/JobDetails";
import Signin from "../pages/account/signin/Signin";
import NotFound from "../pages/notfoundpage/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:7000/jobs/${params.id}`),
      },
      {
        path: "/singin",
        element: <Signin />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
