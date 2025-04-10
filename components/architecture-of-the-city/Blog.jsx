import Image from "next/image";
import React from "react";

const Blog = ({ data }) => {
  return (
    <div className="sm:py-20 py-10 bg-black">
      <div className="main-container grid sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
        {data?.length > 0 &&
          data.map((ele, ind) => (
            <div
              key={ind}
              className="relative lg:h-[500px] md:h-[400px] h-[200px]"
            >
              <Image
                src={
                  ele?.img
                }
                alt=""
                width={500}
                height={500}
                unoptimized
                className="w-full h-full object-cover brightness-90 hover:brightness-100"
              />
              <div className=" absolute sm:p-4 bottom-5 left-5">
                <h6 className="lg:text-2xl md:text-xl text-lg text-white font-semibold mb-2">
                  {ele?.title}
                </h6>
                <h5 className="lg:text-2xl md:text-xl text-lg text-white font-semibold italic">
                {ele?.subTitle}

                </h5>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
