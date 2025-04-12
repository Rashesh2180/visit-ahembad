"use client"
import Blog from "@/components/architecture-of-the-city/Blog";
import DualSection from "@/components/architecture-of-the-city/DualSection";
import Places from "@/components/architecture-of-the-city/Places";
import React from "react";
import jsonData from "../../public/assets/text/en.json";

const page = () => {
  const data = jsonData?.architecture;
  return (
    <div>
      <DualSection data={data?.hero} />
      <Blog  data={data?.blog?.data}/>
      <Places data={data?.places?.data} />
    </div>
  );
};

export default page;
