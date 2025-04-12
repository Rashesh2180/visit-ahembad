"use client"
import Image from "next/image";
import React, { useRef } from "react";
import Button from "../button/Button";
import { motion, useInView } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CuratedHero = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-[#F1FFE0]">
      <div className="main-container">
        <h2 className="section-title sm:mb-20 mb-10">{data?.title}</h2>

        <div className="flex flex-col gap-14" ref={ref}>
          {data?.data?.length > 0 &&
            data?.data?.map((ele) => {
              const isReversed = ele.id === 2;

              return (
                <div
                  key={ele.id}
                  className={`flex max-lg:flex-col xl:gap-20 gap-12 justify-between items-center ${
                    isReversed ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Section */}
                  <motion.div
                    className="flex-1"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={isReversed ? fadeRight : fadeLeft}
                  >
                    <Image
                      src={ele?.img}
                      unoptimized
                      height={400}
                      width={400}
                      className="object-cover w-full h-auto"
                      alt={ele?.title}
                    />
                  </motion.div>

                  {/* Text Section */}
                  <motion.div
                    className="flex-1 text-black flex flex-col lg:items-start items-center"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={isReversed ? fadeLeft : fadeRight}
                  >
                    <h2 className="lg:text-3xl text-2xl font-semibold mb-5">
                      {ele?.title}
                    </h2>
                    <p className="mb-10 lg:text-xl text-base max-lg:max-w-96 max-lg:text-center">
                      {ele?.desc}
                    </p>
                    <Button text="Make it" className="text-white" />
                  </motion.div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default CuratedHero;
