import Image from "next/image";
import React from "react";

const IconicDualSection = ({data}) => {
  return (
    <div className="sm:py-20 py-10 main-container flex max-sm:flex-col sm:gap-10 gap-5 items-center md:w-[90%]">
      <div className="flex-1 h-[400px] relative">
        <Image
          src={data?.img}
          unoptimized
          height={400}
          width={400}
          className="h-full w-full max-sm:h-64"
          alt=""
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-black sm:mb-10 mb-5">
        {data?.title}
        </h2>
        <ul className="list-disc text-black">
          <li className="ml-10 text-lg mb-3">
          {data?.list1}
          </li>
          <li className="ml-10 text-lg">
          {data?.list2}

          </li>
        </ul>
      </div>
    </div>
  );
};

export default IconicDualSection;
