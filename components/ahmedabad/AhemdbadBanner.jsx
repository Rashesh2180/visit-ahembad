import React from "react";

const AhemdbadBanner = ({data,generalText}) => {
  return (
    <div className="ahemdbad-banner-bg h-[300px] sm:h-[400px] py-20 w-full">
      <div className="h-full main-container">
        <div className=" max-w-2xl h-full flex flex-col justify-center items-start">
          <p className="sm:text-5xl text-3xl text-start font-bold leading-[1.2]">
           {data?.title}
          </p>
          <button className="py-4 mt-auto px-8 text-center text-black cursor-pointer bg-purple-50 text-nowrap font-medium hover:opacity-60">
          {generalText?.startExploring}...
          </button>
        </div>
      </div>
    </div>
  );
};

export default AhemdbadBanner;
