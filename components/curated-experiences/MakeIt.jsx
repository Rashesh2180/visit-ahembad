import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button/Button";

const MakeIt = ({ data,generalText }) => {
  
  return (
    <section className="sm:py-32 py-10 bg-black text-white">
      <div className="main-container">
        <h6 className="m:mb-20 mb-10 sm:text-5xl text-3xl font-semibold">
          {data?.title}
        </h6>
        <div className="sm:mb-20 mb-10 ">
          {data?.data?.length > 0 && (
            <div className="grid xl:gap-12 gap-8  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:h-[500px] overflow-y-auto">
              {data?.data?.map((ele) => (
                <div
                  className="h-full w-full flex flex-col items-center gap-4"
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
        <Button text={generalText?.makeIt} className="bg-white mx-auto block text-black" />
      </div>
    </section>
  );
};

export default MakeIt;
