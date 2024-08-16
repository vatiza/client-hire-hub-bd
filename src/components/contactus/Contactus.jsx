import Lottie from "lottie-react";
import contactimg from "../../assets/svg/contact.json";
const Contactus = () => {
  return (
    <div className="lg:mx-12 mt-8 p-4">
      <div className="hero shrink-0 shadow-2xl ">
        <div className="hero-content  lg:flex-row-reverse">
          <Lottie
            className="max-w-sm rounded-lg hidden lg:block "
            animationData={contactimg}
            loop={true}
          />
          <div>
            <h1 className="text-5xl text-center font-bold">Contact Us</h1>
            <form className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered input-primary"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered input-primary"
                  required
                />
              </div>
              <textarea
                className="textarea textarea-primary"
                placeholder="Message"
              ></textarea>
              <div className="form-control mt-6">
                <button className="btn bg-violet-600 text-white hover:bg-violet-700">
                  Send
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
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
