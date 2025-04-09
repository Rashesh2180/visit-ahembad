import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/58a6af63-45b1-489d-94a8-95bbf476c8ea/placetotalk-slide-3.jpg?format=300w",
    title: "Tea Post",
   
  },
  {
    id: 2,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737826940642-1LPEPHB373I0BRE7WQPS/unsplash-image-73L6wSNLpSk.jpg?format=300w",
    title: "Prince Bhajipav",
  },
  {
    id: 3,
    img: "",
    title: "Shreeji Vadapav",
 
  },
  {
    id:4 ,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737827011287-59ZCBH28SSS9LIWSW7FM/unsplash-image-a66sGfOnnqQ.jpg?format=300w",
    title: "La Pinoz",
 
  },
];

const page = () => {
  return (
    <div className="sm:py-20 py-10  bg-[#F1FFE0]">
      <div className="main-container">
        <h2 className="section-title max-w-4xl sm:mb-16 mb-8">
        Pocket Friendly places to eat in the city
        </h2>
        <div className="flex justify-center gap-8 flex-wrap ">
          {data.length > 0 &&
            data.map((ele) => (
              <div
                key={ele.id}
                className="flex flex-col flex-1 gap-5 min-w-[300px] max-w-[400px]"
              >
                <Image
                  src={ele.img || "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"}
                  alt=""
                  className="w-full h-[250px] rounded-lg "
                  height={220}
                  width={220}
                  unoptimized
                />
                <h6 className="text-xl font-semibold text-black">
                  {ele.title}
                </h6>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
