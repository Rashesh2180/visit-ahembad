import Image from "next/image";
import React from "react";

const TextTileArticle = ({ data }) => {
  return (
    <div className="sm:py-20 py-10 bg-[#EFEBFA] ">
      <h2 className="section-title main-container sm:mb-16 mb-8">
        {data?.title}
      </h2>
      <div className="main-container flex max-md:flex-col lg:gap-16 gap-8 items-center">
        <div className="relative flex-1">
          <Image
            src={
              "https://houseofmg.com/cdn/shop/files/Textile_Gallery_4.jpg?v=1681378677&width=2400"
            }
            unoptimized
            height={500} width={500}
            className="w-full md:h-[500px] h-96 rounded-2xl object-cover"
            alt=""
          />
        </div>
        <div className="flex-1 text-black">
          <h3 className="lg:text-3xl text-2xl font-semibold text-black mb-3 ">
            {data?.heading}
          </h3>
          <p className="lg:text-xl text-base font-medium text-black mb-3 ">{data?.desc1}</p>
          <p className="lg:text-xl text-base font-meidum text-black mb-3 ">{data?.desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default TextTileArticle;
