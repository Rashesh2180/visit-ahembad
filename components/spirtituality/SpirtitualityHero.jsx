import Image from "next/image";
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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SpirtitualityHero = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="sm:py-20 py-10 bg-[#F1FFE0]">
      <div className="main-container">
        <h2 className="section-title mb-10 sm:mb-20">{data?.title}</h2>

        {data?.data?.length > 0 && (
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid xl:gap-12 gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:h-[500px] overflow-y-auto"
          >
            {data?.data.map((ele) => (
              <motion.div
                key={ele.id}
                variants={cardVariants}
                className="h-full w-full flex flex-col items-center gap-4 text-black"
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
                  className="w-full sm:h-60 h-40 object-cover"
                />
                <h3 className="text-center text-2xl font-semibold">
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

export default SpirtitualityHero;
