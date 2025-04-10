import React from "react";
const HeroBanner = ({heroData}) => {
  return (
    <div className=" sm:py-20 py-10  ">
      <div className="home-bg main-container sm:h-[465px] h-80 md:w-[calc(100%-200px)] p-4 flex justify-center items-center">
        <h3 className="sm:text-7xl text-5xl font-bold text-center max-w-2xl mx-auto">
          {heroData?.title}
        </h3>
      </div>
    </div>
  );
};

export default HeroBanner;
