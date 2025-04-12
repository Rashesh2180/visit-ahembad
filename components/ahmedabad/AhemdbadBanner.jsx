import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AhemdbadBanner = ({ data, generalText }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="ahemdbad-banner-bg h-[300px] sm:h-[400px] py-20 w-full relative overflow-hidden">
      {/* Optional: Add animated overlay or background zoom here */}
      <motion.div
        className="absolute inset-0 bg-black/20 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />

      <div className="h-full main-container relative z-10">
        <motion.div
          className="max-w-2xl h-full flex flex-col justify-center items-start"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            className="sm:text-5xl text-3xl text-start font-bold leading-[1.2] text-white"
            variants={fadeUpVariants}
          >
            {data?.title}
          </motion.p>

          <motion.button
            className="py-4 mt-6 px-8 text-center text-black cursor-pointer bg-purple-50 text-nowrap font-medium hover:opacity-60"
            variants={fadeUpVariants}
          >
            {generalText?.startExploring}...
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AhemdbadBanner;
