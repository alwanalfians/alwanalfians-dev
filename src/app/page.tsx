"use client";

import PersonalInformation from "@/sections/PersonalInfomation";

const Home = () => {
  return (
    <div className="grid grid-cols-2">
      <PersonalInformation />
      <div className="col-span-1"></div>
    </div>
  );
};

export default Home;
