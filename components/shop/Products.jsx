"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    title: "Jade Roller",
    category: "beauty",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1649102917769-4V2290PAV3M0T0J97PJI/image-asset.jpeg?format=750w",
    price: "20",
    desc: "This is a self care product. Designed to help you restore and regenerate. It is the ultimate in self care essentials.",
    features: ["BPA Free", "Domestically Assembled", "Cruelty Free"],
  },
  {
    id: 2,
    title: "Spice Cleanse Set",
    category: "wellness",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1649102917780-O0PP4Q6D0GMVMK8CTZV1/Stocksy_comp_1995924.jpg?format=750w",
    price: "35",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
  },
  {
    id: 3,
    title: "Magnesium+ Supplements",
    category: "wellness",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1649102917804-LSTZQNVPC33UCF30OZXI/Stocksy_comp_1070346.jpg?format=750w",
    price: "38",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
  },
  {
    id: 4,
    title: "Tea Tree Oil Serum",
    category: "beauty",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1649102917839-ST9FJ0QKRSRBH4N6M9KO/image-asset.jpeg?format=750w",
    price: "32",
    desc: "This is a skin care product. Carefully formulated to hydrate and replenish. With essential vitamins and minerals to restore the vitality of your skin.",
    features: ["Organic", " Domestically Grown", "Cruelty Free"],
  },
  {
    id: 5,
    title: "Rose Infused Eye Cream",
    category: "wellness",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1649102917848-HXXX3EBHPL6O9P2WHIY9/Stocksy_comp_3166128.jpg?format=750w",
    price: "24",
    desc: "This is a skin care product. Carefully formulated to hydrate and replenish. With essential vitamins and minerals to restore the vitality of your skin.",
    features: ["Organic", " Domestically Grown", "Cruelty Free"],
  },
  {
    id: 6,
    title: "Soap Making Kits",
    category: "beauty",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1649102917865-57BN1K40CJE55M7O6HLN/Stocksy_comp_1491938.jpg?format=750w",
    price: "18",
    desc: "This is a self care product. Designed to help you restore and regenerate. It is the ultimate in self care essentials.",
    features: [""],
  },
  {
    id: 7,
    title: "Sunflower Seed Cleansing Oil",
    category: "beauty",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1649102917884-JX3II521WZ8AR0VEOQ11/Stocksy_comp_2136274.jpg?format=750w",
    desc: "This is a skin care product. Carefully formulated to hydrate and replenish. With essential vitamins and minerals to restore the vitality of your skin.",
    price: "43",
    features: ["Organic", " Domestically Grown", "Cruelty Free"],
  },
  {
    id: 8,
    title: "matcha set",
    category: "wellness",
    img: "https://images.squarespace-cdn.com/content/v1/624b5039a374f73b681f7e5a/1650022648045-G5KRF4M1STFJ0HQAGNFY/Stocksy_comp_2406227.jpeg?format=750w",
    price: "43",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. ",
  },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredData, setFilteredData] = useState(data);
  const [loading, setLoading] = useState(false);

  const categories = ["all", "wellness", "beauty"];

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setFilteredData(
        activeTab === "all"
          ? data
          : data.filter((item) => item.category === activeTab)
      );
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <section className="sm:py-32 py-10 bg-[#EFEBFA]">
      <div className="main-container">
        <h2 className="section-title mb-5">Greatest hits</h2>
        <p className="sm:mb-10 mb-6 text-base text-black max-w-3xl">
          Discover everyone’s favorites for all things wellness.
        </p>

        <div className="flex gap-4 mb-10 justify-center">
          {categories.map((category) => (
            <button
              key={category}
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
