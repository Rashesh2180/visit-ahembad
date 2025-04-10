import Image from "next/image";
import React from "react";

const DualSection = ({data}) => {
  return (
    <section className="main-container flex justify-between gap-10 items-center sm:py-20 py-8 max-lg:flex-col-reverse">
      <div className="flex-1">
        <h5 className="section-title sm:mb-14 mb-6">
        {data?.title}
        </h5>
        <p className="sm:text-lg text-sm text-black mb-4">
        {data?.subHeading}
        </p>
        <p className="sm:text-lg text-sm text-black sm:mb-8 mb-5">
        {data?.subHeading2}
        </p>
        <ul className="list-disc text-black max-sm:text-sm">
          <li className="ml-10 mb-3">        {data?.list1}
          </li>
          <li className="ml-10 mb-3">
          {data?.list2}

          </li>
          <li className="ml-10 mb-3">
          {data?.list3}

          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Image
          src={
            data?.img
          }
          alt=""
          height={500}
          width={600}
          unoptimized
          className="ml-auto max-sm:h-60 object-cover"
        />
      </div>
    </section>
  );
};

export default DualSection;
