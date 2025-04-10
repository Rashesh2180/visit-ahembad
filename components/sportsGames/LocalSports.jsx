import Image from "next/image";
import React from "react";



const LocalSports = ({localSportsdata}) => {
  return (
    <section className="sm:py-32 py-10">
      <div className="main-container">
        <h6 className="mb-20 text-5xl text-black font-semibold">
      {localSportsdata?.title}
        </h6>
        {localSportsdata?.data?.length > 0 && (
          <div className="grid xl:gap-12 gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {localSportsdata?.data?.map((ele) => (
              <div className="h-full w-full flex flex-col items-start gap-5" key={ele.id}>
                <Image
                  src={ele.img}
                  alt={ele.title}
                  height={160}
                  width={200}
                  unoptimized
                  className="w-full sm:h-60 h-80 object-cover"
                />
                <h3 className="text-black text-start text-3xl font-semibold">
                  {ele.title}
                </h3>
                <p className="text-black text-lg">
                  {ele.desc.length > 120
                    ? `${ele.desc.slice(0, 120)}...`
                    : ele.desc}
                </p>
                <a href={ele.link} target="_blank" className="bg-black text-white text-center text-sm font-semibold mt-auto hover:opacity-75 p-3 cursor-pointer">Learn More</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LocalSports;
