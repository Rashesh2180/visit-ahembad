import Image from "next/image";
import Link from "next/link";
import React from "react";
import FadeContent from "../../animations/FadeContent";

const Festival = ({ festivalData }) => {
  return (
    <div className="main-container md:py-32 py-20">
      <h6 className="section-title mb-10">{festivalData?.title}</h6>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="grid gap-5 sm:grid-cols-3 grid-cols-1">
          <a
            target="_blank"
            href="https://allevents.in/ahmedabad/samraga-music-festival/80002133531197?aff=u1gjbz&ref=featured-eventlist"
            className="group relative rounded-lg overflow-hidden h-64 "
          >
            <Image
              src={
                "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/42fa3d74-4ab7-4e08-aa5d-55bf65bc90dc/SAMRAGA+Music+Festival.jpg?format=1500w"
              }
              height={254}
              unoptimized
              alt=""
              width={506}
              className="w-full rounded-lg h-full"
            />
            <div className="bg-[rgba(0,0,0,0.7)] h-full p-5 w-full justify-center items-center absolute top-0 left-0 hidden group-hover:flex">
              <h6 className="font-semibold text-2xl  text-white">
                SAMARAGA:Music Festival
              </h6>
            </div>
          </a>
          <a
            target="_blank"
            href="https://in.bookmyshow.com/events/javed-ali-live-in-concert/ET00428339"
            className="group relative rounded-lg overflow-hidden h-64"
          >
            <Image
              alt=""
              src={
                "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/efa0f3e8-43fb-4290-a1ad-9c542caf3d82/media-desktop-javed-ali-live-in-concert-0-2025-1-31-t-12-50-22.jpg?format=1000w"
              }
              height={254}
              unoptimized
              width={506}
              className="w-full h-full"
            />
            <div className="bg-[rgba(0,0,0,0.7)] h-full p-5 w-full justify-center items-center absolute top-0 left-0 hidden group-hover:flex">
              <h6 className="font-semibold text-2xl  text-white">
                Javed Ali in Concert
              </h6>
            </div>
          </a>
          <a
            target="_blank"
            href="https://in.bookmyshow.com/events/armaan-live-in-ahmedabad/ET00428270"
            className="group relative rounded-lg overflow-hidden h-64"
          >
            <Image
              alt=""
              src={
                "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/bef87b06-a926-4c78-a0e9-3925641098cd/AMRAN+MALIK.jpg?format=2500w"
              }
              height={254}
              unoptimized
              width={506}
              className="w-full h-full"
            />
            <div className="bg-[rgba(0,0,0,0.7)] h-full p-5 w-full justify-center items-center absolute top-0 left-0 hidden group-hover:flex">
              <h6 className="font-semibold text-2xl  text-white">
                Armaan Malik Live in Ahmedabad
              </h6>
            </div>
          </a>
        </div>
      </FadeContent>
    </div>
  );
};

export default Festival;
