import moment from "moment";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobDetails = () => {
  const { user } = useAuth();
  const jobDetails = useLoaderData();
  const {
    job_title,
    company,
    location,
    employment_type,
    salary,
    job_description,
    requirements,
    benefits,
    post_date,
    deadline,
    company_img,
  } = jobDetails;

  return (
    <div>
      <div className="card bg-base-100 m-2 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title lg:text-3xl ">{job_title}</h2>

          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src={company_img} alt={"company"} />
              </div>
            </div>
            <p>{company}</p>
          </div>
          <p>Posted Date : {moment(post_date).format("MMM Do YY")}</p>
          <p className="text-red-700">
            Deadline : {moment(deadline).format("MMM Do YY")}
          </p>

          <div className="card-actions justify-between my-3">
            {user ? (
              <>
                <Link
                  to="/jobapply"
                  className="btn  bg-violet-600 hover:bg-violet-700 text-white"
                >
                  Apply Now
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="btn  bg-violet-600 hover:bg-violet-700 text-white"
                >
                  Apply Now
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Sign In Required!</h3>
                    <p className="py-4">
                      Please sign in to apply for this job.
                    </p>

                    <Link className="btn btn-outline" to="/signin">
                      Sign in
                    </Link>

                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </>
            )}
          </div>
          <div className="divider"></div>
          <div className="grid grid-flow-row lg:grid-cols-3 ">
            <p className="flex items-center my-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
              Salary: {salary?.min}$-{salary?.max}$
            </p>
            <p className="flex items-center my-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
              {employment_type}
            </p>
            <p className="flex items-center my-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
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
            </p>
          </div>
          <div className="divider"></div>
          <div>
            <h1 className="text-xl font-semibold">Position Summary</h1>
            <p>{job_description}</p>
            <h1 className="text-xl font-semibold mt-5 mb-2">Requirements</h1>
            <ul>
              {requirements.map((r, index) => (
                <li className="flex items-center gap-2" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
            <h1 className="text-xl font-semibold mt-5 mb-2">Benefits</h1>
            <ul>
              {benefits.map((b, index) => (
                <li className="flex items-center gap-2" key={index}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                    />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
