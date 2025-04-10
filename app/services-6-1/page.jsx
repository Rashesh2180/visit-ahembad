import InputBanner from "@/components/inputbanner/InputBanner";
import ServicesHero from "@/components/services/ServicesHero";
import React from "react";

const page = () => {
  return (
    <div>
      <ServicesHero />
      <div
        className={`relative h-[500px] bg-cover bg-[50%] bg-no-repeat bg-[url('https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/6b4f26e4-fadf-426a-8f71-0527a033d52c/Aro+Ha_0010+1.jpg?format=2500w')]`}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] z-0"></div>

        <div className="relative z-10 text-white flex justify-center items-center gap-10 flex-col h-full p-5">
          <h2 className="text-4xl mb-4 font-bold max-w-3xl mx-auto text-center">
            Whatever it is, the way you tell your story online can make all the
            difference.
          </h2>
          <button className="py-4 px-8 text-center mx-auto text-black cursor-pointer bg-purple-50 text-nowrap font-medium hover:opacity-60">
            Make It
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
