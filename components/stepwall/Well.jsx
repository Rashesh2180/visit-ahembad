import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1739125166974-HOIOJFW3JVMYG68ZQ6I9/unsplash-image-42yboRjxNdc.jpg?format=1500w",
    title: "ADALAJ STEPWELL",
    desc: "Adalaj Stepwell, located near Ahmedabad in Gujarat, is a magnificent five-story stepwell built in 1498 by Queen Rudabai of the Vaghela dynasty. Designed in the Indo-Islamic architectural style, it features intricate carvings of deities, floral motifs, and mythological scenes. The stepwell served as a water conservation structure and a community space for travelers and villagers. Its unique design allows sunlight to filter in, creating mesmerizing patterns of light and shadow. The stepwell remains an important symbol of Gujarati craftsmanship and heritage.",
  },
  {
    id: 2,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/9531ea3f-e1c6-4bf4-b80f-b390117873e7/IMG_20241220_120626.jpg?format=1000w",
    title: "BAI HARIR STEPWELL",
    desc: "Bai Harir Stepwell, also known as Dada Harir Vav, is a magnificent five-story stepwell located in Ahmedabad, Gujarat. Built-in 1499 during the reign of Mahmud Begada, it was commissioned by Bai Harir Sultani, a noblewoman from the royal court. The stepwell showcases exquisite Solanki-style architecture with intricate geometric patterns, floral motifs, and Quranic inscriptions. It served as a water conservation structure and a resting place for travelers. The interplay of light and shadow within its deep corridors adds to its architectural beauty, making it a significant heritage site in Ahmedabad.",
  },
];
const Well = () => {
  return (
    <section className="sm:py-20 py-10 bg-[#F1FFE0]">
      <div className="main-container">
        <h5 className="text-center sm:text-2xl text-lg max-w-4xl mx-auto text-black sm:leading-8 sm:mb-20 mb-10">
          A <strong>stepwell</strong> (also known as{" "}
          <strong>baoli, vav, bawdi, or pushkarni</strong> ) is a unique water
          management system that has been historically used in India, especially
          in arid and semi-arid regions. These structures are architecturally
          significant and serve both functional and social purposes.
        </h5>

        <div className="flex flex-col gap-14">
          {data?.length > 0 &&
            data?.map((ele) => (
              <div
                className={`flex max-lg:flex-col xl:gap-20 gap-12 justify-between items-center ${
                  ele.id === 2 && "flex-row-reverse"
                }`}
              >
                <Image
                  src={ele?.img}
                  unoptimized
                  height={400}
                  width={400}
                  className="object-cover flex-1 sm:max-h-[400px] max-h-[200px] h-full"
                  alt={ele?.title}
                />
                <div className="flex-1 text-black flex flex-col lg:items-start items-center">
                  <h2 className="lg:text-3xl text-2xl font-semibold mb-5">
                    {ele?.title}
                  </h2>
                  <p className=" lg:text-lg sm:text-base text-xs max-lg:max-w-96 max-lg:text-center">
                    {ele?.desc}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Well;
