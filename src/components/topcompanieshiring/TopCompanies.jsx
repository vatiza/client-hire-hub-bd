import React from "react";

const TopCompanies = () => {
  return (
    <>
      <div className="text-center my-4">
        <h1>Top Companies Hiring Now</h1>

        <div className="flex gap-5 lg:gap-12 justify-center mt-3">
          <img
            src=" https://img.icons8.com/color/48/google-logo.png"
            alt="google-logo"
          />
          <img
            src="https://img.icons8.com/ios-filled/50/mac-os.png"
            alt="mac-os"
          />
          <img
            src="https://img.icons8.com/color/48/microsoft.png"
            alt="microsoft"
          />
          <img
            src="https://img.icons8.com/color/48/netflix.png"
            alt="netflix"
          />
          <img
            src="https://img.icons8.com/bubbles/50/flipkart.png"
            alt="flipkart"
          />
        </div>
      </div>
    </>
  );
};

export default TopCompanies;
