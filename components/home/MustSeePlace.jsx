import React from "react";
import Link from "next/link";
import Image from "next/image";
const MustSeePlace = () => {
  return (
    <section className=" py-20 bg-black ">
      <div className="main-container ">
        <h6 className="font-semibold text-2xl sm:mb-20 mb-8 text-white">
          Must See places of Ahmedabad
        </h6>
        <div className="flex flex-wrap gap-3 ">
          <div className="relative flex-1 min-w-2xs ">
            <Image
              src={
                "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/947306ca-b12e-4c5c-9593-66fea7aaf244/IMG20230407193226.jpg?format=1000wttps://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/a1507321-34d8-4900-90cd-f2d92fae9057/VALENTINE.jpg?format=2500w"
              }
              height={304}
              unoptimized
              alt=""
              width={406}
              className="w-full mb-5 sm:h-[304px] h-48"
            />
            <h6 className="font-medium text-lg  text-white ">
              <strong>Atal Bridge</strong>- Gujarat’s longest Bridge
            </h6>
          </div>
          <div className="relative flex-1 min-w-2xs ">
            <Image
              src={
                "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/95a71e1f-b7c6-4254-8704-f4d0a7c74616/Narendra_Modi_Stadium_view_from_the_gallery.jpg?format=1000w"
              }
              height={304}
              alt=""
              unoptimized
              width={406}
              className="w-full mb-5 sm:h-[304px] h-48"
            />
            <h6 className="font-medium text-lg  text-white ">
              <strong>Motera Stadium</strong>- World’s Larget Cricket Stadium
            </h6>
          </div>
          <div className="relative flex-1 min-w-2xs ">
            <Image
              src={
                "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/0a0980ad-a358-4130-9f5a-a7b554f03d0e/Aquatic_Gallery%2C_Gujarat_Science_City_01+_+Nizil+Shah.jpg?format=1000w"
              }
              height={304}
              unoptimized
              width={406}
              alt=""
              className="w-full mb-5 sm:h-[304px] h-48 "
            />
            <h6 className="font-medium text-lg  text-white ">
              <strong>Aquatic Gallery</strong> - Gujarat’s largest Acquarium
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MustSeePlace;
