import Image from "next/image";
import Link from "next/link";
import React from "react";

const Festival = () => {
  return (
    <div className="main-container md:py-32 py-20">
      <h6 className="font-semibold text-3xl mb-1 text-black">
        Music & Entertainment
      </h6>
      <div className="grid gap-5 sm:grid-cols-3 grid-cols-1">
        <a target="_blank" href="https://allevents.in/ahmedabad/samraga-music-festival/80002133531197?aff=u1gjbz&ref=featured-eventlist" className="relative">
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/42fa3d74-4ab7-4e08-aa5d-55bf65bc90dc/SAMRAGA+Music+Festival.jpg?format=1500w"
            }
            height={254}
            unoptimized
            alt=""
            width={506}
            className="w-full mb-3"
          />
          <h6 className="font-semibold text-xl  text-black">
            SAMARAGA:Music Festival
          </h6>
        </a>
        <a target="_blank" href="https://in.bookmyshow.com/events/javed-ali-live-in-concert/ET00428339"
         className="relative">
          <Image
          alt=""
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/efa0f3e8-43fb-4290-a1ad-9c542caf3d82/media-desktop-javed-ali-live-in-concert-0-2025-1-31-t-12-50-22.jpg?format=1000w"
            }
            height={254}
            unoptimized
            width={506}
            className="w-full mb-3"
          />
          <h6 className="font-semibold text-xl  text-black">
            Javed Ali in Concert
          </h6>
        </a>
        <a target="_blank" href="https://in.bookmyshow.com/events/armaan-live-in-ahmedabad/ET00428270" className="relative">
          <Image
          alt=""
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/bef87b06-a926-4c78-a0e9-3925641098cd/AMRAN+MALIK.jpg?format=2500w"
            }
            height={254}
            unoptimized
            width={506}
            className="w-full mb-3"
          />
          <h6 className="font-semibold text-xl  text-black">
            Armaan Malik Live in Ahmedabad
          </h6>
        </a>
      </div>
    </div>
  );
};

export default Festival;
