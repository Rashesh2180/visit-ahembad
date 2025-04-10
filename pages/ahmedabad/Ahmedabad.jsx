import AhemdbadBanner from "@/components/ahmedabad/AhemdbadBanner";
import KidsPlaces from "@/components/ahmedabad/KidsPlaces";
import LearningActivites from "@/components/ahmedabad/LearningActivites";
import React from "react";
import jsonData from "../../public/assets/text/en.json";
import InputBanner from "@/components/inputbanner/InputBanner";

const Ahmedabad = () => {
  const ahemdabadData = jsonData?.ahemdabad;
  return (
    <div>
      <AhemdbadBanner
        data={ahemdabadData?.hero}
        generalText={jsonData?.general}
      />
      <KidsPlaces data={ahemdabadData?.kidsdata} />
      <LearningActivites data={ahemdabadData?.learingActivites} />
      <InputBanner
        generaldata={jsonData?.general}
        inputData={jsonData?.inputBanner}
        className=" bg-center bg-[url('https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737814285162-UAD6REJTGM4FI79DBPF1/unsplash-image-M-1ojsN__YM.jpg?format=1500w')]"
      />
    </div>
  );
};

export default Ahmedabad;
