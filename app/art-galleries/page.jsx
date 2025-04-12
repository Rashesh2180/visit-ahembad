"use client"
import React from "react";
import RollingGallery from '@/animations/RollingGallery'
const page = () => {
  return (
    <section className="bg-[#F1FFE0] sm:py-14 py-10">
      {/* <div className="main-container flex  sm:gap-8 gap-5 lg:w-[80%]">
        <div className="flex-1 flex flex-col sm:gap-10 gap-5">
          <Image
            src={
              ""
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[400px] sm:h-[300px] h-[100px]"
            height={400}
            unoptimized
          />
          <Image
            src={
              ""
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[350px] sm:h-[250px] h-[150px]"
            height={400}
            unoptimized
          />
          <Image
            src={
              ""
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[450px] sm:h-[350px] h-[200px]"
            height={400}
            unoptimized
          />
          <Image
            src={
              ""
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[400px] sm:h-[300px] h-[150px]"
            height={400}
            unoptimized
          />
          <Image
            src={
              ""
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[400px] sm:h-[300px] h-[100px]"
            height={400}
            unoptimized
          />
        </div>
        <div className="flex-1 flex flex-col sm:gap-10 gap-5">
          <Image
            src={
              ""
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[550px] sm:h-[450px] h-[250px]"
            height={400}
            unoptimized
          />
          <Image
            src={
              ""
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[550px] sm:h-[450px] h-[150px]"
            height={400}
            unoptimized
          />
          <Image
            src={
              ""
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[450px] sm:h-[350px] h-[100px]"
            height={400}
            unoptimized
          />
          <Image
            src={
              ""
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[500px] sm:h-[300px] h-[250px]"
            height={400}
            unoptimized
          />
       
        </div>
      </div> */}
      <div className="main-container">
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </section>
  );
};

export default page;
