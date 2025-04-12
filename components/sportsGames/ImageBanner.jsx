
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const ImageBanner = ({ sportsData }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="sports-bg h-[470px] py-20 w-full">
      <div className="h-full main-container">
        <div className="banner-content max-w-5xl h-full flex flex-col justify-center" ref={ref}>
          <motion.p
            className="text-5xl text-start leading-[1.2] text-white"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {sportsData?.title}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
