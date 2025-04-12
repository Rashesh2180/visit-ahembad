import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const animationVariants = [
  {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  },
  {
    hidden: { opacity: 0, rotate: -5 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.6 } },
  },
  {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
];

const Blog = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="sm:py-20 py-10 bg-black" ref={ref}>
      <div className="main-container grid sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
        {data?.length > 0 &&
          data.map((ele, ind) => {
            const animation = animationVariants[ind % animationVariants.length];

            return (
              <motion.div
                key={ind}
                className="relative lg:h-[500px] md:h-[400px] h-[200px]"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={animation}
              >
                <Image
                  src={ele?.img}
                  alt=""
                  width={500}
                  height={500}
                  unoptimized
                  className="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-300"
                />
                <div className="absolute sm:p-4 bottom-5 left-5">
                  <h6 className="lg:text-2xl md:text-xl text-lg text-white font-semibold mb-2">
                    {ele?.title}
                  </h6>
                  <h5 className="lg:text-2xl md:text-xl text-lg text-white font-semibold italic">
                    {ele?.subTitle}
                  </h5>
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
