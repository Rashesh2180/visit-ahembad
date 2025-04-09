import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "Museums",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/319e736f-bdb0-4a11-9033-c88a62a63288/museum.png?format=300w",
  },
  {
    id: 2,
    title: "Monuments",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/9f4b9231-0b77-48a4-bb33-0a39b0fe7f70/monuments.png?format=300w",
  },  {
    id: 3,
    title: "Theaters",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/862a8df9-941f-47ee-9217-e896eade5a42/theater.png?format=300w",
  },  {
    id: 4,
    title: "Library",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/be410c2e-52ab-471c-8f94-2554c7bd48de/library.png?format=300w",
  },  {
    id: 5,
    title: "Religious places",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/a0826c53-3c37-4b5a-82c5-7926821cd56e/pray.png?format=300w",
  },
  {
    id: 6,
    title: "Stepwells",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/ce3b540b-3f74-410b-9db5-a3defbee92e7/stepwell.png?format=300w",
  },
  {
    id: 7,
    title: "History",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/0a4a86b2-a70c-4f69-944f-ffefb04d4a49/history.png?format=300w",
  },
  {
    id: 8,
    title: "Tours",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1b41ece5-c7b0-4411-9f33-3c1e673b6b77/tours.png?format=300w",
  },
];
const Category = () => {
  return (
    <section className="py-20  bg-[#F1FFE0]">
      <div className="main-container">
        <h5 className="text-black text-2xl font-bold mb-10">
          Explore by Category
        </h5>

        <div className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-10 gap-5">
            {
                data?.length > 0 && (
                    data.map(ele=>(
                        <div key={ele?.id} className="flex flex-col gap-5 items-center text-black">
                            <Image alt={ele?.title} src={ele?.img} height={96} width={96} className="sm:h-24 sm:w-24 h-16 w-16 " unoptimized />
                            <p className="text-center text-xl font-medium">{ele?.title}</p>

                        </div>
                    ))
                ) 
            }
        </div>
      </div>
    </section>
  );
};

export default Category;
