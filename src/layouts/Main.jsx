import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";

const MainLayouts = () => {
  return (
    <div className="lg:px-12">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
