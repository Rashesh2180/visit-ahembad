import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button/Button";



const OneDayTour = ({data,generaltext}) => {
  return (
    <section className="sm:py-32 py-10 bg-black text-white">
      <div className="main-container">
        <h6 className="sm:mb-20 mb-10 sm:text-5xl text-3xl font-semibold text-center">{data?.oneDayTour?.title}</h6>
        <div className="sm:mb-20 mb-10 ">
          {data?.oneDayTour?.data?.length > 0 && (
            <div className="grid xl:gap-28 gap-8  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:h-[500px] overflow-y-auto">
              {data?.oneDayTour?.data?.map((ele) => (
                <div
                  className="h-full w-full flex flex-col items-center gap-5"
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
                  <h3 className=" text-center text-2xl  font-semibold">
                    {ele.title}
                  </h3>
                  <p className=" text-sm text-center">
                    {ele.desc.length > 120
                      ? `${ele.desc.slice(0, 120)}...`
                      : ele.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <Button text={generaltext?.exploreMore} className="bg-white mx-auto block capitalize text-black" />
      </div>
    </section>
  );
};

export default OneDayTour;
