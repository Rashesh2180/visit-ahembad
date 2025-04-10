import Image from "next/image";
import Link from "next/link";
import React from "react";



const KidsPlaces = ({data}) => {
  return (
    <section className="sm:py-32 py-10">
      <div className="main-container">
        <h6 className="mb-20 text-5xl text-black font-semibold">
          {data?.title}
        </h6>
        {data?.data?.length > 0 && (
          <div className="grid xl:gap-12 gap-8  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {data?.data?.map((ele) => (
              <div
                className="h-full w-full flex flex-col items-start gap-5"
                key={ele.id}
              >
                <Image
                  src={
                    ele.img ||
                    "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
                  }
                  alt={ele.title}
                  height={160}
                  width={200}
                  unoptimized
                  className="w-full sm:h-60 h-40 object-cover"
                />
                <h3 className="text-black text-start text-3xl font-semibold">
                  {ele.title}
                </h3>
                <p className="text-black text-lg">
                  {ele.desc.length > 120
                    ? `${ele.desc.slice(0, 120)}...`
                    : ele.desc}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={ele.link}
                  className="bg-black text-white text-center text-sm font-semibold mt-auto hover:opacity-75 p-3 cursor-pointer"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default KidsPlaces;
