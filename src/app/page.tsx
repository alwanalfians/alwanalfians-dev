"use client";

import Branding from "@layouts/Branding";
import Showcase from "@layouts/Showcase";

const Home = () => {
  return (
    <div className="grid grid-cols-2">
      <Branding />
      <Showcase />
    </div>
  );
};

export default Home;
