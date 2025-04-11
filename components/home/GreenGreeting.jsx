"use client"
import Link from "next/link";
import React from "react";
import SplitText from "../../animations/SplitText";
import { motion } from "framer-motion";
const GreenGreeting = ({ GreetingData, generalData }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }} 
  >
     <div className="bg-[#F1FFE0] pb-10 pt-16">
      <div className="max-w-4xl mx-auto sm:h-[450px] sm:p-32 p-14 green-bg flex justify-center items-center">
        <div className=" w-full bg-white sm:p-20 p-5">
          {/* <h2 className="text-black sm:text-3xl text-2xl font-semibold text-center mb-5">
            {" "}
          </h2> */}
          <SplitText
            text={GreetingData?.title}
            className="text-black sm:text-3xl text-2xl font-semibold text-center mb-5"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <p className="text-center text-black text-sm mb-3">
            {GreetingData?.subTitle}
          </p>
          <Link
            href="/"
            className="text-center underline text-black text-sm block uppercase"
          >
            {generalData?.readMore}
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
  
  );
};

export default GreenGreeting;
