import img from "../../assets/img/corporate.png";
import Header from "../../components/header/Header";
import CorporateCard from "../../components/shared/corporateCard/CorporateCard";
import getCorporate from "../../hooks/getCorporate";
const Corporate = () => {
  const [corporates] = getCorporate();

  return (
    <div>
      <Header
        heading={" Find a job that aligns with your interests and skills"}
        subHeading={
          "   Thousands of jobs in all the leading sector are waiting for you."
        }
        img={img}
      />
      <div className="grid grid-rows-1 lg:grid-cols-3">
        {corporates.map((corporate) => (
          <CorporateCard
            key={corporate?._id}
            corporate={corporate}
          ></CorporateCard>
        ))}
      </div>
    </div>
  );
};

export default Corporate;
