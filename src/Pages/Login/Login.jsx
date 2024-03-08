import React, { useContext, useState } from "react";
import bg from "../../assets/Photos/Login/background2.jpg";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProviders";
import { GoogleAuthProvider } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";
import SuccessTostify from "../../Components/Tostify/SuccessTostify";

const Login = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const { popUpSingIn,signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/"

  const signInWithGoogle = (event) => {
    event.preventDefault();
    const googleProvider = new GoogleAuthProvider();
    popUpSingIn(googleProvider)
      .then(() => {
        navigate(from,{replace: true})
        toast.success('Logged In', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Bounce
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(`${errorMessage}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Bounce
          });
      });
  };

  const handleLogin =(event)=>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signIn(email,password)
    .then(()=>{
      navigate(from,{replace: true})
      toast.success('Logged In', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

    })
    .catch((error)=>{
      const errorMessage = error.message;
      toast.error(`${errorMessage}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    })
  }
  
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
          <Form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                  name="password"
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
            </div>
            <div className="form-control my-4">
              <button
              type="submit"
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
          </Form>
        </div>
      </div>
      <SuccessTostify/>
    </div>
  );
};

export default Login;
