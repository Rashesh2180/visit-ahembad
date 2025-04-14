"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";


const Products = ({data}) => {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredData, setFilteredData] = useState(data?.data);
  const [loading, setLoading] = useState(false);
  console.log("data",data)

  const categories =data?.tabs;

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setFilteredData(
        activeTab === "all"
          ? data?.data
          : data?.data?.filter((item) => item.category === activeTab)
      );
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <section className="sm:py-32 py-10 bg-[#EFEBFA]">
      <div className="main-container">
        <h2 className="section-title mb-5">{data?.title}</h2>
        <p className="sm:mb-10 mb-6 text-base text-black max-w-3xl">
         {data?.subHeading}
        </p>

        <div className="flex gap-4 mb-10 justify-center">
          {categories.map((category,ind) => (
            <button
              key={ind}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-full capitalize cursor-pointer
                ${
                  activeTab === category
                    ? "bg-black text-white"
                    : "bg-white text-black border border-black"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid xl:gap-12 gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:h-[500px] overflow-y-auto">
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-full w-full flex flex-col items-start gap-5 animate-pulse"
                >
                  <div className="w-full sm:h-96 h-36 rounded-[20px] bg-gray-300" />
                  <div className="w-3/4 h-6 bg-gray-300 rounded-md" />
                  <div className="w-1/3 h-5 bg-gray-300 rounded-md" />
                </div>
              ))
            : filteredData.map((ele) => (
                <Link
                  key={ele.id}
                  href={`/shop/${encodeURIComponent(
                    ele.title.toLowerCase().replace(/\s+/g, "-")
                  )}`}
                  className="h-full w-full flex flex-col items-start gap-5"
                >
                  <Image
                    src={ele.img}
                    alt={ele.title}
                    height={160}
                    width={200}
                    unoptimized
                    className="w-full sm:h-96 h-44 rounded-[20px] object-cover"
                  />
                  <h3 className="text-black text-2xl font-semibold">
                    {ele.title}
                  </h3>
                  <p className="text-lg text-black">₹{ele.price}.00</p>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
