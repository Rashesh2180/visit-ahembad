import Image from "next/image";
import React from "react";
const data = [
  {
    id: 1,
    title: "Morning Munchies",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737820280765-L6CTEI9FPNT79I3G0CZ8/unsplash-image-RWdMRDLAccs.jpg?format=500w",
    desc:""
  },
  {
    id: 2,
    title: "Brunch Diaries",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737820348196-CZMUZAWQSBKKF1LFQSQ5/unsplash-image-HlNcigvUi4Q.jpg?format=500w",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.",
    link: "https://www.sundarvan.org/",
  },
  {
    id: 3,
    title: "Dinner Delicacies",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737820735829-5CUDI7Y2UJAMC8UWT5PX/unsplash-image-fb0_wj2MZk4.jpg?format=500w",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.",

    link: "",
  },  {
    id: 4,
    title: "Traditional Tadka",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737820490979-5WGYS27O7KFQ48CX1SVN/unsplash-image-mlwXrYYAOms.jpg?format=500w",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.",

    link: "",
  },
];
const FoodHero = () => {
  return (
    <div className="sm:py-20 py-10 bg-[#F1FFE0]">
      <div className="main-container">
        <h2 className="section-title mb-10 sm:mb-20">Foodie things to do in Ahmedabad</h2>
        <div className=" ">
          {data.length > 0 && (
            <div className="grid xl:gap-12 gap-8  lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 max-sm:h-[500px] overflow-y-auto">
              {data.map((ele) => (
                <div
                  className="h-full w-full flex flex-col gap-6 text-black"
                  key={ele.id}
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
                    className="w-full sm:h-60 h-52 sm:object-cover object-contain"
                  />
                  <h3 className=" text-2xl max-sm:text-center  font-semibold">
                    {ele.title}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodHero;
