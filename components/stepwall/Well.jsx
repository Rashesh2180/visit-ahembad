import Image from "next/image";
import React from "react";


const Well = ({data}) => {
  return (
    <section className="sm:py-20 py-10 bg-[#F1FFE0]">
      <div className="main-container">
        <h5 className="text-center sm:text-2xl text-lg max-w-4xl mx-auto text-black sm:leading-8 sm:mb-20 mb-10">
          {data?.description}
        </h5>

        <div className="flex flex-col gap-14">
          {data?.data?.length > 0 &&
            data?.data?.map((ele) => (
              <div
                className={`flex max-lg:flex-col xl:gap-20 gap-12 justify-between items-center ${
                  ele.id === 2 && "flex-row-reverse"
                }`}
              >
                <Image
                  src={ele?.img}
                  unoptimized
                  height={400}
                  width={400}
                  className="object-cover flex-1 sm:max-h-[400px] max-h-[200px] h-full"
                  alt={ele?.title}
                />
                <div className="flex-1 text-black flex flex-col lg:items-start items-center">
                  <h2 className="lg:text-3xl text-2xl font-semibold mb-5">
                    {ele?.title}
                  </h2>
                  <p className=" lg:text-lg sm:text-base text-xs max-lg:max-w-96 max-lg:text-center">
                    {ele?.desc}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Well;
