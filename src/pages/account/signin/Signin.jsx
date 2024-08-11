import Lottie from "lottie-react";
import loginSVG from "../../../assets/svg/login.json";
import SocialSigin from "../socialsignin/SocialSigin";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="lg:mx-12 mt-8 p-4">
      <div className="hero shrink-0 shadow-2xl min-h-screen ">
        <div className="hero-content  lg:flex-row-reverse">
          <Lottie
            className="max-w-sm rounded-lg hidden lg:block "
            animationData={loginSVG}
          />
          <div>
            <h1 className="text-5xl text-center font-bold">Login Now</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full pr-12" // Adjust padding-right to make space for the text
                    {...register("pass", { required: true })}
                  />
                  <p
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
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
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
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
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )}
                  </p>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-violet-600 text-white hover:bg-violet-700">
                  Login
                </button>
              </div>
            </form>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="btn-link">
                Please Register Now
              </Link>
            </p>
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
