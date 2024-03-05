import { Link } from 'react-router-dom';
import './appointment.css'
import { IoIosHelpCircle } from "react-icons/io";
const Appointment = () => {
  return (
    <div className="banner">
      <div>
        <h1 className='text-center text-2xl font-bold'>এপোয়েন্টমেন্ট এপ্লিকেশন ফর্ম :</h1>
        <p className='flex justify-end m-2 items-center'> <Link to='' className='btn btn-sm bg-red-700 hover:bg-red-900'><IoIosHelpCircle className='text-xl'/> সাহায্য </Link> </p>
        <form>
        <div>
                <label className="label pb-0 px-0">
                  <span className="text-white">রোগীর পুরো নাম লিখুন :</span>
                </label>
                <input
                  type="text"
                  placeholder="এখানে লিখুন"
                  className="input ps-1  border-white bg-transparent text-white border-0 rounded-none border-b-2 input-sm focus:outline-0"
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
                  className="input ps-1  border-white bg-transparent text-white border-0 rounded-none border-b-2 input-sm focus:outline-0"
                  required
                />
              </div>
        <div>
                <label className="label pb-0 px-0">
                  <span className="text-white">মোবাইল নম্বর :</span>
                </label>
                <input
                  type="text"
                  placeholder="এখানে লিখুন"
                  className="input ps-1  border-white bg-transparent text-white border-0 rounded-none border-b-2 input-sm focus:outline-0"
                  required
                />
              </div>
      </form>
      </div>
    </div>
  );
};

export default Appointment;