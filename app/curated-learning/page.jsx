import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    img: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/59db377f-34a5-470c-aef0-c45630106587/AroHa_02.jpg?format=2500w",
    title: "Learn to brew your own coffee",
    price: "20",
    duration: "2",
  },
  {
    id: 2,
    img: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/12a36dab-dfec-4d85-b73b-1995071106fe/image-asset+%282%29.jpeg?format=2500w",
    title: "Learn how to cook local delicacies",
    price: "20",
    duration: "2",
  },
  {
    id: 3,
    img: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/5df416e3-4182-471e-8155-8f6d7fff0ef8/image-asset+%287%29.jpeg?format=2500w",
    title: "Learn how to bake your own cake",
    price: "20",
    duration: "2",
  },
];

const page = () => {
  return (
    <div className="sm:py-20 py-10  bg-[#F1FFE0]">
      <div className="main-container">
        <div className="flex justify-center gap-8 flex-wrap ">
          {data.length > 0 &&
            data.map((ele) => (
              <div
                key={ele.id}
                className="flex flex-col relative flex-1 gap-5 min-w-[300px] max-w-[400px]"
              >
                <Image
                  src={ele.img}
                  alt=""
                  className="w-full sm:h-[350px] h-[250px] rounded-[20px] object-cover"
                  height={220}
                  width={220}
                  unoptimized
                />
                <h6 className="text-xl font-semibold text-black">
                  {ele.title}
                </h6>
                <p className="text-sm text-black">{ele.desc}</p>
                <div className=" absolute top-5 right-5 flex flex-col-reverse gap-2 items-end">
                  <div className="px-2 py-1 font-semibold inline-block rounded-full text-xs bg-black text-white">
                   Price:- {ele.price}₹
                  </div>
                  <div className="px-2 py-1 font-semibold rounded-full text-xs bg-black text-white">
                   Duration:- {ele.duration}hr
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
