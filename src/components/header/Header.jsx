import hImg from "../../assets/img/h1i.png";

const Header = () => {
  return (
    <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
      <div className="pr-2 md:mb-14 py-14 md:py-0">
        <h1 className="text-3xl font-semibold xl:text-5xl lg:text-3xl">
          Find a job that aligns with your interests and skills
        </h1>
        <p className="py-4 text-lg  2xl:py-8 md:py-6 2xl:pr-5">
          Thousands of jobs in all the leading sector are waiting for you.
        </p>
        <label className="input input-bordered flex items-center mx-2">
          <input type="text" className="grow " placeholder="Find Job" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-violet-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </label>
      </div>

      <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
        <img
          id="heroImg1"
          src={hImg}
          alt="Awesome hero page image"
          width="500"
          height="488"
        />
      </div>
    </div>
  );
};

export default Header;
