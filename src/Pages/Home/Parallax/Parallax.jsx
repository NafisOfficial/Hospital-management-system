import { Link } from "react-router-dom";
import "./parallax.css";
import icon1 from "../../../assets/Photos/icons/facebook.png";
import icon2 from "../../../assets/Photos/icons/twitter.png";
import icon3 from "../../../assets/Photos/icons/linkedin.png";

const Parallax = () => {
  return (
    <div className="parallaxContainer">
      <div className="flex items-center">
        <div className="flex flex-col py-20 mx-24 w-6/12">
          <h1 className="text-3xl font-bold">
            ফরিদপুর ইঞ্জিনিয়ারিং কলেজ <br />
            মেডিকেল সেন্টার
          </h1>
          <div className="flex flex-col justify-between mt-10 w-4/5">
            <div className="text-white text-justify ">
              ফরিদপুর ইঞ্জিনিয়ারিং কলেজ বাংলাদেশের সনামধন্য একটি প্রতিষ্ঠান ।
              এটি ফরিদপুর জেলার প্রাণকেন্দ্রে অবস্থিত । এই কলেজ ফরিদপুর শহরের
              প্রাণ কেন্দ্রে অবস্থিত । ফরিদপুর ইঞ্জিনিয়ারিং কলেজ মেডিকেল সেন্টার
              এই কলেজের একটি আংশিক প্রতিষ্ঠান । এই প্রতিষ্ঠানটি কলেজ
              শিক্ষার্থীদের পাশাপাশি ফরিদপুর শহরের লোকদের বিশেষজ্ঞ চিকিৎসা সেবা
              প্রদান করে থাকে ।
            </div>
            <div className="my-10">
              <p className="text-white mb-2">আমাদের সাথে সংযুক্ত থাকুন :</p>
              <div className="flex gap-5">
                <Link target="_blank" to="www.facebook.com">
                  <img className="h-10 w-10" src={icon1} alt="" />
                </Link>
                <Link target="_blank" to="www.instragram.com">
                  <img className="h-10 w-10" src={icon2} alt="" />
                </Link>
                <Link target="_blank" to="www.linkedin.com">
                  <img className="h-10 w-10" src={icon3} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="px-5 py-3 w-52 h-48 rounded-lg flex flex-col gap-5 items-center text-center bg-red-700 border-none text-white">
            <div className="text-3xl font-bold">আসন</div>
            <div className="text-6xl font-bold">200</div>
            <div className="text-xl font-bold">ফাকা আছে</div>
          </div>
          <button className="btn bg-blue-700 border-none text-white">
            <Link to="/appointment">টোকেন সংগ্রহ করুন</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
