import Lottie from "lottie-react";
import jobsearch from "../../assets/svg/jobsearching.json";
const JobsPageHeader = () => {
  return (
    <>
      <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
        <div className="pr-2 md:mb-14 py-14 md:py-0">
          <h1 className="text-3xl font-semibold xl:text-5xl lg:text-3xl">
            Opportunity is wherever you are.
          </h1>
          <p className="py-4 text-lg  2xl:py-8 md:py-6 2xl:pr-5">
            Thousands of jobs in all the leading sector are waiting for you.
          </p>
        </div>

        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <Lottie loop={true} animationData={jobsearch} />
        </div>
      </div>
    </>
  );
};

export default JobsPageHeader;
