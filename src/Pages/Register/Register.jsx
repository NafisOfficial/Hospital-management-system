import React, { useState } from 'react';
import bg from '../../assets/Photos/Login/background1.jpg'
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";

const Register = () => {

    const [disabled,setDisable] = useState(true);

    const isMatched = () =>{
        const newPassword = document.getElementById('new').value;
        const confirmPassword = document.getElementById('confirm').value;
        if(confirmPassword.length>0 && newPassword===confirmPassword){
            setDisable(false);
        }else{
            setDisable(true);
        }
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
        <div className="text-4xl font-bold text-white text-center mt-10">Register Now</div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Enter your fullname</span>
              </label>
              <input
                type="email"
                placeholder="full name"
                className="input input-bordered border-white bg-transparent text-white"
                required
              />
              <label className="label">
                <span className="label-text text-white">Enter your email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered border-white bg-transparent text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">New Password</span>
              </label>
              <input
                type="password"
                id='new'
                placeholder="new password"
                className="input input-bordered border-white bg-transparent text-white"
                required
              />
              <label className="label">
                <span className="label-text text-white">Confirm Password</span>
              </label>
              <input
                type="password"
                id='confirm'
                onChange={isMatched}
                placeholder="confirm password"
                className="input input-bordered border-white bg-transparent text-white"
                required
              />
            </div>
            <div className="form-control my-4">
              <button disabled={disabled} className="btn bg-[#3B82F6] border-0 hover:bg-transparent text-white">Register</button>
            </div>
            <div className="form-control text-white">
              If you already have an account ? please <Link to='/login' className="link">login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;