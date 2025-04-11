import Image from "next/image";
import React from "react";
import ScrollVelocity from "../../animations/ScrollVelocity ";
import PixelTransition from "../../animations/PixelTransition";
const HeritageCity = ({ heritageData }) => {
  return (
    <div className="main-container pt-5 pb-24">
      <div className="scroll-container mb-2">
        <ScrollVelocity
          texts={[`${heritageData.title}`, `${heritageData.title}`]}
          className="custom-scroll-text sm:mb-8 mb-5 sm:text-5xl text-3xl text-black"
        />
      </div>
      <div className="flex gap-5 max-lg:flex-wrap max-sm:flex-col">
        <Image
          src={
            "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737796811298-225RDYA1QDD2EVKFQKZH/unsplash-image-2I_rhLUqeUw.jpg?format=300w"
          }
          unoptimized
          height={200}
          width={300}
          alt=""
          className="max-sm:w-full max-sm:h-48 rounded-xl max-h-[316px]"
        />
        <div className="sm:max-w-80 w-full h-full">
          <PixelTransition
            firstContent={
              <img
                src="https://i.pinimg.com/736x/cc/68/45/cc684531503c8a03c055dd912423e671.jpg"
                alt="default pixel transition content, a cat!"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  padding: "20px",
                  backgroundColor: "#111",
                }}
              >
                <p
                  style={{
                    fontWeight: 900,
                    fontSize: "2rem",
                    color: "#ffffff",
                  }}
                >
                  {heritageData?.card2}
                </p>
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
        </div>
        <div className="flex-1 bg-[#F8DDDD]  p-4  rounded-xl min-w-[320px] max-md:py-14  flex gap-5 items-center justify-center">
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/54df9ab8-bc58-4b50-a4c1-67a0b0e8f50a/Heart_Shape_PNG_Clipart-3166.png?format=500w"
            }
            alt=""
            unoptimized
            height={113}
            width={125}
            className="max-xl:w-20 max-xl:h-20 max-sm:h-10 max-sm:w-10"
          />
          <span className="lg:text-3xl text-2xl max-w-84 text-black font-semibold">
            {heritageData?.card3}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeritageCity;
