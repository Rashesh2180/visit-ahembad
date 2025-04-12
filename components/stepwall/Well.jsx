import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Well = ({ data }) => {
  return (
    <section className="sm:py-20 py-10 bg-[#F1FFE0]">
      <div className="main-container">
        <h5 className="text-center sm:text-2xl text-lg max-w-4xl mx-auto text-black sm:leading-8 sm:mb-20 mb-10">
          {data?.description}
        </h5>

        <div className="flex flex-col gap-14">
          {data?.data?.length > 0 &&
            data?.data?.map((ele, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, amount: 0.2 });
              const isReversed = ele.id === 2;

              return (
                <div
                  ref={ref}
                  key={ele.id}
                  className={`flex max-lg:flex-col xl:gap-20 gap-12 justify-between items-center ${
                    isReversed ? "flex-row-reverse" : ""
                  }`}
                >
                  <motion.div
                    className="flex-1 w-full sm:max-h-[400px] max-h-[200px] h-full"
                    variants={isReversed ? fromRight : fromLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <Image
                      src={ele?.img}
                      unoptimized
                      height={400}
                      width={400}
                      className="object-cover w-full h-full sm:max-h-[400px] max-h-[200px]"
                      alt={ele?.title}
                    />
                  </motion.div>

                  <motion.div
                    className="flex-1 text-black flex flex-col lg:items-start items-center"
                    variants={isReversed ? fromLeft : fromRight}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <h2 className="lg:text-3xl text-2xl font-semibold mb-5">
                      {ele?.title}
                    </h2>
                    <p className="lg:text-lg sm:text-base text-xs max-lg:max-w-96 max-lg:text-center">
                      {ele?.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Well;
