import map from "../../../assets/Photos/banner/Map.png";

const Maps = () => {
  return (
    <div className="flex justify-between bg-[#2b82f6]">
      <div className="flex justify-center items-center flex-col mx-auto gap-5">
        <h3 className="font-bold text-xl">আমাদের ঠিকানা</h3>
        <div className="text-center">
          <p>কমলাপুড়, বাইতুল-আমান</p>
          <p>জেলা : ফরিদপুর, বিভাগ : ঢাকা, দেশ : বাংলাদেশ</p>
        </div>
      </div>
      <img src={map} alt="map" />
    </div>
  );
};

export default Maps;
