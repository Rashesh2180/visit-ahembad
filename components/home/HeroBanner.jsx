import React from "react";
import TiltedCard from "../../animations/TiltedCard";
const HeroBanner = ({ heroData }) => {
  return (
    <div className=" sm:py-20 py-10  main-container relative overflow-hidden ">
      {/* <div className="home-bg main-container sm:h-[465px] h-80 md:w-[calc(100%-200px)] p-4 flex justify-center items-center">
        <h3 className="sm:text-7xl text-5xl font-bold text-center max-w-2xl mx-auto">
          {heroData?.title}
        </h3>
      </div> */}
      <div className="sm:h-[465px] h-80">
        <TiltedCard
          imageSrc="https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1a7447ba-1773-4e39-ab58-64dc4b62b550/IMG20230407201258.jpg?format=2500w"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText=""
          containerHeight="100%"
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={12}
          scaleOnHover={1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text max-w-2xl mx-auto absolute top-14 sm:left-24 left-5 sm:text-7xl text-5xl font-semibold">
              {heroData?.title}
            </p>
          }
        />
      </div>
    </div>
  );
};

export default HeroBanner;
