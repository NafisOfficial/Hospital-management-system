import { Link } from "react-router-dom";
import "./appointment.css";
import { IoIosHelpCircle } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Appointment = () => {
  const { user } = useContext(AuthContext);
  const [emergency, setEmergency] = useState(false);

  const currentDate = new Date();
  const maxDate = new Date(currentDate);
  maxDate.setDate(currentDate.getDate() + 5);
  const currentDateString = currentDate.toISOString().split("T")[0];
  const maxDateString = maxDate.toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(currentDateString);
  const pickDate = (event) => {
    const picked = event.target.value;
    setSelectedDate(picked);
  };

  const handleHelp = () => {
    
    Swal.fire({
      title: "সাহায্য",
      text: "জরুরী সেবা (হার্ট এটাক, স্ট্রোক,এক্সিডেন্ট, গর্ভবতী মা-দের ডেলিভারি ইত্যাদি) এ জাতীয় সেবা পেতে (জরুরী সেবা গ্রহণ করুণ) সুইচ টি অন করুণ । শুধু মাত্র ডাক্তারের পরামর্শ গ্রহণ এর ক্ষেত্রে জরুরী সেবা সুইচটি বন্ধ রাখুন ।",
    });
  };

  return (
    <div className="banner">
      <div className="pt-5">
        <h1 className="text-center text-2xl font-bold">
          এপোয়েন্টমেন্ট এপ্লিকেশন ফর্ম :
        </h1>
        <div className="flex justify-between items-center mx-10">
          <div className="flex items-center gap-2">
            <p>জরুরী সেবা গ্রহণ</p>
            <input
              type="checkbox"
              onClick={() => setEmergency(!emergency)}
              className="toggle toggle-error"
            />
          </div>
          <button
            onClick={handleHelp}
            className="btn btn-sm bg-red-700 hover:bg-red-900"
          >
            <IoIosHelpCircle className="text-xl" /> <span>সাহায্য</span>
          </button>
        </div>
        <form className="mx-10">
          <div className="flex gap-14">
            <div>
              <label className="label pb-0 px-0">
                <span className="text-white">রোগীর পুরো নাম লিখুন :</span>
              </label>
              <input
                type="text"
                placeholder="এখানে লিখুন"
                className={`input ps-1 w-64 ${
                  emergency ? "border-red-700" : "border-white"
                } bg-transparent text-white border-0 rounded-none border-b-2 input-sm focus:outline-0`}
                required
              />
            </div>
            <div>
              <label className="label pb-0 px-0">
                <span className="text-white">রোগীর বয়স :</span>
              </label>
              <input
                type="text"
                placeholder="এখানে লিখুন"
                className={`input ps-1 w-64 ${
                  emergency ? "border-red-700" : "border-white"
                } bg-transparent text-white border-0 rounded-none border-b-2 input-sm focus:outline-0`}
                required
              />
            </div>
            <div>
              <label className="label pb-0 px-0">
                <span className="text-white">আহত অঙ্গের নাম :</span>
              </label>
              <input
                type="text"
                placeholder="এখানে লিখুন"
                className={`input ps-1 w-64 ${
                  emergency ? "border-red-700" : "border-white"
                } bg-transparent text-white border-0 rounded-none border-b-2 input-sm focus:outline-0`}
                required
              />
            </div>
            <div>
              <label className="label pb-0 px-0">
                <span className="text-white">রক্তের গ্রুপ :</span>
              </label>
              <select
                className={`select select-bordered w-52 select-sm bg-transparent ${
                  emergency ? "border-red-700" : "border-white"
                } input-sm focus:outline-0`}
              >
                <option>জানা নেই</option>
                <option>এ পজেটিভ</option>
                <option>বি পজেটিভ</option>
                <option>এবি পজেটিভ</option>
                <option>ও পজেটিভ</option>
                <option>এ ন্যাগেটিভ</option>
                <option>বি ন্যাগেটিভ</option>
                <option>এবি ন্যাগেটিভ</option>
                <option>ও ন্যাগেটিভ</option>
              </select>
            </div>
          </div>
          <div className="flex gap-14 mt-5">
            <div>
              <label className="label pb-0 px-0">
                <span className="text-white">মোবাইল নম্বর :</span>
              </label>
              <input
                type="text"
                placeholder="এখানে লিখুন"
                className={`input ps-1 w-64 ${
                  emergency ? "border-red-700" : "border-white"
                } bg-transparent text-white border-0 rounded-none border-b-2 input-sm focus:outline-0`}
                required
              />
            </div>

            <div>
              <label className="label pb-0 px-0">
                <span className="text-white">ইমেইল :</span>
              </label>
              <input
                type="text"
                placeholder="এখানে লিখুন"
                className={`input ps-1 w-64 ${
                  emergency ? "border-red-700" : "border-white"
                } bg-transparent text-white border-0 rounded-none border-b-2 input-sm focus:outline-0`}
                value={user?.email}
                readOnly
                required
              />
            </div>
            <div className="mt-10 flex items-center gap-5">
              <label htmlFor="date">তারিখ নির্বাচন করুন :</label>
              <input
                type="date"
                id="datePicker"
                name="datePicker"
                value={selectedDate}
                min={currentDateString}
                max={maxDateString}
                onChange={pickDate}
                className="px-3 bg-slate-700"
              />
            </div>
          </div>
          <div className="mt-12">
            <label htmlFor="textarea">সম্যসার বিস্তারিত বিবরণ লিখুন :</label>
            <textarea
              id="textarea"
              className={`textarea ${
                emergency ? "border-red-700" : "border-white"
              } mt-2 w-full h-32 bg-transparent`}
              placeholder="সম্যসার বিস্তারিত বিবরণ লিখুন :"
            ></textarea>
          </div>
          <div className="text-center mt-2">
            <input
              type="submit"
              className="btn bg-blue-700 hover:bg-blue-900"
              value="জমা করুন"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
