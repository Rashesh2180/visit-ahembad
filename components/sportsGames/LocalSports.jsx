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
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const LocalSports = ({ localSportsdata }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="sm:py-32 py-10" ref={ref}>
      <div className="main-container">
        <h6 className="mb-14 text-5xl text-black font-semibold">
          {localSportsdata?.title}
        </h6>

        {localSportsdata?.data?.length > 0 && (
          <motion.div
            className="grid xl:gap-12 gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {localSportsdata?.data?.map((ele) => (
              <motion.div
                className="h-full w-full flex flex-col items-start gap-5"
                key={ele.id}
                variants={cardVariants}
              >
                <Image
                  src={ele.img}
                  alt={ele.title}
                  height={160}
                  width={200}
                  unoptimized
                  className="w-full sm:h-60 h-80 object-cover rounded-lg"
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
                  href={ele.link}
                  target="_blank"
                  className="bg-black rounded-lg ml-auto text-white text-center text-sm font-semibold mt-auto hover:opacity-75 p-3 cursor-pointer"
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

export default LocalSports;
