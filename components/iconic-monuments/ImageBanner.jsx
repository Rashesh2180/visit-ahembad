import React from "react";

const ImageBanner = () => {
  return (
    <div className="iconic-bg bg-cover bg-no-repeat bg-bottom sm:h-[500px] h-80 p-5 flex justify-center items-center relative">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <h5 className="xl:text-8xl md:text-7xl text-5xl text-center font-bold text-white relative z-10">
        ICONIC MONUMENTS
      </h5>
    </div>
  );
};

export default ImageBanner;
