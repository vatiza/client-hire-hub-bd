import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import signupimg from "../../../assets/svg/signup.json";
import useAuth from "../../../hooks/useAuth";
import SocialSigin from "../socialsignin/SocialSigin";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const SignUp = () => {
  const { createNewAcc } = useAuth();
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const pass = data.pass;
    createNewAcc(email, pass)
      .then((result) => {
        setIsLoading(true);
        const loadingToastId = toast.loading("process...");
        console.log(result.user);
        toast.dismiss(loadingToastId);

        toast.success("Success!");
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e.message);

        toast.error(`${e.message}`);
      });
  };

  return (
    <div className="lg:mx-12 mt-8 p-4">
      <div className="hero shrink-0 shadow-2xl ">
        <div className="hero-content  lg:flex-row-reverse">
          <Lottie
            className="max-w-sm rounded-lg hidden lg:block "
            animationData={signupimg}
            loop={true}
          />
          <div>
            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
              </div>

              <div>
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
              <div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("pass", { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-violet-600 text-white hover:bg-violet-700">
                  Sign Up
                </button>
              </div>
            </form>
            <p>
              Allready have an account?{" "}
              <Link to="/signin" className="btn-link">
                Please Login
              </Link>
            </p>
            <div className="divider">Or sign In with Google</div>
            <div className="flex justify-center my-3">
              <SocialSigin />
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default SignUp;
