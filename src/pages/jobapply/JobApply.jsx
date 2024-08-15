import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const applyJobs = useLoaderData();
  const { user } = useAuth();
  console.log(user);
  const { job_title, company, company_img, location } = applyJobs;
  console.log(applyJobs);
  return (
    <div className=" mt-5 p-4">
      <h1 className="font-semibold text-center">ONLINE APPLICATION FORM</h1>
      <div className="border p-4 mt-3">
        <div className="flex items-center ">
          <img className="w-6 border rounded-full" src={company_img} alt="" />
          <p>{company}</p>
        </div>
        <h1 className="text-xl font-semibold">{job_title}</h1>
        <p>{location}</p>
      </div>
      <div className="border mt-3 p-4">
        <div>
          <img src="" alt="" />
        </div>
        <p>{user?.email}</p>
        <p>{user?.phoneNumber}</p>
      </div>
    </div>
  );
};

export default JobApply;
