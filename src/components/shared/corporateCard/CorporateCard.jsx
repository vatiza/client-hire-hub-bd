import { Link } from "react-router-dom";

const CorporateCard = ({ corporate }) => {
  const { name, company_img, address, revenue, _id, industry } = corporate;
  return (
    <div>
      <div className="card bg-base-100 m-2 w-96 p-3 shadow-xl  border border-transparent hover:border-violet-700 transition-all duration-300 ">
        <div className="card-body">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src={company_img} alt={"name"} />
            </div>
          </div>
          <h2 className="card-title">{name}</h2>
          <p>
            <span className="text-violet-600 font-semibold me-3 bg-violet-300  rounded-sm p-1">
              {" "}
              Revenue: {revenue}
            </span>
          </p>
          <p>Industry: {industry}</p>

          <div className="">
            {" "}
            <p className="flex items-center">
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
              {address}
            </p>
          </div>
          <div className="card-actions justify-between my-3">
            <Link
              to={`/corporate/${_id}`}
              className="btn  btn-outline border border-violet-700 hover:bg-violet-700 hover:text-white hover:border-none "
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateCard;
