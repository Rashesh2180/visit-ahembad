import Explore from "@/components/home/Explore";
import Featurre from "@/components/home/Feature";
import GreenGreeting from "@/components/home/GreenGreeting";
import HeritageCity from "@/components/home/HeritageCity";
import HeroBanner from "@/components/home/HeroBanner";
import LocationMap from "@/components/home/LocationMap";
import MustSeePlace from "@/components/home/MustSeePlace";
import React from "react";
import jsonData from "../../public/assets/text/en.json";
const HomePage = () => {
  const homeData = jsonData?.home;
  return (
    <>
      <HeroBanner heroData={homeData?.hero} />
      <HeritageCity heritageData={homeData?.heritageCity} />
      <MustSeePlace mustSeedata={homeData?.mustSee} />
      <Explore exploreData={homeData?.explore} />
      <Featurre featureData={homeData?.feature} />
      <GreenGreeting
        GreetingData={homeData?.GreenGreeting}
        generalData={jsonData?.general}
      />
      <LocationMap />
    </>
  );
};

export default HomePage;
