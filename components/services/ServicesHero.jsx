import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "Basic",
    img: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/59db377f-34a5-470c-aef0-c45630106587/AroHa_02.jpg?format=2500w",
    desc: "Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.",
  },
  {
    id: 2,
    title: "Intermediate",
    img: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/12a36dab-dfec-4d85-b73b-1995071106fe/image-asset+%282%29.jpeg?format=2500w",
    desc: "Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.",
  },
  {
    id: 3,
    title: "Advanced",
    img: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/5df416e3-4182-471e-8155-8f6d7fff0ef8/image-asset+%287%29.jpeg?format=2500w",
    desc: "Add your pricing strategy. Be sure to include important details like value, length of service, and why it’s unique.",
  },
 
];

const ServicesHero = () => {
  return (
    <section className="sm:py-32 py-10 bg-[#F1FFE0]">
      <div className="main-container">
        <h2 className="section-title mb-5">Our Services</h2>
         <p className="sm:mb-16 mb-8 text-base text-black max-w-3xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. </p>
        {data.length > 0 && (
          <div className="grid xl:gap-12 gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {data.map((ele) => (
              <div
                className="h-full w-full flex flex-col items-start gap-5"
                key={ele.id}
              >
                <Image
                  src={ele.img}
                  alt={ele.title}
                  height={160}
                  width={200}
                  unoptimized
                  className="w-full sm:h-96 h-44 rounded-[20px] object-cover"
                />
                <h3 className="text-black text-2xl font-semibold">
                  {ele.title}
                </h3>
                <p className="text-black text-sm">
                  {ele.desc.length > 120
                    ? `${ele.desc.slice(0, 120)}...`
                    : ele.desc}
                </p>
                <button className="bg-black ml-auto rounded-lg text-white text-center text-sm font-semibold mt-auto hover:opacity-75 p-3 cursor-pointer">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesHero;
