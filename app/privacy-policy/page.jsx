import React from "react";
import jsonData from "../../public/assets/text/en.json";

const page = () => {
  const privacyData = jsonData?.privacyPolicy;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:py-14 py-7 flex flex-col sm:gap-14 gap-8">
      <div className="text-black">
        <h2 className="font-semibold text-2xl sm:mb-6 mb-3">
          {privacyData?.title}
        </h2>
        <ul className="list-disc flex flex-col sm:gap-5 gap-3">
          <li className="sm:text-lg text-sm ml-10">
            {privacyData?.list1}
          </li>

          <li className="sm:text-lg text-sm ml-10">
            {privacyData?.list2}{" "}
            
          </li>
          <li className="sm:text-lg text-sm ml-10">
            {privacyData?.list3}{" "}
            
          </li>
        </ul>
      </div>
   
    </div>
  );
};

export default page;
