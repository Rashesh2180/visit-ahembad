import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const LearningActivites = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section className="bg-[#F1FFE0] sm:py-20 py-10">
      <div className="main-container">
        <h6 className="sm:mb-20 mb-5 sm:text-5xl text-3xl text-black font-semibold">
          {data?.title}
        </h6>
        {data?.data?.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            ref={ref}
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
          >
            {data?.data?.map((ele) => (
              <motion.div
                className="h-full w-full flex flex-col gap-3 items-start"
                key={ele.id}
                variants={cardVariants}
              >
                <Image
                  src={ele.img}
                  alt=""
                  height={160}
                  width={200}
                  unoptimized
                  className="w-full sm:h-60 h-40"
                />
                <p className="text-black  text-start text-base leading-6 font-semibold">
                  {ele.title}
                </p>
                <p className="text-black  text-start mb-3 text-sm font-medium">
                  {ele.desc}
                </p>
                <button className="bg-black  rounded-lg hover:opacity-70 py-3 ml-auto px-5 cursor-pointer">
                  Book Now!
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LearningActivites;
