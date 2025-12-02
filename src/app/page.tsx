"use client";

import PersonalInformation from "@/sections/PersonalInfomation";

const Home = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2"></div>
      {/* Left Side */}
      <PersonalInformation />

      {/* Right Side */}
      <div className="col-span-5"></div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default Home;
