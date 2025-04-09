import React from 'react';

const ImageBanner = ({ className, bgImage, heading, subheading }) => {
  return (
    <div 
      className={`relative ${className} sm:h-[470px] h-[300px] w-full bg-cover bg-no-repeat`}
      style={{ backgroundImage: `url(${bgImage})` }} 
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-0"></div>
      <div className="relative z-10 main-container h-full flex flex-col justify-center text-white p-5">
        <h1 className="sm:text-5xl text-3xl text-start leading-[1.2] font-semibold">{heading}</h1>
        {subheading && <p className="text-lg mt-4">{subheading}</p>} 
      </div>
    </div>
  );
};

export default ImageBanner;
