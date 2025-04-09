import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/0fd724e7-fa8b-4d53-9fdc-2c7e63b20af8/patang+night+view.jpg?format=500w",
    title: "PATANG - A revolving revolution",
    desc: "Ahmedabad’s iconic revolving restaurant, offers a unique dining experience with panoramic city views from 221 feet above ground. Renowned for its diverse cuisine, it combines innovation with a bird’s-eye perspective of the Sabarmati Riverfront.",
  },
  {
    id: 2,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/c81172ff-9400-4246-adbc-69e3ee1b56a5/vishalla.png?format=500w",
    title: "Vishalla",
    desc: "A rustic-themed restaurant in Ahmedabad, offering an immersive village-style dining experience with traditional Gujarati cuisine served on leaf platters. Enhanced by folk performances and museum exhibits, it beautifully celebrates Gujarat’s culture and heritage.",
  },
  {
    id: 3,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/0fd724e7-fa8b-4d53-9fdc-2c7e63b20af8/patang+night+view.jpg?format=500w",
    title: "UNDER THE NEEM TREE",
    desc: "Ahmedabad’s iconic revolving restaurant, offers a unique dining experience with panoramic city views from 221 feet above ground. Renowned for its diverse cuisine, it combines innovation with a bird’s-eye perspective of the Sabarmati Riverfront.",
  },
];

const UnforgettableHero = () => {
  return (
    <div className="sm:py-20 py-10  bg-[#5B767B]">
      <div className="main-container">
        <h2 className="section-title max-w-4xl sm:mb-16 mb-8 !text-white">
          Unforgettable food and drink spots in Ahmedabad
        </h2>
        <div className="flex justify-center gap-8 flex-wrap ">
          {data.length > 0 &&
            data.map((ele) => (
              <div
                key={ele.id}
                className="flex flex-col flex-1 gap-5 min-w-[300px] max-w-[400px]"
              >
                <Image
                  src={ele.img}
                  alt=""
                  className="w-full sm:h-[350px] h-[250px] rounded-lg object-cover"
                  height={220}
                  width={220}
                  unoptimized
                />
                <h6 className="text-xl font-semibold text-white">
                  {ele.title}
                </h6>
                <p className="text-sm text-white">{ele.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UnforgettableHero;
