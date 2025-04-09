import Image from "next/image";
import React from "react";

const DualSection = () => {
  return (
    <section className="main-container flex justify-between gap-10 items-center sm:py-20 py-8 max-lg:flex-col-reverse">
      <div className="flex-1">
        <h5 className="section-title sm:mb-14 mb-6">
          Architecture of the city
        </h5>
        <p className="sm:text-lg text-sm text-black mb-4">
          Ahmedabad, the first city in India to be inscribed as a UNESCO World
          Heritage City in 2017, boasts a rich architectural history that
          reflects the cultural, religious, and social fabric of the city. Its
          architectural heritage spans centuries, showcasing a blend of Hindu,
          Jain, Islamic, and colonial influences.
        </p>
        <p className="sm:text-lg text-sm text-black sm:mb-8 mb-5">
          In 2017, Ahmedabad became the first Indian city to receive UNESCO
          World Heritage City status. This recognition highlights its unique
          architectural fabric, including:
        </p>
        <ul className="list-disc text-black max-sm:text-sm">
          <li className="ml-10 mb-3">600+ pols with historic wooden houses.</li>
          <li className="ml-10 mb-3">
            20+ protected monuments showcasing Indo-Islamic and modernist
            architecture.
          </li>
          <li className="ml-10 mb-3">
            Its vibrant living heritage, with communities actively engaging in
            preserving their built and intangible traditions.
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Image
          src={
            "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/4529dbae-0687-4b3b-82e0-f65468f0d294/unsplash-image-i01OOxtRwZM.jpg?format=2500w"
          }
          alt=""
          height={500}
          width={600}
          unoptimized
          className="ml-auto max-sm:h-60 object-cover"
        />
      </div>
    </section>
  );
};

export default DualSection;
