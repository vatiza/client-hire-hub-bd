import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const applyJobs = useLoaderData();
  const { user } = useAuth();
  console.log(user);

  const { job_title, company, company_img, location } = applyJobs;

  return (
    <div className=" mt-5 p-4">
      <h1 className="font-semibold text-center">ONLINE APPLICATION FORM</h1>
      <div className="border bg-base-100 shadow-lg p-4 mt-3 rounded-lg">
        <div className="flex items-center gap-2 ">
          <img className="w-6 " src={company_img} alt="" />
          <p>{company}</p>
        </div>
        <h1 className="text-xl font-semibold">{job_title}</h1>
        <p>{location}</p>
      </div>
      <div className="border mt-3 p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
          <h1 className="text-xl font-semibold  ">{user.displayName}</h1>
          <Link className="ml-auto btn-link">Update CV</Link>
        </div>

        <div className="ms-14">
          <p>{user?.email}</p>
          <p>{user?.phoneNumber}</p>
        </div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Your Expected salary (Monthly)*</span>
          </div>
          <input
            type="text"
            placeholder="eg.50000"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Your Current Salary (Monthly)</span>
          </div>
          <input
            type="text"
            placeholder="eg.50000"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <button className="btn  bg-violet-600 hover:bg-violet-700 text-white mt-5">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobApply;
