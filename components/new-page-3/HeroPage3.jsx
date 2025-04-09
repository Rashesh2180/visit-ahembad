import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/0bd60f33-6091-472c-8e2c-2ba7a297b99d/house+of+mg+thali.jpg?format=500w",
    title: "House of MG - Agashiya",
    desc:'Offers a luxurious stay in a century-old mansion adorned with traditional architecture, vintage décor, and modern amenities. Renowned for its authentic Gujarati dining experiences, it beautifully blends cultural charm with contemporary comfort.'
  },
  {
    id: 2,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/376c5da1-1e99-4b1e-b54e-8b53f8279274/rajwadu.jpg?format=500w",
    title: "Rajwadu",
    desc:"A heritage-themed restaurant in Ahmedabad, recreating the charm of a traditional Gujarati village with authentic cuisine, folk music, and cultural performances. Its serene ambiance and handcrafted decor offer a royal yet rustic dining experience."
  },
  {
    id: 3,
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/52bdf4a1-6bb7-4067-a298-5cb7a97938fc/Mill+Owners%E2%80%99+Association+Building+%281954%29.jpg?format=500w",
    title: "Gordhan Thal",
    desc:'Offers an authentic Gujarati thali experience with a lavish spread of traditional delicacies. Known for its warm hospitality and cultural ambience, it provides a true taste of Gujarat culinary heritage.'
  },

];

const HeroPage3 = () => {
  return (
    <div className="sm:py-20 py-10  bg-[#EFEBFA]">
       <div className="main-container">
       <h2 className="section-title max-w-4xl sm:mb-16 mb-8">Gujarati-themed luxuriously unique restaurants in Ahmedabad
        </h2>
      <div className="flex justify-center gap-8 flex-wrap ">
        {data.length > 0 &&
          data.map((ele) => (
            <div
              key={ele.id}
              className="flex flex-col flex-1 gap-5 min-w-[300px] max-w-[400px]"
            >
              <Image
                src={ele.img}
                alt=""
                className="w-full sm:h-[350px] h-[250px] rounded-lg object-cover"
                height={220}
                width={220}
                unoptimized
              />
              <h6 className="text-xl font-semibold text-black">{ele.title}</h6>
              <p className="text-sm text-black">{ele.desc}</p>
            </div>
          ))}
      </div>
       </div>
    </div>
  );
};

export default HeroPage3;
