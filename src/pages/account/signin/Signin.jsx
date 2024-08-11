import Lottie from "lottie-react";
import loginSVG from "../../../assets/svg/login.json";
import SocialSigin from "../socialsignin/SocialSigin";

const Signin = () => {
  return (
    <div className="lg:mx-12 mt-8 p-4">
      <div className="hero shrink-0 shadow-2xl ">
        <div className="hero-content  lg:flex-row-reverse">
          <Lottie
            className="max-w-sm rounded-lg hidden lg:block "
            animationData={loginSVG}
          />
          <div>
            <h1 className="text-5xl text-center font-bold">Login Now</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-violet-600 text-white hover:bg-violet-700">
                  Login
                </button>
              </div>
            </form>
            <div className="divider">Or sign In with Google</div>
            <div className="flex justify-center my-3">
              <SocialSigin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
