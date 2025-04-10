import InputBanner from "@/components/inputbanner/InputBanner";
import LocalTour from "@/components/sightseeing-in-and-around-the-ahmedabad/LocalTour";
import SightSeeingBanner from "@/components/sightseeing-in-and-around-the-ahmedabad/SightSeeingBanner";
import React from "react";
import jsonData from "../../public/assets/text/en.json";

const page = () => {
  const sightSeendata = jsonData?.sightSeen;
  return (
    <div>
      <SightSeeingBanner
        data={sightSeendata?.hero}
        generaltext={jsonData?.general}
      />
      <LocalTour data={sightSeendata?.data} />
      <InputBanner
        generaldata={jsonData?.general}
        inputData={jsonData?.inputBanner}
        className=" bg-center bg-[url('https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847885952-PYSL0PZB2JIMU9JZ9P99/20140301_Trade-151_0124-copy.jpg?format=2500w')]"
      />
    </div>
  );
};

export default page;
