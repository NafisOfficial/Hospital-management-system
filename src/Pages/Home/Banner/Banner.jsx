import React from "react";
import banner1 from "../../../assets/Photos/banner/banner2.png";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="m-12">
      <div className="hero text-white h-62 bg-blue-500 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src={banner1} className="max-w-sm rounded-lg" />
          <div className="px-12">
            <h1 className="text-3xl font-bold">জরুরী এম্বুলেন্স সেবা !</h1>
            <div className="py-6">
              <p className="text-white">
                আমরা ২৪/৭ দিন আমাদের এম্বুলেন্স সেবা প্রদান করে থাকি । জরুরী প্রয়োজনে নিচে দেওয়া নাম্বারে যোগাযোগ করুন ।
              </p>
              <h3 className="text-white">মোবাইল নং : +8801321234567</h3>
            </div>
            <button className="btn btn-primary">
              <IoCall />
              <Link to="tel:+8801701234567">কল করুন</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
