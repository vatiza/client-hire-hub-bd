import { createBrowserRouter } from "react-router-dom";
import Contactus from "../components/contactus/Contactus";
import MainLayouts from "../layouts/Main";
import Signin from "../pages/account/signin/Signin";
import SignUp from "../pages/account/signup/SignUp";
import Corporate from "../pages/corporate/Corporate";
import Home from "../pages/home/Home";
import JobDetails from "../pages/jobs/JobDetails";
import Jobs from "../pages/jobs/Jobs";
import NotFound from "../pages/notfoundpage/NotFound";
import CorporateDetails from "../pages/corporate/CorporateDetails";
import JobSekkers from "../pages/jobSekkers/JobSekkers";
import JobApply from "../pages/jobapply/JobApply";
import ProtectRoute from "./ProtectRoute";
import ProfileLayouts from "../layouts/ProfileLayouts";
import Profile from "../pages/profile/Profile";

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
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      //-------------- Login User Routes--------------------
      {
        path: "/corporate",
        element: <Corporate />,
      },
      {
        path: "/corporate/:id",
        element: <CorporateDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:7000/corporate/${params.id}`),
      },
      {
        path: "/jobsekkers",
        element: <JobSekkers />,
      },
      {
        path: "/jobapply/:id",
        element: (
          <ProtectRoute>
            <JobApply />
          </ProtectRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:7000/jobs/${params.id}`),
      },
    ],
  },

  // ------------Profile------------
  {
    path: "/profile",
    element: <ProfileLayouts />,
    children: [
      {
        path: "home",
        element: <Profile />,
      },
    ],
  },
  // ----------404 page--------------
  {
    path: "*",
    element: <NotFound />,
  },
]);
