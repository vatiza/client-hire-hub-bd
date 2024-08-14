import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const JobSeekersCard = ({ jobseeker }) => {
  const {
    name,
    email,
    experience,
    profile_pic,
    rating,
    skills,
    phone,
    profession,
    age,
  } = jobseeker;
  return (
    <div className="mt-6">
      <div className="card bg-base-100 m-2 shadow-xl w-full h-80  border border-transparent hover:border-violet-700 transition-all duration-300">
        <div className="card-body">
          <div className="avatar flex items-center gap-3">
            <div className="w-14  rounded-full">
              <img src={profile_pic} />
            </div>
            <h1 className="text-xl font-semibold">{name}</h1>
            <span className="text-sm "> {age}</span>
          </div>
          <div className="ms-16 -mt-5 flex">
            <p className="text-violet-700">{profession}</p>

            <p className="badge">
              Exp: <span className="font-semibold ms-1"> {experience}+ </span>
            </p>
          </div>
          <ul className="">
            {skills.map((s, index) => (
              <li
                className="badge badge-secondary badge-outline m-1  "
                key={index}
              >
                {s}
              </li>
            ))}
          </ul>
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          <a
            href={`mailto:${email}`}
            className="flex items-center  hover:text-violet-800"
          >
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
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            {email}
          </a>
          <a href={`callto:${phone}`} className="flex items-center">
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            {phone}
          </a>
          <div className="card-actions  ">
            <button className="btn w-full  btn-outline">Contact Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekersCard;
