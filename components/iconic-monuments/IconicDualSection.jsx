import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const IconicDualSection = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="sm:py-20 py-10 main-container flex max-sm:flex-col sm:gap-10 gap-5 items-center md:w-[90%]"
    >
      <motion.div
        className="flex-1 h-[400px] relative"
        variants={fromLeft}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Image
          src={data?.img}
          unoptimized
          height={400}
          width={400}
          className="h-full w-full max-sm:h-64 object-cover"
          alt=""
        />
      </motion.div>

      <motion.div
        className="flex-1"
        variants={fromRight}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-2xl font-semibold text-black sm:mb-10 mb-5">
          {data?.title}
        </h2>
        <ul className="list-disc text-black">
          <li className="ml-10 text-lg mb-3">{data?.list1}</li>
          <li className="ml-10 text-lg">{data?.list2}</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default IconicDualSection;
