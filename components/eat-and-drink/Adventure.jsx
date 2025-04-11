"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Adventure = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className="sm:py-24 py-14">
      <div className="main-container">
        <h6 className="section-title sm:mb-20 mb-10">{data?.title}</h6>
        <div className="flex sm:gap-8 gap-3 items-center justify-start ">
          <button
            onClick={() => swiperRef?.slidePrev()}
            className="h-10 w-10 border border-black cursor-pointer shrink-0 rounded-full flex justify-center items-center"
          >
            <FaArrowLeft className="text-black" />
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
            {data?.data?.length > 0 ? (
              data?.data?.map((ele) => (
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
