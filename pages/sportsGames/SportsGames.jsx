import InputBanner from "@/components/inputbanner/InputBanner";
import ImageBanner from "@/components/sportsGames/ImageBanner";
import LocalSports from "@/components/sportsGames/LocalSports";
import React from "react";
import jsonData from "../../public/assets/text/en.json";

const SportsGames = () => {
  const sportsData = jsonData?.sportGames;
  return (
    <div>
      <ImageBanner sportsData={sportsData} />
      <LocalSports localSportsdata={sportsData?.sportsData} />
      <InputBanner generaldata={jsonData?.general} inputData={jsonData?.inputBanner} className=" bg-center bg-[url('https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847885952-PYSL0PZB2JIMU9JZ9P99/20140301_Trade-151_0124-copy.jpg?format=2500w')]" />
    </div>
  );
};

export default SportsGames;
