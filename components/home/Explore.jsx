import React from "react";
import Image from "next/image";
const Explore = ({exploreData}) => {
  return (
    <div className="">
      <h6 className="text-center text-5xl text-black font-semibold sm:py-20 py-10">
      {exploreData?.title}
      </h6>
      <div className="bg-[#5B767B] w-full sm:py-32 py-14">
        <div className="flex flex-wrap gap-5 main-container ">
          <div className="relative flex-1 min-w-2xs ">
            <Image
              src={
                "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/6faa3a0c-fe7e-406c-a4e1-73a24548d03c/Thol_lake_02.jpeg?format=1500w"
              }
              height={308}
              unoptimized
              alt=""
              width={406}
              className="w-full mb-10 sm:h-[304px] h-48"
            />
            <h6 className="font-medium text-lg  text-white text-center ">
              <strong>{exploreData?.card1}</strong>
            </h6>
          </div>
          <div className="relative flex-1 min-w-2xs ">
            <Image
              src={
                "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/d0be1193-f1b6-4f3b-8296-4424116e7423/Kankaria_Carnival_2_Ahmedabad.jpeg?format=1500wttps://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/95a71e1f-b7c6-4254-8704-f4d0a7c74616/Narendra_Modi_Stadium_view_from_the_gallery.jpg?format=1000w"
              }
              height={308}
              unoptimized
              width={406}
              alt=""
              className="w-full mb-10 sm:h-[304px] h-48"
            />
            <h6 className="font-medium text-lg  text-white text-center ">
              <strong>{exploreData?.card2}</strong>
            </h6>
          </div>
          <div className="relative flex-1 min-w-2xs ">
            <Image
              src={
                "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/8f08b98a-81d8-4904-a0fa-41cac0a4c279/nal+sarovar.jpg?format=1500w"
              }
              height={308}
              unoptimized
              width={406}
              alt=""
              className="w-full mb-10 sm:h-[304px] h-48 "
            />
            <h6 className="font-medium text-lg  text-white text-center ">
              <strong>{exploreData?.card3}</strong>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
