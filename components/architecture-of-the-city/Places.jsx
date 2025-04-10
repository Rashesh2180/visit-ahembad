import Image from "next/image";
import React from "react";



const Places = ({data}) => {
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
