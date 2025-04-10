import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="bg-[#F1FFE0] sm:py-14 py-10">
      <div className="main-container flex  sm:gap-8 gap-5 lg:w-[80%]">
        <div className="flex-1 flex flex-col sm:gap-10 gap-5">
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847733469-ZUCJB9XJMBYPFUY56TKA/20140301_Trade-151_0124-copy.jpg?format=1500w"
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[400px] sm:h-[300px] h-[100px]"
            height={400}
            unoptimized
          />
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847733251-RBMKZJPZSVYWAZLWQ1U8/AroHa_02.jpg?format=1000w"
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[350px] sm:h-[250px] h-[150px]"
            height={400}
            unoptimized
          />
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847732989-Z69Q9QA468G3C0O3CY30/Aro+Ha_0428.jpg?format=1000w"
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[450px] sm:h-[350px] h-[200px]"
            height={400}
            unoptimized
          />
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847731939-IPGT5M4PEUD5P45B5TG4/Aro+Ha_0010.jpg?format=1000w"
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[400px] sm:h-[300px] h-[150px]"
            height={400}
            unoptimized
          />
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847773654-BPUX4PIGN1XNMO6RYA8F/Large%2BJPG-Aro%2BHa_0393.jpg?format=1500w"
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
              "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847733469-ZUCJB9XJMBYPFUY56TKA/20140301_Trade-151_0124-copy.jpg?format=1500w"
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[550px] sm:h-[450px] h-[250px]"
            height={400}
            unoptimized
          />
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847733251-RBMKZJPZSVYWAZLWQ1U8/AroHa_02.jpg?format=1000w"
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[550px] sm:h-[450px] h-[150px]"
            height={400}
            unoptimized
          />
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847732989-Z69Q9QA468G3C0O3CY30/Aro+Ha_0428.jpg?format=1000w"
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[450px] sm:h-[350px] h-[100px]"
            height={400}
            unoptimized
          />
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847731939-IPGT5M4PEUD5P45B5TG4/Aro+Ha_0010.jpg?format=1000w"
            }
            alt=""
            width={400}
            className="w-full object-cover lg:h-[500px] sm:h-[300px] h-[250px]"
            height={400}
            unoptimized
          />
       
        </div>
      </div>
    </section>
  );
};

export default page;
