const JobsCard = ({ job }) => {
  const { job_title, company, location, company_img, employment_type, salary } =
    job;
  console.log(job);
  return (
    <div>
      <div className="card bg-base-100 m-2 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>
            <span className="text-violet-600 font-semibold me-3 bg-violet-300  rounded-sm p-1">
              {" "}
              {employment_type}
            </span>
            Salary: {salary?.min} - {salary?.max}
          </p>
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src={company_img} alt={"company"} />
              </div>
            </div>

            <div className="flex flex-col ml-2">
              {" "}
              <p>{company}</p>
              <p className=" flex items-center text-sm text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                {location}
              </p>{" "}
            </div>
          </div>
          <div className="card-actions justify-between my-3">
            <button className="btn  btn-outline border border-violet-700 hover:bg-violet-700 hover:text-white hover:border-none ">
              View Details
            </button>
            <button className="btn  bg-violet-600 hover:bg-violet-700 text-white">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
