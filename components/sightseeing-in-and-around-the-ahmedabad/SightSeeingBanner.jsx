import React from "react";

const SightSeeingBanner = ({ data, generaltext }) => {
  return (
    <div className="relative bg-center bg-cover bg-no-repeat h-[300px] sm:h-[400px] py-20 w-full sight-seeing-banner-bg">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] z-10"></div>

      <div className="h-full main-container relative z-20">
        <div className="max-w-2xl h-full flex flex-col justify-center items-start">
          <p className="sm:text-5xl text-3xl text-start font-bold leading-[1.2] text-white">
            {data?.title}
          </p>
          <button className="py-4 mt-auto px-8 text-center text-black cursor-pointer bg-purple-50 text-nowrap font-medium hover:opacity-60">
            {generaltext?.explore}!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SightSeeingBanner;
