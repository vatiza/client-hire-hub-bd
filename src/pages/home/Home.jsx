import img from "../../assets/img/h1i.png";
import Featured from "../../components/featuredSection/Featured";
import Header from "../../components/header/Header";
import TopCompanies from "../../components/topcompanieshiring/TopCompanies";
const Home = () => {
  return (
    <div>
      <Header
        heading={" Find a job that aligns with your interests and skills"}
        subHeading={
          "   Thousands of jobs in all the leading sector are waiting for you."
        }
        img={img}
      />
      <Featured />
      <TopCompanies />
    </div>
  );
};

export default Home;
