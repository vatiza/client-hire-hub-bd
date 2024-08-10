import React from "react";
import getJobsPosts from "../../hooks/getJobsPosts";

const Jobs = () => {
  const allJobs = getJobsPosts();

  return (
    <div>
      <h1>Jobs is comming</h1>
    </div>
  );
};

export default Jobs;
