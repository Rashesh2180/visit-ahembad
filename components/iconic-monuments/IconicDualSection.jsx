import Image from "next/image";
import React from "react";

const IconicDualSection = () => {
  return (
    <div className="sm:py-20 py-10 main-container flex max-sm:flex-col sm:gap-10 gap-5 items-center md:w-[90%]">
      <div className="flex-1 h-[400px] relative">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/d991f020-a6fa-4f80-b62b-690552d38756/BHADRA+FORT?format=1000w"
          unoptimized
          height={400}
          width={400}
          className="h-full w-full max-sm:h-64"
          alt=""
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-black sm:mb-10 mb-5">
          Bhadra Fort (1411)
        </h2>
        <ul className="list-disc text-black">
          <li className="ml-10 text-lg mb-3">
            Built by Sultan Ahmad Shah, the founder of Ahmedabad.
          </li>
          <li className="ml-10 text-lg">
          Houses the <strong>Bhadra Kali Temple </strong> and <strong>Azam Khan Sarai.</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IconicDualSection;
