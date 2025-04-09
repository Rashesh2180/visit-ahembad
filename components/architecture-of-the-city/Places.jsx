import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737904702020-URY97R8R4WMAIOZPSIRK/unsplash-image-AKLZ-2wfits.jpg?format=500w",
    title: "Amdavad ni Gufa (1994)",
  },
  {
    id: 2,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/c73093b8-e837-4f52-bcc2-6ce07006f2a2/Tagore_Hall_Ahmedabad_3.jpg?format=500w",
    title: "Tagore Memorial Hall (1966)",
  },
  {
    id: 3,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/52bdf4a1-6bb7-4067-a298-5cb7a97938fc/Mill+Owners%E2%80%99+Association+Building+%281954%29.jpg?format=500w",
    title: "Mill Owners’ Association Building (1954)",
  },
  {
    id: 4,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/39f54b5f-5fbc-4a33-86e7-374412df6be7/unsplash-image-lgcVzkqbUBE.jpg?format=1000w",
    title: "Ellis Bridge (1892 CE)",
  },
];

const Places = () => {
  return (
    <div className="sm:py-20 py-10  bg-[#EFEBFA]">
      <div className="flex flex-wrap justify-center gap-4 main-container">
        {data.length > 0 &&
          data.map((ele) => (
            <div
              key={ele.id}
              className="w-full sm:w-[calc(33.333%-1rem)] flex flex-col gap-5"
            >
              <Image
                src={ele.img}
                alt=""
                className="w-full h-full max-h-[220px] rounded-lg object-cover"
                height={220}
                width={220}
                unoptimized
              />
              <h6 className="text-2xl font-semibold text-black">{ele.title}</h6>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Places;
