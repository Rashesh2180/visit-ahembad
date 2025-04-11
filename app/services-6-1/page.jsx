import InputBanner from "@/components/inputbanner/InputBanner";
import ServicesHero from "@/components/services/ServicesHero";
import React from "react";
import jsonData from "../../public/assets/text/en.json";
import * as LuIcons from "react-icons/lu";
import * as LiaIcons from "react-icons/lia";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as CiIcons from "react-icons/ci";
import * as PiIcons from "react-icons/pi";
import * as SiIcons from "react-icons/si";

const page = () => {
  const accomodationData = jsonData?.accomodation;
  const iconMap = {
    ...LuIcons,
    ...LiaIcons,
    ...FaIcons,
    ...BsIcons,
    ...CiIcons,
    ...PiIcons,
    ...SiIcons,
  };
  return (
    <div>
      <ServicesHero data={accomodationData?.hero} />
      <div className="main-container sm:py-16 py-10">
        <h6 className="text-4xl fw-semibold mb-6 text-black font-semibold">
          {accomodationData?.usefulOnformation?.title}
        </h6>
        <div className="grid gap-5 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1" >
          {accomodationData?.usefulOnformation?.data?.length > 0 &&
            accomodationData?.usefulOnformation?.data?.map((ele) => {
              const IconComponent = iconMap[ele?.img] || LuIcons.LuAlertCircle;

              return (
                <div
                  key={ele?.id}
                  className="border rounded-lg flex-1 border-black p-4 flex flex-col gap-6 justify-center items-center"
                >
                  <div className="text-black">
                    <IconComponent size={80} />
                  </div>
                  <p className="text-lg font-semibold text-center text-black">
                    {ele?.title}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div
        className={`relative h-[500px] bg-cover bg-[50%] bg-no-repeat bg-[url('https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/6b4f26e4-fadf-426a-8f71-0527a033d52c/Aro+Ha_0010+1.jpg?format=2500w')]`}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] z-0"></div>

        <div className="relative z-10 text-white flex justify-center items-center gap-10 flex-col h-full p-5">
          <h2 className="text-4xl mb-4 font-bold max-w-3xl mx-auto text-center">
            {accomodationData?.imgBanner?.title}
          </h2>
          <button className="py-4 px-8 text-center mx-auto text-black cursor-pointer bg-purple-50 text-nowrap font-medium hover:opacity-60">
            {jsonData?.general?.makeIt}
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
