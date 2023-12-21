import React from "react";
import bg from "../../assets/Photos/Login/background2.jpg";
import { Link } from "react-router-dom";

const Login = () => {
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
        <div className="text-4xl font-bold text-white text-center mt-10">Login Now</div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
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
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-white">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control my-4">
              <button className="btn bg-[#3B82F6] border-0 hover:bg-transparent">Login</button>
            </div>
            <div className="form-control text-white">
              If you do not have any account ? please <Link to='/register' className="link">register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
