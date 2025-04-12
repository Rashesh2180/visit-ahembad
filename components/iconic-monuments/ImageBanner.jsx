import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ImageBanner = ({ title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="iconic-bg bg-cover bg-no-repeat bg-bottom sm:h-[500px] h-80 p-5 flex justify-center items-center relative">
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <motion.h5
        ref={ref}
        variants={textVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="xl:text-8xl md:text-7xl text-5xl text-center font-bold text-white relative z-10"
      >
        {title}
      </motion.h5>
    </div>
  );
};

export default ImageBanner;
