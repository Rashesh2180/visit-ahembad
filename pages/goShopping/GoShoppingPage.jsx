"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import jsonData from "../../public/assets/text/en.json";
import ShinyText from "../../animations/ShinyText";
const shoppingData = jsonData?.goShopping;

const GoShoppingPage = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className="sm:pb-24 pb-14">
      <h6 className="text-center py-14 text-3xl text-black font-semibold max-w-3xl mx-auto leading-10">
        {shoppingData?.title}
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
              slidesPerView: 3,
            },
          }}
        >
          {shoppingData?.shoppingData?.length > 0 ? (
            shoppingData?.shoppingData?.map((ele) => (
              <SwiperSlide key={ele.id} className="justify-start mx-auto ">
                <div className="bg-[#F1FFE0] sm:h-[500px] p-5 flex flex-col items-start gap-6">
                  <img
                    src={ele.img}
                    alt={ele.title}
                    className="h-[250px] object-cover  w-full"
                  />
                  <h5 className="font-semibold text-black text-xl text-center">
                    {ele.title}
                  </h5>
                  <p className="text-xs text-center text-black">
                    {" "}
                    {ele.desc.length > 80
                      ? `${ele.desc.slice(0, 80)}...`
                      : ele.desc}
                  </p>{" "}
                  <a
                    target="_blank"
                    href={ele.link}
                    className="p-3 mx-auto mt-auto bg-black border border-black rounded-lg hover:bg-white hover:text-black text-white text-sm text-center font-semibold cursor-pointer inline-block"
                  >
                    {jsonData?.general?.visitNow}
                  </a>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="capitalize text-red-600 font-semibold text-xl text-center">
              {jsonData?.general?.noData}
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

export default GoShoppingPage;
