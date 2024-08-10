import Navbar from "../components/shared/navbar/Navbar";

const MainLayouts = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayouts;
