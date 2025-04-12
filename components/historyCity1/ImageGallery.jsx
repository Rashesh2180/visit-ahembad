import Image from "next/image";
import React from "react";
import Stack from "@/animations/Stack";

const images = [
  {
    id: 1,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737900028696-M3Q8BCEXYEAF8K1FEKF9/unsplash-image-RxYnq-q_DGc.png?format=1000w",
  },
  {
    id: 2,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737900070190-WKPEHMDVMAFMUBDBCY4O/unsplash-image-EOXfrHDlL68.jpg?format=1000w",
  },
  {
    id: 3,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737900106583-5PWBY95D3L8XG8U14KCA/unsplash-image-qLvhyVUE0NM.jpg?format=1000w",
  },
  {
    id: 4,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737900089541-FX82K76DKSK7BCR2AAW3/unsplash-image-1E9i7gO5-og.jpg?format=1000w",
  },
];
const ImageGallery = () => {
  return (
    <section className="lg:p-16 sm:p-10 max-sm:py-10 max-sm:px-4 bg-[#5B767B]">
      {/* <div className="flex sm:gap-5 gap-3 max-w-7xl mx-auto">
        <div className="flex sm:gap-5 gap-3 flex-col flex-1">
          <div className="sm:h-[300px] h-40">
            <Image
              src={
                "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737900028696-M3Q8BCEXYEAF8K1FEKF9/unsplash-image-RxYnq-q_DGc.png?format=1000w"
              }
              height={400}
              width={400}
              className=" h-full w-full object-cover"
              unoptimized
              alt=""
            />
          </div>
          <div className="sm:h-[500px] h-48">
            <Image
              src={
                "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737900070190-WKPEHMDVMAFMUBDBCY4O/unsplash-image-EOXfrHDlL68.jpg?format=1000w"
              }
              height={400}
              width={400}
              className=" h-full w-full object-cover"
              unoptimized
              alt=""
            />
          </div>{" "}
        </div>
        <div className="flex sm:gap-5 gap-3 flex-col flex-1">
          <div className="sm:h-[500px] h-48">
            <Image
              src={
                "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737900106583-5PWBY95D3L8XG8U14KCA/unsplash-image-qLvhyVUE0NM.jpg?format=1000w"
              }
              height={400}
              width={400}
              className=" h-full w-full object-cover"
              unoptimized
              alt=""
            />
          </div>{" "}
          <div className="sm:h-[300px] h-40">
            <Image
              src={
                "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737900089541-FX82K76DKSK7BCR2AAW3/unsplash-image-1E9i7gO5-og.jpg?format=1000w"
              }
              height={400}
              width={400}
              className=" h-full w-full object-cover"
              unoptimized
              alt=""
            />
          </div>
        </div>
      </div> */}
      <div className="flex flex-row-reverse items-center main-container max-lg:flex-col gap-10 lg:gap-0">
       <div className="flex-1 max-lg:w-[90%] max-sm:w-full mx-auto flex sm:justify-end">
       <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={{ width: "90%", height: 500 }}
          cardsData={images}
        />
       </div>
        <h2 className="section-title !text-white flex-1">You can Check Gallery by swipe card</h2>
      </div>
    </section>
  );
};

export default ImageGallery;
