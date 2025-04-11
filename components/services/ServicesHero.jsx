import Image from "next/image";
import React from "react";


const ServicesHero = ({data}) => {
  return (
    <section className="sm:py-32 py-10 bg-[#F1FFE0]">
      <div className="main-container">
        <h2 className="section-title mb-5">{data?.title}</h2>
         <p className="sm:mb-16 mb-8 text-base text-black max-w-3xl">{data?.subTitle} </p>
        {data?.data?.length > 0 && (
          <div className="grid xl:gap-12 gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {data?.data?.map((ele) => (
              <div
                className="h-full w-full flex flex-col items-start gap-5"
                key={ele.id}
              >
                <Image
                  src={ele.img}
                  alt={ele.title}
                  height={160}
                  width={200}
                  unoptimized
                  className="w-full sm:h-96 h-44 rounded-[20px] object-cover"
                />
                <h3 className="text-black text-2xl font-semibold">
                  {ele.title}
                </h3>
                <p className="text-black text-sm">
                  {ele.desc.length > 120
                    ? `${ele.desc.slice(0, 120)}...`
                    : ele.desc}
                </p>
                <button className="bg-black ml-auto rounded-lg text-white text-center text-sm font-semibold mt-auto hover:opacity-75 p-3 cursor-pointer">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesHero;
