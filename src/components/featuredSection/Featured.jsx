import getJobsPosts from "../../hooks/getJobsPosts";
import JobsCard from "../shared/jobsCard/JobsCard";

const Featured = () => {
  const [jobs] = getJobsPosts();
  const featuredJobs = jobs.slice(0, 3);

  return (
    <div className="mt-7">
      <div className="text-center">
        <h1 className="text-3xl font-semibold xl:text-5xl lg:text-3xl mb-3">
          Featured Jobs
        </h1>
        <p>Choose jobs from the top employers and apply for the same.</p>
      </div>
      <div className="grid grid-rows-1 lg:grid-cols-3">
        {featuredJobs?.map((job) => (
          <JobsCard key={job?._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
