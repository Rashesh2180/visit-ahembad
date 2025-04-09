import Image from "next/image";
import React from "react";
import Button from "../button/Button";

const data = [
  {
    id: 1,
    img: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847890165-I7LPX06YA44DBGGFPSGA/image-asset.jpeg?format=1500w",
    title: "An evening at Amdavad ni Gufa",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
  },
  {
    id: 2,
    img: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847890165-I7LPX06YA44DBGGFPSGA/image-asset.jpeg?format=1500w",
    title: "Build it.",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
  },
];
const CuratedHero = () => {
  return (
    <section className="py-20 bg-[#F1FFE0]">
      <div className="main-container">
        <h2 className="section-title sm:mb-20 mb-10">
          Experience the vibrancy of the city
        </h2>
        <div className="flex flex-col gap-14">
          {data?.length > 0 &&
            data?.map((ele) => (
              <div className={`flex max-lg:flex-col xl:gap-20 gap-12 justify-between items-center ${ele.id === 2 && "flex-row-reverse"}`}>
                <Image
                  src={ele?.img}
                  unoptimized
                  height={400}
                  width={400}
                  className="object-cover flex-1"
                  alt={ele?.title}
                />
                <div className="flex-1 text-black flex flex-col lg:items-start items-center" >
                    <h2 className="lg:text-3xl text-2xl font-semibold mb-5">{ele?.title}</h2>
                    <p className="mb-10 lg:text-xl text-base max-lg:max-w-96 max-lg:text-center">{ele?.desc}</p>
                    <Button text="Make it" className="text-white"/>


                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedHero;
