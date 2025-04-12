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

const KidsPlaces = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section className="sm:py-32 py-10">
      <div className="main-container">
        <h6 className="mb-20 text-5xl text-black font-semibold">
          {data?.title}
        </h6>
        {data?.data?.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            ref={ref}
            animate={isInView ? "visible" : "hidden"}
            className="grid xl:gap-12 gap-8  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
          >
            {data?.data?.map((ele) => (
              <motion.div
                className="h-full w-full flex flex-col items-start gap-5"
                key={ele.id}
                variants={cardVariants}

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
                <h3 className="text-black text-start text-3xl font-semibold">
                  {ele.title}
                </h3>
                <p className="text-black text-lg">
                  {ele.desc.length > 120
                    ? `${ele.desc.slice(0, 120)}...`
                    : ele.desc}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={ele.link}
                  className="bg-black text-white text-center text-sm font-semibold mt-auto hover:opacity-75 p-3 cursor-pointer"
                >
                  Learn More
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default KidsPlaces;
