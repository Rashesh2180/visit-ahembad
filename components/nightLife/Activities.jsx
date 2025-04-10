import Image from "next/image";
import Link from "next/link";
import React from "react";



const Activities = ({activitiesdata}) => {
  return (
    <section className="bg-[#F1FFE0] sm:py-32 py-10">
      <div className="main-container">
        <h6 className="mb-8 section-title">
        {activitiesdata?.title}
        </h6>
        {activitiesdata?.nightActivitesData.length > 0 && (
          <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {activitiesdata?.nightActivitesData.map((ele) => (
              <div className="h-full w-full" key={ele.id}>
                <Image
                  src={ele.img}
                  alt=""
                  height={160}
                  width={200}
                  unoptimized
                  className="w-full  mb-5 sm:h-60 h-80 object-cover"
                />
                  {ele.title === "Dinner night outs" ? (
                    <Link
                      href="/restaurants-with-a-view"
                      className="text-black underline p-2  text-center font-semibold"
                    >
                      {ele.title}
                    </Link>
                  ) : (
                    <p className="text-black  text-center p-2 font-semibold">
                      {ele.title}
                    </p>
                  )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Activities;
