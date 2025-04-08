import Image from "next/image";
import Link from "next/link";
import React from "react";

const Events = () => {
  return (
 <section className="md:py-32 py-20 bg-black ">
     <div className="main-container ">
      <h6 className="font-semibold uppercase text-base mb-4 text-white">
        Music & Entertainment
      </h6>
      <div className="grid xl:gap-10 gap-5 sm:grid-cols-3 grid-cols-1">
        <Link href="" className="relative max-h-[254px]">
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/a1507321-34d8-4900-90cd-f2d92fae9057/VALENTINE.jpg?format=2500w"
            }
            height={254}
            unoptimized
            alt=""
            width={406}
            className="w-full mb-5 h-full"
          />
          <h6 className="font-semibold text-sm  text-white underline">
          Valentine's Week Special - Pot Painting
          </h6>
        </Link>
        <Link href=""
         className="relative max-h-[254px]">
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/9473238a-cfc8-4e76-ae8d-576a5844baac/valemtme+dinner.jpg?format=1000w"
            }
            height={254}
            alt=""
            unoptimized
            width={406}
            className="w-full mb-5 h-full"
          />
          <h6 className="font-semibold text-sm  text-white underline">
          Bellasen Valentine’s Day Offer: Romantic Experience with 5-Course Dinner
          </h6>
        </Link>
        <Link href="" className="relative max-h-[254px]">
          <Image
          alt=""
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/856eb8f0-e917-4b8d-a824-ac6e3c771f7f/galebtibe.jpg?format=2500w"
            }
            height={254}
            unoptimized
            width={406}
            className="w-full mb-5 h-full "
          />
          <h6 className="font-semibold text-sm  text-white underline">
          Galentine’s Day Celebration
          </h6>
        </Link>
      </div>
    </div>
 </section>
  );
};

export default Events;
