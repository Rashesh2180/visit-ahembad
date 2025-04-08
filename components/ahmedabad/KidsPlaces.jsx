import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    title: "Explore the Science City!",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/ddf2fd82-422f-4288-97eb-27af03a8e28f/Planet_Earth_at_Science_City_Ahmedabad.jpeg?format=500w",
    desc: "Embark on an exciting journey of discovery at Science City, where science meets fun and innovation! Located in the vibrant city of Ahmedabad, Science City offers a perfect blend of education and entertainment for all ages. Dive into the wonders of science through state-of-the-art exhibits, interactive displays, and engaging activities.",
    link: "https://sciencecity.gujarat.gov.in/shop/category/entry-parking-1",
  },
  {
    id: 2,
    title: "Sundarvan - A Nature Discovery Centre",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/eb9b1b9e-b5e8-48dd-b4a7-31450685152d/Sundarvan_-_A_Nature_Discovery_Center_Ahmedabad.jpg?format=500w",
    desc: "Escape into a serene green oasis at Sundarvan, Ahmedabad’s very own Nature Discovery Centre! Nestled in the heart of the city, this compact yet captivating space is a haven for nature enthusiasts and families seeking a peaceful retreat from the urban hustle.",
    link: "https://www.sundarvan.org/",
  },
  {
    id: 3,
    title: "Sabarmati Riverfront",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737815037579-6PHHH65QF1MBWCUPMS1E/unsplash-image-YiyBsUQynIA.jpg?format=750w",
    desc: "PThe Sabarmati Riverfront offers a range of exciting activities for children, blending fun and learning. Kids can enjoy cycling, skating, and playing in well-equipped parks with swings and slides. Splash zones and interactive fountains provide water fun on warm days, while open green spaces are perfect for picnics and family outings. Regular workshops, storytelling sessions, and art activities nurture creativity and curiosity. It’s a vibrant destination for outdoor adventure and quality family time!",
    link: "",
  },
  {
    id: 4,
    title: "Auto World Vintage Car Museum",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/52a28aec-dfa2-4efb-be7d-e32c522c9de6/IMG_20240123_135152.jpg?format=500w",
    desc: "Ahmedabad's treasure trove of vintage and rare automobiles features an exquisite collection of cars, motorcycles, and carts from a bygone era—think Rolls-Royces, Bentleys, Cadillacs, and more—this museum showcases the golden age of automobile craftsmanship. Wander through beautifully curated exhibits and relive the luxury, innovation, and grandeur that defined the automotive world over the decades",
    link: "",
  },
  {
    id: 5,
    title: "Sabarmati Ashram",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737817279169-3FR7IGXBFDBL88B5QMDK/unsplash-image-F2Lvk8rxvjc.jpg?format=750w",
    desc: "The legacy of Mahatma Gandhi at Sabarmati Ashram is a serene oasis on the banks of the Sabarmati River in Ahmedabad. Once the epicenter of India's struggle for independence, this historic site served as Gandhi’s humble home and the birthplace of transformative movements like the Dandi March. Walk through its tranquil grounds, explore personal artifacts, letters, and photographs, and feel the powerful simplicity of a life devoted to truth and nonviolence.",
    link: "",
  },
  {
    id: 6,
    title: "Dr. Vikram Sarabhai Space Museum",
    img: "",
    desc: "Located at the Space Applications Centre in Ahmedabad, is a tribute to India’s Father of the Space Program. This interactive museum showcases India’s advancements in space technology through satellite models, space applications, and captivating exhibits. Visitors can explore the history of ISRO, witness rocket prototypes, and even experience space science through engaging audio-visual presentations, making it a must-visit for science enthusiasts and space lovers.",
    link: "",
  },
];

const KidsPlaces = () => {
  return (
    <section className="sm:py-32 py-10">
      <div className="main-container">
        <h6 className="mb-20 text-5xl text-black font-semibold">
          Ahmedabad for Kids
        </h6>
        {data.length > 0 && (
          <div className="grid xl:gap-12 gap-8  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {data.map((ele) => (
              <div
                className="h-full w-full flex flex-col items-start gap-5"
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
                <h3 className="text-black text-start text-3xl font-semibold">
                  {ele.title}
                </h3>
                <p className="text-black text-lg">
                  {ele.desc.length > 120
                    ? `${ele.desc.slice(0, 120)}...`
                    : ele.desc}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={ele.link}
                  className="bg-black text-white text-center text-sm font-semibold mt-auto hover:opacity-75 p-3 cursor-pointer"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default KidsPlaces;
