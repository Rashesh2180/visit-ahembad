import React from "react";
import { IoTicketOutline } from "react-icons/io5";
import { RiCameraAiLine } from "react-icons/ri";
import { FaChessKing } from "react-icons/fa6";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { LuFerrisWheel } from "react-icons/lu";
const Feature = ({featureData}) => {
  return (
    <div className="main-container py-32 ">
      <h3 className="text-2xl font-semibold mb-5 text-black">
       {featureData?.title}
      </h3>
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <div className="rounded-lg border border-red-600 pt-14 pb-5 px-5 flex flex-col gap-5 items-center">
          <IoTicketOutline className=" text-red-600 h-16 w-16" />
          <p className="text-center text-lg text-black font-semibold mt-auto">
          {featureData?.card1}
          </p>
        </div>
        <div className="rounded-lg border border-red-600 pt-14 pb-5 px-5 flex flex-col gap-5 items-center">
          <LuFerrisWheel  className=" text-red-600 h-16 w-16" />
          <p className="text-center text-lg text-black font-semibold mt-auto">
          {featureData?.card1}

          </p>
        </div>  <div className="rounded-lg border border-red-600 pt-14 pb-5 px-5 flex flex-col gap-5 items-center">
          <RiCameraAiLine  className=" text-red-600 h-16 w-16" />
          <p className="text-center text-lg text-black font-semibold mt-auto">
          {featureData?.card1}

          </p>
        </div>  <div className="rounded-lg border border-red-600 pt-14 pb-5 px-5 flex flex-col gap-5 items-center">
          <FaChessKing  className=" text-red-600 h-16 w-16" />
          <p className="text-center text-lg text-black font-semibold mt-auto">
          {featureData?.card1}

          </p>
        </div>  <div className="rounded-lg border border-red-600 pt-14 pb-5 px-5 flex flex-col gap-5 items-center">
          <IoTicketOutline className=" text-red-600 h-16 w-16" />
          <p className="text-center text-lg text-black font-semibold mt-auto">
          {featureData?.card1}

          </p>
        </div>
        <div className="rounded-lg border border-red-600 pt-14 pb-5 px-5 flex flex-col gap-5 items-center">
          <HiDevicePhoneMobile  className=" text-red-600 h-16 w-16" />
          <p className="text-center text-lg text-black font-semibold mt-auto">
          {featureData?.card1}

          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
