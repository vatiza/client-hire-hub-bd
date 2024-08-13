import JobsPageHeader from "../../components/header/JobsPageHeader";
import JobsCard from "../../components/shared/jobsCard/JobsCard";
import getJobsPosts from "../../hooks/getJobsPosts";

const Jobs = () => {
  const [allJobs] = getJobsPosts();

  return (
    <>
      <JobsPageHeader />
      <div className="text-center">
        <h1 className="text-3xl font-semibold xl:text-5xl lg:text-3xl mb-3">
          All Jobs
        </h1>
      </div>

      <div className="grid grid-rows-1 lg:grid-cols-3">
        {allJobs?.map((job) => (
          <JobsCard key={job?._id} job={job} />
        ))}
      </div>
    </>
  );
};

export default Jobs;
