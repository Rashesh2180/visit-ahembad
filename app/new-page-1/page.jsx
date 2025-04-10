import Events from "@/components/home/Events";
import Festival from "@/components/home/Festival";
import HomeBanner from "@/components/home/HomeBanner";
import React from "react";
import jsonData from "../../public/assets/text/en.json";

const NewPage = () => {
  const newPageData = jsonData?.newPage1;
  return (
    <>
      <HomeBanner heroData={newPageData?.hero} />
      <Festival festivalData={newPageData?.musicEntertainment} />
      <Events eventData={newPageData?.events} />
    </>
  );
};

export default NewPage;
