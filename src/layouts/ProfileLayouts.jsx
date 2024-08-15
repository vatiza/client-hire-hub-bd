import Navbar from "../components/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

const ProfileLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ProfileLayouts;
