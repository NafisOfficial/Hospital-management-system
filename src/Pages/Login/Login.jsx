import React, { useContext, useState } from "react";
import bg from "../../assets/Photos/Login/background2.jpg";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProviders";
import { GoogleAuthProvider } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const { popUpSingIn } = useContext(AuthContext);

  const signInWithGoogle = (event) => {
    event.preventDefault();
    const googleProvider = new GoogleAuthProvider();
    popUpSingIn(googleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div>
        <div className="border rounded-lg px-12">
          <div className="text-4xl font-bold text-white text-center mt-10">
            Login Now
          </div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered border-white bg-transparent text-white"
                required
              />
            </div>
            <div className="form-control">
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type={showNewPassword?`text`:`password`}
                  placeholder="password"
                  className="input input-bordered border-white bg-transparent text-white"
                  required
                />
                <span
                  onClick={() => setShowNewPassword(true)}
                  hidden={showNewPassword}
                  className="absolute right-2 hover:bg-slate-100/20 hover:rounded-lg p-1 bottom-3"
                >
                  <FaEye className="text-lg text-white" />
                </span>
                <span
                  hidden={!showNewPassword}
                  onClick={() => setShowNewPassword(false)}
                  className="absolute right-2 hover:bg-slate-100/20 hover:rounded-lg p-1 bottom-3"
                >
                  <FaEyeSlash className="text-lg text-white" />
                </span>
              </div>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-white"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control my-4">
              <button
                onSubmit={handleLogin}
                className="btn bg-[#3B82F6] border-0 hover:bg-transparent text-white"
              >
                Login
              </button>
              <button
                onClick={signInWithGoogle}
                className="btn mt-3 bg-gray-700 hover:bg-transparent border-0 text-white"
              >
                <FcGoogle className="text-4xl"></FcGoogle>{" "}
                <span>Login with google</span>
              </button>
            </div>
            <div className="form-control text-white">
              If you do not have any account ? please{" "}
              <Link to="/register" className="link">
                register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
