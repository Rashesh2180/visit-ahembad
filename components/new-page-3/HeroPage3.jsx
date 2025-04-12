'use client';
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const animationVariants = [
  { x: -50, opacity: 0 },
  { y: 50, opacity: 0 },  
  { x: 50, opacity: 0 },  
];

const HeroPage3 = ({ data }) => {
  return (
    <div className="sm:py-20 py-10 bg-[#EFEBFA]">
      <div className="main-container">
        <h2 className="section-title max-w-4xl sm:mb-16 mb-8">{data?.title}</h2>

        <div className="flex justify-center gap-8 flex-wrap">
          {data?.data?.length > 0 &&
            data?.data?.map((ele, index) => (
              <motion.div
                key={ele.id}
                className="flex flex-col flex-1 gap-5 min-w-[300px] max-w-[400px]"
                initial={animationVariants[index % animationVariants.length]}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={
                    ele.img ||
                    "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
                  }
                  alt={ele.title}
                  className="w-full sm:h-[350px] h-[250px] rounded-lg object-cover"
                  height={220}
                  width={220}
                  unoptimized
                />
                <h6 className="text-xl font-semibold text-black">
                  {ele.title}
                </h6>
                <p className="text-sm text-black">{ele.desc}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeroPage3;
