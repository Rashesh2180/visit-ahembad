"use client"
import Category from "@/components/historyCity1/Category";
import HistorySubscribe from "@/components/historyCity1/HistorySubscribe";
import ImageGallery from "@/components/historyCity1/ImageGallery";
import History1 from "@/pages/history1/History1";
import React from "react";
import jsonData from "../../public/assets/text/en.json";

const page = () => {

  const historyData = jsonData?.history
  return (
    <div>
      <History1 data={historyData?.hero} />
      <ImageGallery />
      <Category data={historyData?.category} />
      <HistorySubscribe/>
    </div>
  );
};

export default page;
