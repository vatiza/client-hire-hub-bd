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
      <div className="card bg-base-100 m-2 shadow-xl    border border-transparent hover:border-violet-700 transition-all duration-300">
        <div className="card-body">
          <div className="avatar flex items-center gap-3">
            <div className="w-14  rounded-full">
              <img src={profile_pic} />
            </div>
            <h1 className="text-xl font-semibold">{name}</h1>
            <span>{age}</span>
          </div>
          <div className="ms-16 -mt-5 flex">
            <p className="text-violet-700">{profession}</p>

            <p className="badge">
              Exp: <span className="font-semibold ms-1"> {experience}+ </span>
            </p>
          </div>
          <ul className="flex gap-1 ">
            {skills.map((s, index) => (
              <li className="badge badge-secondary badge-outline p-5 w-full" key={index}>
                {s}
              </li>
            ))}
          </ul>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekersCard;
