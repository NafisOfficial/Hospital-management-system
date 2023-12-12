import React from 'react';
import banner1 from '../../../assets/Photos/banner/banner2.png'
import { IoCall } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='m-12'>
            <div className="hero text-white h-62 bg-blue-500 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={banner1} className="max-w-sm rounded-lg" />
                    <div className='px-12'>
                        <h1 className="text-3xl font-bold">Emergency Ambulance Service!</h1>
                        <p className="py-6">We provide 24/7 hours emergency ambulance services ! If it is urgent to you, you can't take our ambulance services.</p>
                        <button className="btn btn-primary"><IoCall/><Link to='tel:+8801701234567'>Call Ambulance</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;