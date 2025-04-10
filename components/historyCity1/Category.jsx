import Image from "next/image";
import React from "react";


const Category = ({data}) => {
  return (
    <section className="py-20  bg-[#F1FFE0]">
      <div className="main-container">
        <h5 className="section-title mb-10">
          {data?.title}
        </h5>

        <div className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-10 gap-5">
            {
                data?.data?.length > 0 && (
                    data?.data?.map(ele=>(
                        <div key={ele?.id} className="flex flex-col gap-5 items-center text-black">
                            <Image alt={ele?.title} src={ele?.img} height={96} width={96} className="sm:h-24 sm:w-24 h-16 w-16 " unoptimized />
                            <p className="text-center text-xl font-medium">{ele?.title}</p>

                        </div>
                    ))
                ) 
            }
        </div>
      </div>
    </section>
  );
};

export default Category;
