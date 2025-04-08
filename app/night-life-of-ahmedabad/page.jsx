"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";

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
const NightLife = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="flex sm:gap-8 gap-4 items-center justify-start py-24 main-container">
      <button
        onClick={() => swiperRef?.slidePrev()}
        className="h-10 w-10 border border-primary shrink-0 rounded-full flex justify-center items-center"
      >
        <img
          src="/assets/svg/carasol/left.svg"
          alt="Previous"
          className="h-4 w-4"
        />
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
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data.length > 0 ? (
          data.map((ele) => (
            <SwiperSlide key={ele.id} className="justify-start mx-auto ">
              <div className="">
                <img
                  src={ele.img}
                  alt={ele.title}
                  className="h-[250px] object-fill object-top w-full mb-2"
                />
                <h3 className="text-xs text-secondarys1 font-roboto mb-2">
                  {ele.date}
                </h3>
                <h5 className="mb-2 font-roboto text-lg font-medium">
                  {ele.title}
                </h5>
                <button className="mb-5 capitalize text-primary border text-xs border-primary rounded-lg px-4 py-2 font-medium font-roboto">
                  Read more
                </button>
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
        className="h-10 w-10 shrink-0 border border-primary rounded-full flex justify-center items-center"
      >
        <img
          src="/assets/svg/carasol/right.svg"
          alt="Next"
          className="h-4 w-4"
        />
      </button>
    </div>
  );
};

export default NightLife;
