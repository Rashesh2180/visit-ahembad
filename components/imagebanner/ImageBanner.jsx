"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const subheadingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.4, ease: 'easeOut' }
  }
};

const ImageBanner = ({ className, bgImage, heading, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      className={`relative ${className} sm:h-[470px] h-[300px] w-full bg-cover bg-no-repeat`}
      style={{ backgroundImage: `url(${bgImage})` }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-0"></div>

      <div className="relative z-10 main-container h-full flex flex-col justify-center text-white p-5">
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="sm:text-5xl text-3xl text-start leading-[1.2] font-semibold"
        >
          {heading}
        </motion.h1>

        {subheading && (
          <motion.p
            variants={subheadingVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-lg mt-4"
          >
            {subheading}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default ImageBanner;
