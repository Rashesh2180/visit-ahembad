import Image from "next/image";
import React from "react";



const FoodCategory = ({data}) => {
  return (
    <section className="sm:pt-20 pt-10 bg-[#8B0F0F]">
      <div className="main-container sm:pb-20 pb-10 wave-container">
        <h5 className="!text-white section-title mb-10">{data?.title}</h5>

        <div className="grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-10 gap-5">
          {data?.data?.length > 0 &&
            data?.data?.map((ele) => (
              <div
                key={ele?.id}
                className="flex flex-col gap-5 items-center text-black"
              >
                <Image
                  alt={ele?.title}
                  src={ele?.img}
                  height={96}
                  width={96}
                  className="sm:h-24 sm:w-24 h-16 w-16 "
                  unoptimized
                />
                <p className="text-center text-xl text-white font-medium">
                  {ele?.title}
                </p>
              </div>
            ))}
        </div>
      </div>

      <div className="sm:h-[600px] h-[350px] w-full bg-[url('https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738097626146-0NTIO9HKMXD11UXA0ZM6/unsplash-image-NPrWYa69Mz0.jpg?format=2500w')] bg-cover bg-center"></div>
    </section>
  );
};

export default FoodCategory;
