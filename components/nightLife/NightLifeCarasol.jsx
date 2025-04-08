"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
const data = [
  {
    id: 1,
    title: "Sabarmati Dinner Cruise",
    desc: "Delight in the picturesque landscapes and calm waters as you enjoy an exceptional cruising experience.",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/2cd0a796-8d6e-46e8-a2e3-07c074072367/River_Cruise_at_Atal_Pedestrian_Bridge.jpg?format=1500w",
  },
  {
    id: 2,
    title: "Manek Chowk",
    desc: "Take your pick from the variety of food options at the midnight food market",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/46af26ea-cad1-4874-8deb-d89244ec2170/manek-chowk-manek-chowk-3-1200-x-395.jpg?format=1500w",
  },
  {
    id: 3,
    title: "Sindhu Bhavan",
    desc: "Explore the vibrancy of the streets of Sindhu Bhavan ",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/e8bade69-d0b8-4cb9-9248-9a2b4b3e8571/ahmedabda+night+life.jpg?format=1500w",
  },
  {
    id: 4,
    title: "Cycling at Rivefront",
    desc: "The riverfront is peaceful at night, perfect for a relaxing walk or cycling at night.",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738218416507-OLDKDEQWGGYEARNPKB4F/unsplash-image-2h5kX9fz5HU.jpg?format=1500w",
  },
  {
    id: 5,
    title: "Late-night Chai",
    desc: "Several chai spots stay open late, serving tea and snacks.IIM Road and Law Garden have some of the best stalls.",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738218547084-3ZG6TEJNKTU0VSCO64E2/unsplash-image-Wa9dHWRDNwo.jpg?format=1500w",
  },
];
const NightLifeCarasol = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className="sm:pb-24 pb-14">
      <h6 className="text-center py-14 text-3xl text-black font-semibold">
        Explore the Nightlife of Ahmedabad
      </h6>
      <div className="flex sm:gap-8 gap-3 items-center justify-start main-container">
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="h-10 w-10 border border-black cursor-pointer shrink-0 rounded-full flex justify-center items-center"
        >
         <FaArrowLeft  className="text-black" />
        </button>

        <Swiper
          onSwiper={setSwiperRef}
          modules={[Pagination, Navigation, A11y]}
          className=""
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {data.length > 0 ? (
            data.map((ele) => (
              <SwiperSlide key={ele.id} className="justify-start mx-auto ">
                <div className="bg-[#F1FFE0] p-5">
                  <img
                    src={ele.img}
                    alt={ele.title}
                    className="sm:h-[250px] h-80 object-cover  w-full mb-4"
                  />
                  <h5 className="mb-2 font-semibold text-black text-base text-center">
                    {ele.title}
                  </h5>
                  <p className="text-xs text-center text-black">  {ele.desc.length > 80
                    ? `${ele.desc.slice(0, 80)}...`
                    : ele.desc}</p>{" "}
          
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="capitalize text-red-600 font-semibold text-xl text-center">
              No data Found
            </p>
          )}
        </Swiper>

        {/* Right Button */}
        <button
          onClick={() => swiperRef?.slideNext()}
          className="h-10 w-10 shrink-0 border cursor-pointer border-black rounded-full flex justify-center items-center"
        >
          <FaArrowRight className="text-black" />
        </button>
      </div>
    </section>
  );
};

export default NightLifeCarasol;
