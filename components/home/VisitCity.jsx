import React from "react";

const VisitCity = () => {
  return (
    <section className="py-10 bg-[#F1FFE0] ">
      <div className="shape-bg max-w-4xl mx-auto p-10 h-full w-full ">
        <div className="grid grid-cols-2">
          <div className="max-w-60 flex flex-col gap-10">
            <strong className="text-3xl">
              Visiting Ahmedabad for the first time?
            </strong>
            <strong className="text-xs pt-5 border-t border-white">
              Discover your ultimate guide to Ahmedabad... from the best
              activities in the city to top restaurants, heritage sites, hotels,
              theatre shows, musicals, attractions and more!
            </strong>
          </div>
          <div className="flex flex-col gap-10 items-start">
            <p className="text-xs max-w-52 ">
              If you're visiting Ahmedabad for the first time, here's a helpful
              guide to make your first trip safe, easy and, most of all, fun!
              Navigate Ahmedabad with ease by following the latest traveller
              information and discovering how to get around the city by local
              bus, premium bus, metro, train, shuttles or air, with Ahmedabad's
              accessible transport network.
            </p>
            <button className="px-12 py-4 mt-auto text-center text-xs font-semibold bg-white text-black cursor-pointer">
              Discover now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitCity;
