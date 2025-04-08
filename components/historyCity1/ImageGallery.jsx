import Image from "next/image";
import React from "react";

const ImageGallery = () => {
  return (
    <section className="p-5">
      <div className="grid grid-cols-2 grid-rows-4 gap-5 main-container">
        <div className="max-h-[350px]">
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737900028696-M3Q8BCEXYEAF8K1FEKF9/unsplash-image-RxYnq-q_DGc.png?format=1000w"
            }
            height={400}
            width={400}
            className=" h-full w-full"
            unoptimized
            alt=""
          />
        </div>
        <div className="row-span-2">
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737900070190-WKPEHMDVMAFMUBDBCY4O/unsplash-image-EOXfrHDlL68.jpg?format=1000w"
            }
            height={400}
            width={400}
            className=" h-full w-full"
            unoptimized
            alt=""
          />
        </div>{" "}
        <div className=" row-span-3">

          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737900106583-5PWBY95D3L8XG8U14KCA/unsplash-image-qLvhyVUE0NM.jpg?format=1000w"
            }
            height={400}
            width={400}
            className=" h-full w-full"
            unoptimized
            alt=""
          />
        </div>{" "}
        <div className="row-span-2">

          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737900089541-FX82K76DKSK7BCR2AAW3/unsplash-image-1E9i7gO5-og.jpg?format=1000w"
            }
            height={400}
            width={400}
            className=" h-full w-full"
            unoptimized
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
