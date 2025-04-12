"use client"
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TextTileArticle = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <div className="sm:py-20 py-10 bg-[#EFEBFA] " ref={ref}>
      <h2 className="section-title main-container sm:mb-16 mb-8">
        {data?.title}
      </h2>
      <div className="main-container flex max-md:flex-col lg:gap-16 gap-8 items-center">
        <motion.div
          className="relative flex-1"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Image
            src={
              "https://houseofmg.com/cdn/shop/files/Textile_Gallery_4.jpg?v=1681378677&width=2400"
            }
            unoptimized
            height={500}
            width={500}
            className="w-full md:h-[500px] h-96 rounded-2xl object-cover"
            alt=""
          />
        </motion.div>
        <motion.div
          className="flex-1 text-black"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="lg:text-3xl text-2xl font-semibold text-black mb-3 ">
            {data?.heading}
          </h3>
          <p className="lg:text-xl text-base font-medium text-black mb-3 ">
            {data?.desc1}
          </p>
          <p className="lg:text-xl text-base font-medium text-black mb-3 ">
            {data?.desc2}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TextTileArticle;
