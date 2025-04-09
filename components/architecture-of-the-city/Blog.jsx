import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="sm:py-20 py-10 bg-black">
      <div className="main-container grid sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
        <div className="relative lg:h-[500px] md:h-[400px] h-[200px]">
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/41b7e2d1-3384-4ef5-89e3-7a05f4e1fb9e/Sanskar+kendra.jpg?format=750w"
            }
            alt=""
            width={500}
            height={500}
            unoptimized
            className="w-full h-full object-cover brightness-90 hover:brightness-100"
          />
          <div className=" absolute sm:p-4 bottom-5 left-5">
            <h6 className="lg:text-2xl md:text-xl text-lg text-white font-semibold mb-2">
              Sanskar Kendra (1954)
            </h6>
            <h5 className="lg:text-2xl md:text-xl text-lg text-white font-semibold italic">
              by Le Corbusier{" "}
            </h5>
          </div>
        </div>
        <div className="relative lg:h-[500px] md:h-[400px] h-[200px]">
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1a52af8a-e850-4ee0-9721-b2282640790d/IIMA+Louis_Kahn_Plaza.jpg?format=750w"
            }
            alt=""
            width={500}
            height={500}
            unoptimized
            className="w-full h-full object-cover brightness-90 hover:brightness-100"
          />
          <div className=" absolute sm:p-4 bottom-5 left-5">
            <h6 className="lg:text-2xl md:text-xl text-lg text-white font-semibold mb-2">
              Indian Institute of Management, Ahmedabad (IIM-A) (1961–1974)
            </h6>
            <h5 className="lg:text-2xl md:text-xl text-lg text-white font-semibold italic">
              by Louis Kahn
            </h5>
          </div>
        </div>
        <div className="relative lg:h-[500px] md:h-[400px] h-[200px]">
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1737905180861-O1U48YRVP8Q6FISTU1Z3/unsplash-image-ZWu7kCw0__o.jpg?format=750w"
            }
            alt=""
            width={500}
            height={500}
            unoptimized
            className="w-full h-full object-cover brightness-90 hover:brightness-100"
          />
          <div className=" absolute sm:p-4 bottom-5 left-5">
            <h6 className="lg:text-2xl md:text-xl text-lg text-white font-semibold mb-2">
              Sardar Vallabhbhai Patel Stadium (1960)
            </h6>
            <h5 className="lg:text-2xl md:text-xl text-lg text-white font-semibold italic">
              by Charles Correa
            </h5>
          </div>
        </div>
        <div className="relative lg:h-[500px] md:h-[400px] h-[200px]">
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/398e5a41-d1ff-4b24-9a7e-279334df8291/CEPT_SBST.jpg?format=750w"
            }
            alt=""
            width={500}
            height={500}
            unoptimized
            className="w-full h-full object-cover brightness-90 hover:brightness-100"
          />
          <div className=" absolute sm:p-4 bottom-5 left-5">
            <h6 className="lg:text-2xl md:text-xl text-lg text-white font-semibold mb-2">
              CEPT University Campus (1962)
            </h6>
            <h5 className="lg:text-2xl md:text-xl text-lg text-white font-semibold italic">
              by B.V. Doshi
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
