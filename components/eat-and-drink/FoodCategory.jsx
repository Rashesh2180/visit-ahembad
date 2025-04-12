import Image from "next/image";
import React from "react";

const FoodCategory = ({ data }) => {
  return (
    <section className="sm:pt-20 pt-10 bg-[#8B0F0F] overflow-hidden">
      <div className="main-container sm:pb-20 pb-10 wave-container">
        <h5 className="!text-white section-title mb-10">{data?.title}</h5>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="whitespace-nowrap flex gap-10 animate-scrollX">
            {[...data?.data, ...data?.data]?.map((ele, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 min-w-[120px]"
              >
                <Image
                  alt={ele?.title}
                  src={ele?.img}
                  height={96}
                  width={96}
                  className="sm:h-24 sm:w-24 h-16 w-16"
                  unoptimized
                />
                <p className="text-center text-white font-medium text-lg">
                  {ele?.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Static Banner Below */}
      <div className="sm:h-[600px] h-[350px] w-full bg-[url('https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738097626146-0NTIO9HKMXD11UXA0ZM6/unsplash-image-NPrWYa69Mz0.jpg?format=2500w')] bg-cover bg-center"></div>
    </section>
  );
};

export default FoodCategory;
