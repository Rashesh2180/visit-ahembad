import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    title: "Learn about the Independence History of Ahmedabad ",
    desc:"A guided tour at the Sardar Vallabhbhai Patel’s Home",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/2ef1c555-fae7-4d7b-a362-ff82419a1547/IMG_20220807_091358.jpg?format=500w",
  },
  {
    id: 2,
    desc:"A guided tour at the Sardar Vallabhbhai Patel Museum",

    title: "Learn about the Independence Struggle of India ",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/de851a11-661a-42c2-983e-1d6b137fa779/sardar-vallabhbhai-patel-national-museum-ahmedabad-gujarat-attr-about.jpeg?format=500w",
  }
];

const LearningActivites = () => {
  return (
    <section className="bg-[#F1FFE0] sm:py-20 py-10">
      <div className="main-container">
        <h6 className="sm:mb-20 mb-5 sm:text-5xl text-3xl text-black font-semibold">
        Learning activties for kids
        </h6>
        {data.length > 0 && (
          <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {data.map((ele) => (
              <div className="h-full w-full flex flex-col gap-3 items-start" key={ele.id}>
                <Image
                  src={ele.img}
                  alt=""
                  height={160}
                  width={200}
                  unoptimized
                  className="w-full sm:h-60 h-40"
                />
                   <p className="text-black  text-start text-base leading-6 font-semibold">
                      {ele.title}
                    </p>
                    <p className="text-black  text-start mb-3 text-sm font-medium">
                      {ele.desc}
                    </p>
                    <button className="bg-black  rounded-lg hover:opacity-70 py-3 ml-auto px-5 cursor-pointer">
                      Book Now!
                    </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LearningActivites;
