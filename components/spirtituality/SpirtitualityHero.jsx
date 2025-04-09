import Image from "next/image";
import React from "react";
const data = [
  {
    id: 1,
    title: "Spirituality in Hinduism",
    img: "",
    desc:""
  },
  {
    id: 2,
    title: "Spirituality in Islam",
    img: "",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.",
    link: "https://www.sundarvan.org/",
  },
  {
    id: 3,
    title: "Spirituality in Jainism",
    img: "",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.",

    link: "",
  },
];
const SpirtitualityHero = () => {
  return (
    <div className="sm:py-20 py-10 bg-[#F1FFE0]">
      <div className="main-container">
        <h2 className="section-title mb-10 sm:mb-20">Explore the Spirituality of the city</h2>
        <div className=" ">
          {data.length > 0 && (
            <div className="grid xl:gap-12 gap-8  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:h-[500px] overflow-y-auto">
              {data.map((ele) => (
                <div
                  className="h-full w-full flex flex-col items-center gap-4 text-black"
                  key={ele.id}
                >
                  <Image
                    src={
                      ele.img ||
                      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
                    }
                    alt={ele.title}
                    height={160}
                    width={200}
                    unoptimized
                    className="w-full sm:h-60 h-40 object-cover"
                  />
                  <h3 className=" text-center text-2xl  font-semibold">
                    {ele.title}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpirtitualityHero;
