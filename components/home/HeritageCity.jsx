import Image from "next/image";
import React from "react";

const HeritageCity = ({heritageData}) => {
  return (
    <div className="main-container pt-5 pb-24">
      <div className="scroll-container mb-2">
        <h5 className="scroll-text text-3xl text-black uppercase font-bold tracking-wide">
         {heritageData.title}
         {heritageData.title}
         {heritageData.title}

        </h5>
      </div>
      <div className="flex gap-5 max-lg:flex-wrap max-sm:flex-col">
        <Image
          src={
            "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737796811298-225RDYA1QDD2EVKFQKZH/unsplash-image-2I_rhLUqeUw.jpg?format=300w"
          }
          unoptimized
          height={238}
          width={190}
          alt=""
          className="max-sm:w-full max-sm:h-48"
        />
        <div className="flex-1 bg-[#452A21] h-[238px] w-full p-4 flex max-md:py-14  justify-center items-center">
          <h6 className="lg:text-5xl text-3xl text-center font-bold text-[#d9f7c4]">
          {heritageData?.card2}
          </h6>
        </div>
        <div className="flex-1 bg-[#F8DDDD]  p-4 h-[238px] min-w-[320px] max-md:py-14  flex gap-5 items-center justify-center">
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/54df9ab8-bc58-4b50-a4c1-67a0b0e8f50a/Heart_Shape_PNG_Clipart-3166.png?format=500w"
            }
            alt=""
            unoptimized
            height={113}
            width={125}
            className="max-xl:w-20 max-xl:h-20 max-sm:h-10 max-sm:w-10"
          />
          <span className="lg:text-3xl text-2xl max-w-84 text-black font-semibold">
          {heritageData?.card3}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeritageCity;
