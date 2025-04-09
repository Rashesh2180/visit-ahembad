import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "Luxurious Dining",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/c7be5d49-77ff-4ca6-ab73-efef9c42aac5/restaurant.png?format=2500w",
  },
  {
    id: 2,
    title: "Cafe Hopping",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/aa69f3e5-9791-4b7b-a367-7acfb2960a1a/menu.png?format=2500w",
  },
  {
    id: 3,
    title: "Street Food",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/5c1dac81-87e9-4975-a8cd-7ac36e7fe77f/food-stall.png?format=2500w",
  },
  {
    id: 4,
    title: "Local Cusine",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/b5a5f857-7f91-4573-9323-f288857466d1/bibimbap.png?format=2500w",
  },
  {
    id: 5,
    title: "Midnight Munchings",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/e590aa9e-efd3-4871-b9da-8c9e725aef03/cutlery.png?format=2500w",
  },
  {
    id: 6,
    title: "Vegan Specials",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/06e55b9d-844d-4fad-bb5d-5baf20ced3ec/diet.png?format=2500w",
  },
  {
    id: 7,
    title: "Non - Veg Specials",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/06e55b9d-844d-4fad-bb5d-5baf20ced3ec/diet.png?format=2500w",
  },
];

const FoodCategory = () => {
  return (
    <section className="sm:pt-20 pt-10 bg-[#8B0F0F]">
      <div className="main-container sm:pb-20 pb-10 wave-container">
        <h5 className="!text-white section-title mb-10">Explore by Category</h5>

        <div className="grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-10 gap-5">
          {data?.length > 0 &&
            data.map((ele) => (
              <div
                key={ele?.id}
                className="flex flex-col gap-5 items-center text-black"
              >
                <Image
                  alt={ele?.title}
                  src={ele?.img}
                  height={96}
                  width={96}
                  className="sm:h-24 sm:w-24 h-16 w-16 "
                  unoptimized
                />
                <p className="text-center text-xl text-white font-medium">
                  {ele?.title}
                </p>
              </div>
            ))}
        </div>
      </div>

      <div className="sm:h-[600px] h-[350px] w-full bg-[url('https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738097626146-0NTIO9HKMXD11UXA0ZM6/unsplash-image-NPrWYa69Mz0.jpg?format=2500w')] bg-cover bg-center"></div>
    </section>
  );
};

export default FoodCategory;
