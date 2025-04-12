import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../button/Button";

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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const OneDayTour = ({ data, generaltext }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="sm:py-32 py-10 bg-black text-white">
      <div className="main-container">
        <motion.h6
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="sm:mb-20 mb-10 sm:text-5xl text-3xl font-semibold text-center"
        >
          {data?.oneDayTour?.title}
        </motion.h6>

        <div className="sm:mb-20 mb-10">
          {data?.oneDayTour?.data?.length > 0 && (
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid xl:gap-28 gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:h-[500px] overflow-y-auto"
            >
              {data?.oneDayTour?.data?.map((ele) => (
                <motion.div
                  key={ele.id}
                  variants={cardVariants}
                  className="h-full w-full flex flex-col items-center gap-5"
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
                  <p className="text-sm text-center">
                    {ele.desc.length > 120
                      ? `${ele.desc.slice(0, 120)}...`
                      : ele.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button
            text={generaltext?.exploreMore}
            className="bg-white mx-auto block capitalize text-black"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OneDayTour;
