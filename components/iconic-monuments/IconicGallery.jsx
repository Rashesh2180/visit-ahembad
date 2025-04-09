import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/81fbaca8-8693-4395-8390-93669907a65d/IMG_20230720_130154.jpg?format=1000w",
    tilte: "title",
    desc: "description",
  },
  {
    id: 2,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/d9ec6f66-016b-49fb-b7bd-664abbe9b6ca/IMG_20241212_094735.jpg?format=1500w",
    tilte: "title",
    desc: "description",
  },
  {
    id: 3,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/8c7c7457-8109-4667-b354-5fdfb86908d6/IMG_20241212_101105.jpg?format=1000w",
    tilte: "title",
    desc: "description",
  },
  {
    id: 4,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/06077507-8b8d-4d8e-8261-2acd84d4e6d2/IMG_20241208_121234.jpg?format=1000w",
    tilte: "title",
    desc: "description",
  },
  {
    id: 5,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/36fc2936-d660-4b12-8bdf-eeb8501fe3ae/IMG_2016.jpg?format=750w",
    tilte: "title",
    desc: "description",
  },
];

const IconicGallery = () => {
  return (
    <section className="bg-[#F1FFE0] sm:py-20 py-10">
      <div className="main-container flex flex-col md:gap-20 gap-10 max-md:h-[600px] overflow-y-auto">
        {data.length > 0 &&
          data.map((ele, ind) => (
            <div
              key={ind}
              className={`flex sm:gap-10 gap-5 max-md:flex-col ${ind % 2 !== 0 ? "flex-row-reverse" : ""}`}
            >
              <Image
                src={ele.img}
                alt={ele.tilte}
                height={500}
                width={500}
                unoptimized
                className="object-cover md:max-h-[500px] max-h-[250px] max-md:w-full flex-1"
              />
              <div className="md:flex-1">
                <h2 className="sm:text-4xl text-2xl font-semibold sm:mb-5 text-black">
                  {ele.tilte}
                </h2>
                <p className="text-black text-sm font-medium ">{ele.desc}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default IconicGallery;
