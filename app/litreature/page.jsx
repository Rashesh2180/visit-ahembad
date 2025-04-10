import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "arthshila",
    img: "",
  },
  {
    id: 2,
    title: "Ahmedabad Management Association",
    img: "",
  },
];
const page = () => {
  return (
    <section className="">
      <div className="max-w-[90.625rem] lg:pl-4 max-lg:px-4 mx-auto flex max-lg:flex-col-reverse items-center lg:gap-20 sm:gap-10 gap-5">
        <div className="flex-1 p-4">
          <h4 className="xl:text-4xl text-3xl text-black font-semibold xl:mb-6 mb-3">
            Litreature of the city
          </h4>
          <p className="xl:text-base text-sm font-medium text-black">
            Ahmedabad, a city with a rich cultural and historical legacy, has
            been a significant hub for literature in Gujarat. From the medieval
            era, when Jain scholars and poets composed intricate manuscripts, to
            the modern literary movements that shaped Gujarati literature, the
            city has nurtured generations of writers, poets, and intellectuals.
            Renowned literary figures like Mahatma Gandhi, Umashankar Joshi, and
            Pannalal Patel have contributed to Ahmedabad’s literary heritage.
            The city's libraries, literary festivals, and publishing houses
            continue to uphold this legacy, making Ahmedabad a vibrant center
            for literary exploration and storytelling.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738129904958-MACTDO4MA8TKUZUQ7C48/unsplash-image-eeSdJfLfx1A.jpg?format=1500w"
            }
            unoptimized
            height={600}
            width={500}
            className="object-cover w-full max-lg:h-96 max-sm:h-60"
            alt=""
          />
        </div>
      </div>
      <div className="py-24 bg-[#F1FFE0]">
        <div className="main-container">
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
                    className="w-full h-60 object-cover"
                  />
                  <h3 className="text-black text-start text-2xl font-semibold">
                    {ele.title}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
