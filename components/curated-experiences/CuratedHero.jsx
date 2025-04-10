import Image from "next/image";
import React from "react";
import Button from "../button/Button";

const CuratedHero = ({data}) => {
  return (
    <section className="py-20 bg-[#F1FFE0]">
      <div className="main-container">
        <h2 className="section-title sm:mb-20 mb-10">
          {data?.title}
        </h2>
        <div className="flex flex-col gap-14">
          {data?.data?.length > 0 &&
            data?.data?.map((ele) => (
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
