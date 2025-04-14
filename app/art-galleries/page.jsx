"use client";
import React from "react";
import RollingGallery from "@/animations/RollingGallery";
const page = () => {
  return (
    <section className="bg-[#F1FFE0] sm:py-14 py-10">
      <div className="main-container">
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </section>
  );
};

export default page;
