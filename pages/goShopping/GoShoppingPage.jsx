"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
const data = [
  {
    id: 1,
    title: "Law Garden Night Market: The Handicraft Heaven",
    desc: "If you’re looking for vibrant Gujarati embroidery , and traditional Chaniya Cholis , Law Garden is the place to be. This night market comes alive after sunset with stalls.",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/222faa15-14b0-4b96-8fd4-6e77e59033ba/law+garden+by+lost+traveller.jpg?format=1000w",
    link: "https://www.google.com/maps/place/Law+Garden+Market+(Street+side)/@23.0267207,72.5561664,441m/data=!3m1!1e3!4m6!3m5!1s0x395e85245d261741:0x4a4b49cf397d3c7c!8m2!3d23.0249844!4d72.5597348!16s%2Fg%2F11s8g180rh!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
  },
  {
    id: 2,
    title: "CG Road & Ahmedabad One Mall: For Modern Fashion",
    desc: "For those who love branded shopping, Ahmedabad One Mall Palladium Mall , and CG Road  house top fashion labels, lifestyle stores, and international brands.",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/fc5e6ece-01bc-4556-8e9a-6584b182ca1e/ahmedabd+one+mall.jpg?format=1500w",
    link: "https://www.google.com/maps/place/Palladium+Ahmedabad/@23.0575877,72.5159735,763m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e9d0845742b0f:0x7e05407cae921b5a!8m2!3d23.0575828!4d72.5208444!16s%2Fg%2F11t6lm12t7!5m1!1e2?entry=tts&g_ep=EgoyMDI1MDEyOS4xIPu8ASoASAFQAw%3D%3D",
  },

  {
    id: 3,
    title: "Rani no Hajiro Market: A Hidden Gem for Antique Jewelry",
    desc: "Nestled near Manek Chowk, this market is known for its exquisite silver jewelry, vintage accessories, and tribal ornaments . If you're interested in streetside shopping and fan of unique, handcrafted pieces, this is a must-visit.",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/4bae31f8-de3b-4a0c-b655-46b21d2c357f/IMG_20241212_103158.jpg?format=1500w",
    link: "https://www.google.com/maps/place/Rani+no+Hajiro/@23.0236232,72.5865595,763m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e844a2f31190d:0xa116ee7245e6940f!8m2!3d23.0236183!4d72.5891344!16s%2Fm%2F012krs2c!5m1!1e2?entry=tts&g_ep=EgoyMDI1MDEyOS4xIPu8ASoASAFQAw%3D%3D",
  },
  {
    id: 4,
    title: "Kapasi Handicrafts Emporium – Best for Souvenirs & Handicrafts",
    desc: "If you want to take home authentic Gujarati handicrafts  like Wooden carvings and sculptures, Hand-painted pottery, Miniature paintings and brass artifacts, head to Kapasi Handicrafts Emporium. ",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738139191656-VCWZYDNSANG649RDIWR2/unsplash-image-9eS1Qb7JqaY.jpg?format=1000w",
    link: "https://www.google.com/maps/place/Kapasi+Handicrafts+Emporium/@23.0419934,72.5658436,763m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e845fe7d9ff79:0x97b58ca289b4bd82!8m2!3d23.0419885!4d72.5707145!16s%2Fg%2F1vj5ym62!5m1!1e2?entry=tts&g_ep=EgoyMDI1MDEyOS4xIPu8ASoASAFQAw%3D%3D",
  },
  {
    id: 6,
    title: "Bandhej – Sustainable & Handcrafted Fashion",
    desc: "A pioneer in ethical and slow fashion , Bandhej is known for its elegant handloom sarees, block-printed Kurtas, and fusion wear that celebrates Indian textiles. ",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738140125296-TM2TPW6HU06LW9PIA6YV/unsplash-image-sTp-dDBc4Xw.jpg?format=750w",
    link: "#",
  },
  {
    id: 7,
    title: "Asopalav – Bridal & Ethnic Wear",
    desc: "If you love ethical shopping, these boutiques offer, Asopalav is one of Ahmedabad’s most renowned boutiques for bridal lehengas, silk sarees, and festive outfits ",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738140230845-YUP7GRYL49OH2VLV2A9R/unsplash-image-sUkDIlr2cAQ.jpg?format=750w",
    link: "https://www.google.com/maps/place/Asopalav+Satelite/@23.0307581,72.4422404,12209m/data=!3m2!1e3!5s0x395e84cf5e7cc5fd:0xcfad5b02de63fe40!4m7!3m6!1s0x395e84cf5e882a5d:0xc07a1038f290115b!8m2!3d23.028125!4d72.5321348!15sCghBc29wYWxhdiIDiAEBWgoiCGFzb3BhbGF2kgEOY2xvdGhpbmdfc3RvcmXgAQA!16s%2Fg%2F1tfzvx0p!5m1!1e2?entry=tts&g_ep=EgoyMDI1MDEyOS4xIPu8ASoASAFQAw%3D%3D",
  },
];
const GoShoppingPage = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className="sm:pb-24 pb-14">
      <h6 className="text-center py-14 text-3xl text-black font-semibold max-w-3xl mx-auto leading-10">
        A Shopper’s Paradise: Exploring Ahmedabad’s Best Markets and Boutiques
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
          {data.length > 0 ? (
            data.map((ele) => (
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
                  <a target="_blank"
                    href={ele.link}
                    className="p-3 mx-auto mt-auto bg-black text-white text-sm text-center font-semibold cursor-pointer inline-block"
                  >
                    Visit Now
                  </a>
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

export default GoShoppingPage;
