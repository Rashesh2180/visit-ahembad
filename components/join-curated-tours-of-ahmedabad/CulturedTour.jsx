import React from "react";
import Image from "next/image";
import jsonData from "../../public/assets/text/en.json";

const CulturedTour = () => {
  const cultureData = jsonData?.Cultural
  return (
    <section className="py-20 bg-[#F1FFE0]">
      <div className="main-container">
        <h6 className="section-title sm:mb-20 mb-10 text-center">{cultureData?.title}</h6>

        {cultureData?.data?.length > 0 && (
          <div className="grid xl:gap-12 gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:h-[500px] overflow-y-auto">
            {cultureData?.data?.map((ele) => (
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
                  className="w-full sm:h-60 h-80 object-cover"
                />
                <h3 className="text-black text-start text-xl font-semibold">
                  {ele.title}
                </h3>
                <p className="text-black text-sm">
                  {ele.desc.length > 200
                    ? `${ele.desc.slice(0, 200)}...`
                    : ele.desc}
                </p>

              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CulturedTour;
