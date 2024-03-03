import servicesPic from "../../../assets/Photos/banner/services.jpg";
import { FcAdvance } from "react-icons/fc";

const Services = () => {
  return (
    <div className="flex border border-2 rounded-e border-[#2b82f6]">
      <img className="h-1/6 w-3/6" src={servicesPic} alt="" />
      <div className="flex flex-col gap-5 items-center justify-center">
        <h3 className="text-2xl font-semibold text-[#2b82f6]">
          আমাদের সেবা সমূহ :
        </h3>
        <div className="ms-14">
          <div className="flex items-center">
            <FcAdvance className="text-2xl font-bold" />
            <p className="text-[#2b82f6]"> সপ্তাহে ৭ দিন দৈনিক জরুরী সেবা ।</p>
          </div>
          <div className="flex items-center">
            <FcAdvance className="text-2xl font-bold" />
            <p className="text-[#2b82f6]"> ২৪/৭ দিন এম্বুলেন্স সার্বিস ।</p>
          </div>
          <div className="flex items-center">
            <FcAdvance className="text-2xl font-bold" />
            <p className="text-[#2b82f6]"> বিশেষজ্ঞ ডাক্তার দের মাধ্যমে পরিষেবা প্রদান ।</p>
          </div>
          <div className="flex items-center">
            <FcAdvance className="text-2xl font-bold" />
            <p className="text-[#2b82f6]"> অনলাইন ভিত্তিক রোগি ভর্তি সিস্টেম ।</p>
          </div>
          
          <div className="flex items-center">
            <FcAdvance className="text-2xl font-bold" />
            <p className="text-[#2b82f6]"> অনলাইন ভিত্তিক বিশেষজ্ঞ ডাক্তার এপোয়েন্টমেন্ট টোকেন সংগ্রহ সেবা ।</p>
          </div>
          <div className="flex items-center">
            <FcAdvance className="text-2xl font-bold" />
            <p className="text-[#2b82f6]"> অনলাইন ভিত্তিক বিশেষজ্ঞ ডাক্তার এর পরিষেবা গ্রহণের সময় ব্যবস্থাপনা ।</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
