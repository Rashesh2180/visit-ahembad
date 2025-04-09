import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button/Button";

const data = [
  {
    id: 1,
    title: "Learning Block Printing",
    img: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1618497259178-6XJGK9GR6YAVBQL5L519/20140301_Trade-151_012-2.jpg?format=750w",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.",
    link: "https://sciencecity.gujarat.gov.in/shop/category/entry-parking-1",
  },
  {
    id: 2,
    title: "Hands-on Pottery",
    img: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1607694583486-2PQT0LQ193RL7MCB6DX4/20140228_Trade+151_0046.jpg?format=750w",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.",
    link: "https://www.sundarvan.org/",
  },
  {
    id: 3,
    title: "Learning the wood work",
    img: "https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1607694644871-IC85FNH781UNZSZEGHDR/Aro+Ha_0428.jpg?format=750w",
    desc: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.",

    link: "",
  },
  {
    id: 4,
    title: "Mata ni Pachedi",
    img: "",
    desc: "Description goes here",
    link: "",
  },
  {
    id: 5,
    title: "Warli Painting Workshop",
    img: "",
    desc: "Description goes here",
    link: "",
  },
  {
    id: 6,
    title: "Terracotta workshop",
    img: "",
    desc: "Description goes here",
    link: "",
  },
  {
    id: 7,
    title: "Gouache Painting Workshop",
    img: "",
    desc: "Description goes here",
    link: "",
  },
  {
    id: 8,
    title: "Cloth dying",
    img: "",
    desc: "Description goes here",
    link: "",
  },
  {
    id: 9,
    title: "Mehndi art",
    img: "",
    desc: "Description goes here",
    link: "",
  },
];

const MakeIt = () => {
  return (
    <section className="sm:py-32 py-10 bg-black text-white">
      <div className="main-container">
        <h6 className="mb-20 text-5xl font-semibold">Make it stand out.</h6>
     <div className="sm:mb-20 mb-10 ">
     {data.length > 0 && (
          <div className="grid xl:gap-12 gap-8  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:h-[500px] overflow-y-auto">
            {data.map((ele) => (
              <div
                className="h-full w-full flex flex-col items-center gap-4"
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
                  className="w-full sm:h-60 h-40 object-cover"
                />
                <h3 className=" text-center text-2xl  font-semibold">
                  {ele.title}
                </h3>
                <p className=" text-sm text-center">
                  {ele.desc.length > 120
                    ? `${ele.desc.slice(0, 120)}...`
                    : ele.desc}
                </p>
              </div>
            ))}
          </div>
        )}
     </div>
     <Button text="Make it" className="bg-white mx-auto block text-black"/>
      </div>
    </section>
  );
};

export default MakeIt;
