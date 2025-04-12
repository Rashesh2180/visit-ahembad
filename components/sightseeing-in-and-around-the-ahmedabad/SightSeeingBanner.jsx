"use client"
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeUpDelayed = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
  },
};

const SightSeeingBanner = ({ data, generaltext }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="relative bg-center bg-cover bg-no-repeat h-[300px] sm:h-[400px] py-20 w-full sight-seeing-banner-bg">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] z-10"></div>

      <div className="h-full main-container relative z-20">
        <motion.div
          className="max-w-2xl h-full flex flex-col justify-center items-start"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            variants={fadeUp}
            className="sm:text-5xl text-3xl text-start font-bold leading-[1.2] text-white"
          >
            {data?.title}
          </motion.p>

          <motion.button
            variants={fadeUpDelayed}
            className="py-4 mt-6 px-8 text-center text-black cursor-pointer bg-purple-50 text-nowrap font-medium hover:opacity-60"
          >
            {generaltext?.explore}!
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default SightSeeingBanner;
