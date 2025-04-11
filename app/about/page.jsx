import React from "react";
import jsonData from "../../public/assets/text/en.json";
import Image from "next/image";


const page = () => {
  return (
    <div className="main-container sm:py-14 py-8">
      <h6 className="text-lg text-black text-center max-w-5xl mx-auto md:mb-14 ">
        {jsonData?.about?.heading}
      </h6>
      <div className="flex lg:gap-14 max-md:flex-col gap-7  py-10 items-center">
        <Image
          src={jsonData?.about?.img}
          alt=""
          width={500}
          unoptimized
          height={500}
          className="md:max-h-[500px] max-h-[350px] flex-1 object-cover w-full"
        />
        <div className="flex-1">
          <h2 className="lg:text-4xl text-2xl font-semibold text-black lg:mb-8 mb-5">
            {jsonData?.about?.title}{" "}
            <strong className="underline">
              <a
                target="_blank"
                href="https://www.khushtarheritagecollective.com/"
              >
                {jsonData?.about?.title1}
              </a>
            </strong>
          </h2>
          <p className="text-black lg:text-lg text-sm">
            {" "}
            {jsonData?.about?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
