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
    title: "Themed afternoon Teas",
    desc: "Delight in the picturesque landscapes and calm waters as you enjoy an exceptional cruising experience.",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737829249882-4ZG9TRLW3T1ODOV7UKOL/unsplash-image-ni9SnKPgZtk.jpg?format=750w",
  },
  {
    id: 2,
    title: "Restaurants with a view",
    desc: "Take your pick from the variety of food options at the midnight food market",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/9e6664a8-36d1-485a-b841-f9246ca8a7f3/patang+night+view.png?format=500w",
  },
  {
    id: 3,
    title: "Local Fav",
    desc: "Explore the vibrancy of the streets of Sindhu Bhavan ",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/5481d19c-8713-4c25-8d35-ee0428719c3a/the+project+cafe.jpg?format=500w",
  },
  {
    id: 4,
    title: "the iconic Gujju",
    desc: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/a75ff6a4-6cb1-44d2-9d59-5351c561bf11/swati+snacks.jpg?format=1000w",
    img:"https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/a75ff6a4-6cb1-44d2-9d59-5351c561bf11/swati+snacks.jpg?format=1000w"
  },

];
const Adventure = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className="sm:py-24 py-14">
    <div className="main-container">
    <h6 className="section-title sm:mb-20 mb-10">
    Endure in the Culinary Adventure of the city
      </h6>
      <div className="flex sm:gap-8 gap-3 items-center justify-start ">
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
          }}
        >
          {data.length > 0 ? (
            data.map((ele) => (
              <SwiperSlide key={ele.id} className="justify-start mx-auto ">
                <div className="">
                  <img
                    src={ele.img}
                    alt={ele.title}
                    className="xl:h-[400px] h-60 object-cover  w-full mb-4"
                  />
                  <h5 className="mb-2 font-semibold text-black text-2xl">
                    {ele.title}
                  </h5>
                
          
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="capitalize text-red-600 font-semibold text-xl text-center">
              No data Found
            </p>
          )}
        </Swiper>

        <button
          onClick={() => swiperRef?.slideNext()}
          className="h-10 w-10 shrink-0 border cursor-pointer border-black rounded-full flex justify-center items-center"
        >
          <FaArrowRight className="text-black" />
        </button>
      </div>
    </div>
    </section>
  );
};

export default Adventure;
