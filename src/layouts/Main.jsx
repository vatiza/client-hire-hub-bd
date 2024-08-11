import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";

const MainLayouts = () => {
  return (
    <>
      <div className="lg:px-12">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayouts;
