import ImageBanner from "@/components/imagebanner/ImageBanner";
import Well from "@/components/stepwall/Well";
import React from "react";

const page = () => {
  return (
    <div>
      <ImageBanner
        className="!h-[350px]"
        heading="Traditional Stepwells"
        bgImage="https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1739125513656-5AYGYU69WOPP65MOQJ5Y/unsplash-image-45abDJ2lgEk.jpg?format=1500w"
      />
      <Well/>
    </div>
  );
};

export default page;
