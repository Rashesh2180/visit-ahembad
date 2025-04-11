import Image from "next/image";
import React from "react";
import jsonData from "../../public/assets/text/en.json";

const page = () => {
  const data = jsonData?.litreature;
  return (
    <section className="">
      <div className="max-w-[90.625rem] lg:pl-4 max-lg:px-4 mx-auto flex max-lg:flex-col-reverse items-center lg:gap-20 sm:gap-10 gap-5">
        <div className="flex-1 p-4">
          <h4 className="xl:text-4xl text-3xl text-black font-semibold xl:mb-6 mb-3">
            {data?.hero?.title}
          </h4>
          <p className="xl:text-base text-sm font-medium text-black">
            {data?.hero?.subTitle}
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={data?.hero?.img}
            unoptimized
            height={600}
            width={500}
            className="object-cover w-full max-lg:h-96 max-sm:h-60"
            alt=""
          />
        </div>
      </div>
      <div className="py-24 bg-[#F1FFE0]">
        <div className="main-container">
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
                    className="w-full h-60 object-cover"
                  />
                  <h3 className="text-black text-start text-2xl font-semibold">
                    {ele.title}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
