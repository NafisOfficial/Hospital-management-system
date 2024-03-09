import React, { useContext } from "react";
import logo from "../../assets/Photos/Logo/logo2.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import demoProfile from "../../assets/Photos/Login/demo-profile-pic.png";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful", {
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
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sticky top-0 z-10">
      <div className="navbar bg-blue-500 text-white ">
        <div className="flex-1">
          <img src={logo} alt="" className="h-10 w-14" />
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            FEC Medical Center
          </Link>
        </div>
        <div className="flex me-5 gap-5">
          <Link to="/">Home</Link>
          <Link to="/doctors">Doctors Info</Link>
          <Link to="/appointment">Appointment</Link>
          <Link to="/notice">Notice</Link>
          <Link hidden={user} to="/login">
            Login
          </Link>
        </div>
        <div hidden={!user} className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || demoProfile} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
                <Link to='/my-appointment'>My Appointment</Link>
              </li>
              <li>
                <Link to='/patents/all'>All Patents</Link>
              </li>
              <li>
                <Link to='/users/admin'>Goto Admin Page</Link>
              </li>
              <li>
                <Link to='' onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
};

export default Navbar;
