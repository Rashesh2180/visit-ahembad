import React from "react";

const HomeBanner = ({heroData}) => {
  return (
    <section className="bg-black py-28">
      <div className=" text-white  main-container">
        <h2 className="text-5xl font-semibold mb-2">{heroData?.title}</h2>
        <h6 className="text-xl font-semibold">{heroData?.subTitle}</h6>
      </div>
    </section>
  );
};

export default HomeBanner;
