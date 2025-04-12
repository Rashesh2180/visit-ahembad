import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const DualSection = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="main-container flex justify-between gap-10 items-center sm:py-20 py-8 max-lg:flex-col-reverse"
    >
      {/* Text Section */}
      <motion.div
        className="flex-1"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeFromLeft}
      >
        <h5 className="section-title sm:mb-14 mb-6">{data?.title}</h5>
        <p className="sm:text-lg text-sm text-black mb-4">{data?.subHeading}</p>
        <p className="sm:text-lg text-sm text-black sm:mb-8 mb-5">{data?.subHeading2}</p>
        <ul className="list-disc text-black max-sm:text-sm">
          <li className="ml-10 mb-3">{data?.list1}</li>
          <li className="ml-10 mb-3">{data?.list2}</li>
          <li className="ml-10 mb-3">{data?.list3}</li>
        </ul>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex-1"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeFromRight}
      >
        <Image
          src={data?.img}
          alt=""
          height={500}
          width={600}
          unoptimized
          className="ml-auto max-sm:h-60 object-cover"
        />
      </motion.div>
    </section>
  );
};

export default DualSection;
