import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = ({ data }) => {
  return (
    <section className="py-20  bg-[#F1FFE0]">
      <div className="main-container">
        <h5 className="section-title mb-10">{data?.title}</h5>

        <div className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-10 gap-5">
          {data?.data?.length > 0 &&
            data?.data?.map((ele) => (
              <Link
                href={ele?.link}
                key={ele?.id}
                className="flex flex-col gap-5 group items-center text-black"
              >
                <div className="">
                  <Image
                    alt={ele?.title}
                    src={ele?.img}
                    height={96}
                    width={96}
                    className="sm:h-24 sm:w-24 h-16 w-16 transition-transform duration-700 group-hover:rotate-[360deg]"
                    unoptimized
                  />
                </div>

                <p className="text-center text-xl font-medium">{ele?.title}</p>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
