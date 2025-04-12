'use client';
import Image from "next/image";
import React from "react";
import jsonData from "../../public/assets/text/en.json";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const page = () => {
  const data = jsonData?.litreature;

  return (
    <section className="">
      <div className="max-w-[90.625rem] lg:pl-4 max-lg:px-4 mx-auto flex max-lg:flex-col-reverse items-center lg:gap-20 sm:gap-10 gap-5">
        <motion.div
          className="flex-1 p-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="xl:text-4xl text-3xl text-black font-semibold xl:mb-6 mb-3">
            {data?.hero?.title}
          </h4>
          <p className="xl:text-base text-sm font-medium text-black">
            {data?.hero?.subTitle}
          </p>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src={data?.hero?.img}
            unoptimized
            height={600}
            width={500}
            className="object-cover w-full max-lg:h-96 max-sm:h-60"
            alt=""
          />
        </motion.div>
      </div>

      <div className="py-24 bg-[#F1FFE0]">
        <div className="main-container">
          {data?.data?.length > 0 && (
            <div className="grid xl:gap-12 gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              {data?.data?.map((ele, index) => (
                <motion.div
                  key={ele.id}
                  className="h-full w-full flex flex-col items-start gap-5"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={
                      ele.img ||
                      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
                    }
                    alt={ele.title}
                    height={160}
                    width={200}
                    unoptimized
                    className="w-full h-60 object-cover"
                  />
                  <h3 className="text-black text-start text-2xl font-semibold">
                    {ele.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
