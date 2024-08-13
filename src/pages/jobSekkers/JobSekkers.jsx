import JobSeekerHeader from "../../components/header/JobSeekerHeader";
import JobSeekersCard from "../../components/shared/jobseekerCards/JobSeekersCard";
import getJobSeeker from "../../hooks/getJobSeeker";

const JobSekkers = () => {
  const [jobseekers] = getJobSeeker();

  return (
    <div>
      <JobSeekerHeader />
      <h1 className="text-3xl font-semibold xl:text-5xl lg:text-3xl mb-3 text-center">
        Land your dream
      </h1>
      <div className="grid grid-flow-row lg:grid-cols-3 m-2">
        {jobseekers.map((jobseeker) => (
          <JobSeekersCard key={jobseeker._id} jobseeker={jobseeker} />
        ))}
      </div>
    </div>
  );
};

export default JobSekkers;
