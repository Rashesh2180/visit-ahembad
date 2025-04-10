import React from "react";

const Hero = ({ data }) => {
  return (
    <div className="max-w-4xl px-4 mx-auto">
      <p className="sm:text-2xl text-sm text-center sm:py-20 py-10 text-black">
        {data?.title}
      </p>
    </div>
  );
};

export default Hero;
