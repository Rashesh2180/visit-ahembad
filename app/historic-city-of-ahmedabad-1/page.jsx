import Category from "@/components/historyCity1/Category";
import HistorySubscribe from "@/components/historyCity1/HistorySubscribe";
import ImageGallery from "@/components/historyCity1/ImageGallery";
import History1 from "@/pages/history1/History1";
import React from "react";

const page = () => {
  return (
    <div>
      <History1 />
      <ImageGallery />
      <Category />
      <HistorySubscribe/>
    </div>
  );
};

export default page;
