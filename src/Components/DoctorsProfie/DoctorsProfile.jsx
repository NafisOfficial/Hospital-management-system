import React from "react";

const DoctorsProfile = ({ doctor }) => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor?.photoUrl}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">নাম: {doctor?.name}</h1>
            <p>ইমেইল : {doctor?.email}</p>
            <p>বয়স : {doctor?.age}</p>
            <p>{doctor?.department} বিশেষজ্ঞ</p>
            <p>ঠিকানা : {doctor?.address} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsProfile;
