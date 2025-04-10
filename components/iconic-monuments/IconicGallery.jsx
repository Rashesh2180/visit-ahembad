import Image from "next/image";
import React from "react";



const IconicGallery = ({data}) => {
  return (
    <section className="bg-[#F1FFE0] sm:py-20 py-10">
      <div className="main-container flex flex-col md:gap-20 gap-10 max-md:h-[600px] overflow-y-auto">
        {data.length > 0 &&
          data.map((ele, ind) => (
            <div
              key={ind}
              className={`flex sm:gap-10 gap-5 max-md:flex-col ${ind % 2 !== 0 ? "flex-row-reverse" : ""}`}
            >
              <Image
                src={ele.img}
                alt={ele.tilte}
                height={500}
                width={500}
                unoptimized
                className="object-cover md:max-h-[500px] max-h-[250px] max-md:w-full flex-1"
              />
              <div className="md:flex-1">
                <h2 className="sm:text-4xl text-2xl font-semibold sm:mb-5 text-black">
                  {ele.tilte}
                </h2>
                <p className="text-black text-sm font-medium ">{ele.desc}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default IconicGallery;
