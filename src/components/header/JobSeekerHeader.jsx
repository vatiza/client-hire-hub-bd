import Lottie from "lottie-react";
import jobseeking from "../../assets/svg/jobseeking.json";
import { Link } from "react-router-dom";

const JobSeekerHeader = () => {
  return (
    <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
      <div className="pr-2 md:mb-14 py-14 md:py-0">
        <h1 className="text-3xl font-semibold xl:text-5xl lg:text-3xl">
          Discover genuine remote jobs
        </h1>
        <p className="py-4 text-lg  2xl:py-8 md:py-6 2xl:pr-5">
          Connect with hundreds of remote-verified companies simplify your job
          search and eliminate the frustration.
        </p>
        <Link className="btn btn-primary  text-white" to="/signup">
          Sign up for free
        </Link>
      </div>

      <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
        <Lottie animationData={jobseeking} loop={true} />
      </div>
    </div>
  );
};

export default JobSeekerHeader;
