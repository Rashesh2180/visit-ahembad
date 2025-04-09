import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "Visit Top Attractions",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/e4b89e42-6aea-41f9-b95b-df3a2cac9abd/IMG_20211223_104708%7E2.jpg?format=750w",
    desc: "Ahmedabad, the vibrant heart of Gujarat, is a city that seamlessly blends history, culture, and modernity. From its UNESCO World Heritage City status to its bustling markets and serene riverfront, Ahmedabad offers something for every traveler",
  },
  {
    id: 2,
    title: "Join a Tour",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/bf45fc7d-3c83-48fb-b5c0-1514c3f8f96f/IMG_20241216_113515.jpg?format=750w",
    desc: "Explore Ahmedabad like never before by joining guided tours that reveal the city's rich history, vibrant culture, and hidden gems. Whether you’re a history enthusiast, foodie, or art lover, Ahmedabad offers a variety of curated experiences for every interest:",
  },
  {
    id: 3,
    title: "Find days out of town",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/e388445b-fa32-4cb1-a508-4a68c1202108/IMG_20231112_175851.jpg?format=750w",
    desc: "Looking for a quick getaway from the bustling city of Ahmedabad? The surrounding region offers plenty of options for a refreshing day trip. Here are some must-visit destinations:",
  },
  {
    id: 4,
    title: "Ahmedabad Pass",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/a17da97b-962b-4da5-840e-91047fd1f1ba/IMG_20240708_132616.jpg?format=750w",
    desc: "Make the most of your visit to Ahmedabad with the Ahmedabad Pass, your all-in-one ticket to the city’s top attractions! This convenient pass grants you access to a curated selection of the city’s must-see landmarks, museums, and experiences, ensuring you get the best of Ahmedabad at an incredible value.",
  },
];

const LocalTour = () => {
  return (
    <section className="sm:py-32 py-10">
      <div className="main-container">
        {data.length > 0 && (
          <div className="grid xl:gap-12 gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {data.map((ele) => (
              <div
                className="h-full w-full flex flex-col items-start gap-5"
                key={ele.id}
              >
                <Image
                  src={ele.img}
                  alt={ele.title}
                  height={160}
                  width={200}
                  unoptimized
                  className="w-full sm:h-60 h-80 object-cover"
                />
                <h3 className="text-black text-start text-2xl font-semibold">
                  {ele.title}
                </h3>
                <p className="text-black text-sm">
                  {ele.desc.length > 120
                    ? `${ele.desc.slice(0, 120)}...`
                    : ele.desc}
                </p>
                <button className="bg-black text-white text-center text-sm font-semibold mt-auto hover:opacity-75 p-3 cursor-pointer">
                  Explore
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LocalTour;
