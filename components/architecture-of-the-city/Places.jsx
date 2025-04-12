import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const animationVariants = [
  {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  },
  {
    hidden: { opacity: 0, rotate: -5 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.6 } },
  },
  {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
];

const Places = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div className="sm:py-20 py-10 bg-[#EFEBFA]" ref={ref}>
      <div className="flex flex-wrap justify-center gap-4 main-container">
        {data.length > 0 &&
          data.map((ele, index) => {
            const animation = animationVariants[index % animationVariants.length];

            return (
              <motion.div
                key={ele.id}
                className="w-full sm:w-[calc(33.333%-1rem)] flex flex-col gap-5"
                variants={animation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Image
                  src={ele.img}
                  alt=""
                  className="w-full h-full max-h-[220px] rounded-lg object-cover"
                  height={220}
                  width={220}
                  unoptimized
                />
                <h6 className="text-2xl font-semibold text-black">{ele.title}</h6>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default Places;
