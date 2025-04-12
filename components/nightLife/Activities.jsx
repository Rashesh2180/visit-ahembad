import Image from "next/image";
import Link from "next/link";
import React from "react";
import Masonry from "../../animations/Masonry";
const Activities = ({ activitiesdata }) => {
  const data = [
    {
      id: 1,
      image:
        "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738429572549-QSUMUELEYUGZ6A4155Z6/unsplash-image-TSS-1aqoRXE.jpg?format=500w",
      height: 400,
    },
    {
      id: 2,
      image:
        "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738429463425-Y0SUGFEH7R4PJ2WO7X0W/unsplash-image-u-s3EG1QUXw.jpg?format=500w",
      height: 300,
    },
    {
      id: 3,
      image:
        "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738429598282-VYSTYJML0BDG14QBBCLV/unsplash-image-TS2_PvGhGgs.jpg?format=500w",
      height: 300,
    },
    {
      id: 4,
      image:
        "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738429657015-4U5R0HL7DSZMD38B5MP8/unsplash-image-OmaFZNYOy6E.jpg?format=500w",
      height: 300,
    },
    {
      id: 5,
      image:
        "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738429682048-QJ6OADK582EEZJ3WU31D/unsplash-image-w7eaCH6ShR4.jpg?format=500w",
      height: 300,
    },
    {
      id: 6,
      image:
        "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738429730566-1XBOEEFFNFLKKH2CIH7N/unsplash-image-LETdkk7wHQk.jpg?format=500w",
      height: 300,
    },
    {
      id: 7,
      image:
        "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738429763845-Z1LLPJ99K6KYFGHSMVI7/unsplash-image-jvNoSUrQkgU.jpg?format=500w",
      height: 200,
    },
    {
      id: 8,
      image:
        "https://blog.lemontreehotels.com/wp-content/uploads/2018/09/Sabarmati-Riverfront-night-hangout-places-in-ahmedabad.jpg",
      height: 300,
    },
    {
      id: 9,
      image:
        "https://img.etimg.com/thumb/msid-65805045,width-640,height-480,imgsize-349420,resizemode-4/aquatics-gallery.jpg",
      height: 200,
    },
    {
      id: 10,
      image:
        "https://www.treebo.com/blog/wp-content/uploads/2018/02/Rewind-the-Disc.jpg",
      height: 400,
    },
  ];

  return (
    <section className="bg-[#F1FFE0] sm:py-32 py-10">
      <div className="main-container">
        <h6 className="mb-8 section-title">{activitiesdata?.title}</h6>
        {/* {activitiesdata?.nightActivitesData.length > 0 && (
          <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {activitiesdata?.nightActivitesData.map((ele) => (
              <div className="sm:h-60 h-80 group relative" key={ele.id}>
                <Image
                  src={ele.img}
                  alt=""
                  height={160}
                  width={200}
                  unoptimized
                  className="w-full  rounded-lg h-full object-cover"
                />
                {ele.title === "Dinner night outs" ? (
                  <Link
                    href="/restaurants-with-a-view"
                    className="text-black underline py-2 tracking-widest px-3  text-sm bg-white/30 backdrop-blur-md group-hover:block hidden rounded-full absolute top-3 right-3 text-center font-semibold"
                  >
                    {ele.title}
                  </Link>
                ) : (
                  <p className="text-black py-2 px-3 tracking-widest text-sm bg-white/30 backdrop-blur-md group-hover:block hidden rounded-full absolute top-3 right-3 text-center font-semibold">
                    {ele.title}
                  </p>
                )}
              </div>
            ))}
          </div>
        )} */}
        <Masonry data={activitiesdata?.nightActivitesData} />
      </div>
    </section>
  );
};

export default Activities;
