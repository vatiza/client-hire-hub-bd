const Signin = () => {
  return (
    <div className="lg:mx-12 mt-8">
      <div>
        <h1 className="text-xl font-semibold lg:text-4xl">
          Login to your Account
        </h1>
        <p>Welcome back! Select the below login methods.</p>
      </div>

      <div className="card flex flex-col bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Signin;
