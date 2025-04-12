"use client"
import ImageBanner from "@/components/imagebanner/ImageBanner";
import Well from "@/components/stepwall/Well";
import React from "react";
import jsonData from "../../public/assets/text/en.json";

const page = () => {
  const data = jsonData?.stepwell
  return (
    <div>
      <ImageBanner 
        className="!h-[350px]"
        heading={data?.heroTitle}
        bgImage="https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1739125513656-5AYGYU69WOPP65MOQJ5Y/unsplash-image-45abDJ2lgEk.jpg?format=1500w"
      />
      <Well data={data?.detail} />
    </div>
  );
};

export default page;
