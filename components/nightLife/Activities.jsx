import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    title: "Dinner night outs",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738429572549-QSUMUELEYUGZ6A4155Z6/unsplash-image-TSS-1aqoRXE.jpg?format=500w",
  },
  {
    id: 2,
    title: "Fun parks and Games ",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738429463425-Y0SUGFEH7R4PJ2WO7X0W/unsplash-image-u-s3EG1QUXw.jpg?format=500w",
  },
  {
    id: 3,
    title: "Bowling alleys",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738429598282-VYSTYJML0BDG14QBBCLV/unsplash-image-TS2_PvGhGgs.jpg?format=500w",
  },
  {
    id: 4,
    title: "Escape rooms",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738429657015-4U5R0HL7DSZMD38B5MP8/unsplash-image-OmaFZNYOy6E.jpg?format=500w",
  },
  {
    id: 5,
    title: "Board games night",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738429682048-QJ6OADK582EEZJ3WU31D/unsplash-image-w7eaCH6ShR4.jpg?format=500w",
  },
  {
    id: 6,
    title: "Open mic",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738429730566-1XBOEEFFNFLKKH2CIH7N/unsplash-image-LETdkk7wHQk.jpg?format=500w",
  },
  {
    id: 7,
    title: "Stand Up Comedy",
    img: "https://images.squarespace-cdn.com/content/v1/677acead59bfdf1eac35b1fe/1738429763845-Z1LLPJ99K6KYFGHSMVI7/unsplash-image-jvNoSUrQkgU.jpg?format=500w",
  },
];

const Activities = () => {
  return (
    <section className="bg-[#F1FFE0] sm:py-32 py-10">
      <div className="main-container">
        <h6 className="mb-5 text-3xl text-black font-semibold">
        Popular nights out and activities
        </h6>
        {data.length > 0 && (
          <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {data.map((ele) => (
              <div className="h-full w-full" key={ele.id}>
                <Image
                  src={ele.img}
                  alt=""
                  height={160}
                  width={200}
                  unoptimized
                  className="w-full  mb-5 sm:h-60 h-80"
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
