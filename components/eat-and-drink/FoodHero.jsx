import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const FoodHero = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="sm:py-20 py-10 bg-[#F1FFE0]">
      <div className="main-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title mb-10 sm:mb-20"
        >
          Foodie things to do in Ahmedabad
        </motion.h2>

        {data?.data?.length > 0 && (
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid xl:gap-12 gap-8 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 max-sm:h-[500px] overflow-y-auto"
          >
            {data?.data?.map((ele, index) => (
              <motion.div
                key={ele.id}
                variants={cardVariants}
                className="h-full w-full flex flex-col gap-6 text-black"
              >
                <Image
                  src={
                    ele.img ||
                    "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
                  }
                  alt={ele.title}
                  height={160}
                  width={200}
                  unoptimized
                  className="w-full sm:h-60 h-52 sm:object-cover object-contain"
                />
                <h3 className="text-2xl max-sm:text-center font-semibold">
                  {ele.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FoodHero;
