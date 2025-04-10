import ImageBanner from "@/components/imagebanner/ImageBanner";
import OneDayTour from "@/components/spirtituality/OneDayTour";
import SpirtitualityHero from "@/components/spirtituality/SpirtitualityHero";
import React from "react";
import jsonData from "../../public/assets/text/en.json";

const page = () => {
  const data = jsonData?.spirtituality
  return (
    <div>
      <SpirtitualityHero data={data?.hero} />
      <ImageBanner
        className=" bg-center"
        heading={data?.bannerTitle}
        bgImage="https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/b501ce91-c834-4f50-b1ff-5064bb688549/image-asset+%286%29.jpeg?format=1500w"
      />
      <OneDayTour data={data} generaltext={jsonData?.general} />
    </div>
  );
};

export default page;
