import React from "react";

const VisitCity = () => {
  return (
    <section className="py-10 bg-[#F1FFE0] px-4">
      <div className="max-w-4xl mx-auto p-10 h-full w-full bg-white rounded-2xl text-black ">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="lg:max-w-72 flex flex-col gap-10">
            <strong className="sm:text-5xl text-3xl">
              Visiting Ahmedabad for the first time?
            </strong>
            <strong className="text-lg pt-5 border-t border-black">
              Discover your ultimate guide to Ahmedabad... from the best
              activities in the city to top restaurants, heritage sites, hotels,
              theatre shows, musicals, attractions and more!
            </strong>
          </div>
          <div className="flex flex-col gap-10 items-start">
            <p className="text-xl lg:max-w-80">
              If you're visiting Ahmedabad for the first time, here's a helpful
              guide to make your first trip safe, easy and, most of all, fun!
              Navigate Ahmedabad with ease by following the latest traveller
              information and discovering how to get around the city by local
              bus, premium bus, metro, train, shuttles or air, with Ahmedabad's
              accessible transport network.
            </p>
            <button className="px-12 py-4 mt-auto text-center text-xs font-semibold text-white bg-black cursor-pointer">
              Discover now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitCity;
