import "./appointment.css";

const Appointment = () => {
  return (
    <div className="banner">
      <h1 className="text-center py-5 font-bold text-2xl text-white">
        আপনার টোকেন এর জন্য আবেদন করুন
      </h1>
      <div className="mx-10 flex flex-col justify-center items-center">
        <h1 className="font-semibold">রোগির পরিচয় বর্ণনা করুন :</h1>
        <form action="submit" className="mt-5">
          <div className="flex gap-5">
            <div>
              <label htmlFor="">রোগীর নাম :</label>
              <input
                type="text"
                placeholder="এখানে নিখুন"
                className="input input-bordered mt-1 bg-transparent input-info w-full max-w-xs"
              />
            </div>
            <div>
              <label htmlFor="">রোগীর বয়স :</label>
              <input
                type="text"
                placeholder="এখানে নিখুন"
                className="input input-bordered mt-1 bg-transparent input-info w-full max-w-xs"
              />
            </div>
            <div>
              <label htmlFor="">রোগের স্থান :</label>
              <input
                type="text"
                placeholder="এখানে নিখুন"
                className="input input-bordered mt-1 bg-transparent input-info w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex gap-5 mt-2">
            <div>
              <label htmlFor="">মোবাইল নং :</label>
              <input
                type="text"
                placeholder="এখানে নিখুন"
                className="input input-bordered mt-1 bg-transparent input-info w-full max-w-xs"
              />
            </div>
            <div>
              <label htmlFor="">ইমেইল :</label>
              <input
                type="text"
                placeholder="এখানে নিখুন"
                className="input input-bordered mt-1 bg-transparent input-info w-full max-w-xs"
              />
            </div>
            <div className="ms-8">
              <label htmlFor="">লিঙ্গ :</label>
              <div className="flex gap-4 mt-3">
                <div className="flex items-center gap-2">
                  
                  <input
                    type="radio"
                    name="radio-1"
                    value="পুরুষ"
                    className="radio"
                    
                  />
                  <label htmlFor="">পুরুষ</label>
                </div>
                <div className="flex items-center gap-2">
                  
                  <input
                    type="radio"
                    name="radio-1"
                    value="নারী"
                    className="radio"
                  />
                  <label htmlFor="">নারী</label>
                </div>
                <div className="flex items-center gap-2">
                  
                  <input
                    type="radio"
                    name="radio-1"
                    value="অন্যান্য"
                    className="radio"
                  />
                  <label htmlFor="">অন্যান্য</label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <label htmlFor="">সমস্যার বিস্তারিত বিবরণ লিখুন :</label>
            <textarea
              placeholder="সমস্যার বিবরণ"
              className="textarea textarea-bordered mt-1 h-40 textarea-info bg-transparent textarea-lg w-full "
            ></textarea>
          </div>
          <div className="text-center mt-10">
            <input
              type="submit"
              className="btn btn-primary text-white"
              value="সাবমিট করুন"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
