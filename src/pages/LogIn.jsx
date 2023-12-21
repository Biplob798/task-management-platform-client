import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import SocialLogin from "../components/shared/SocialLogin";

const Login = () => {
  const { signIn } = useAuth();

  const handleSignInUser = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Login Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    });
  };

  return (
    <div className="p-8 text-white  md:flex-row-reverse md:flex justify-center items-center bg-blue-500">
      <Helmet>
        <title>Task Management || Login </title>
      </Helmet>
      <div className="space-y-5 hidden md:block">
        <h2 className="text-4xl font-bold text-black">Your Task management system</h2>
        <p className="text-base font-light text-gray-200">
          Your guide to organized productivity. Learn proven strategies for
          efficient task management and transform your to-do list into a plan
          for success.
        </p>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col border bg-white">
          <div className="card shrink-0 w-full shadow-2xl bg-white text-black">
            <form onSubmit={handleSignInUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
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
              <div className="form-control mt-6 ">
                <input
                  className="btn bg-blue-500"
                  type="submit"
                  value="login"
                />
                <h2 className="mt-2 hover:cursor-pointer">
                  New Here create account{" "}
                  <Link to="/register">Please SignUp</Link>
                </h2>
              </div>
              <div className="divider">OR</div>

              {/* social login  */}
              <SocialLogin/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
