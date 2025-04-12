import React from "react";
import GradientText from "@/animations/GradientText";
const Hero = ({ data }) => {
  return (
    <div className="max-w-4xl px-4 mx-auto">
      <GradientText
        colors={["black", "red", "blue", "yellow"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class sm:text-2xl text-sm font-semibold text-center sm:py-20 py-10"
      >
        {data?.title}
      </GradientText>
    </div>
  );
};

export default Hero;
