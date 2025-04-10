"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const NightLifeCarasol = ({ nightPlace }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className="sm:pb-24 pb-14">
      <h6 className="text-center py-14 section-title">
        {nightPlace?.title}
      </h6>
      <div className="flex sm:gap-8 gap-3 items-center justify-start main-container">
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
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {nightPlace?.nightPlaceData?.length > 0 ? (
            nightPlace?.nightPlaceData?.map((ele) => (
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
                  <p className="text-xs text-center text-black">
                    {" "}
                    {ele.desc.length > 80
                      ? `${ele.desc.slice(0, 80)}...`
                      : ele.desc}
                  </p>{" "}
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
    </section>
  );
};

export default NightLifeCarasol;
