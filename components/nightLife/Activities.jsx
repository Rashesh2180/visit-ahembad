import Image from "next/image";
import Link from "next/link";
import React from "react";
import Masonry from "../../animations/Masonry";
const Activities = ({ activitiesdata }) => {
  return (
    <section className="bg-[#F1FFE0] sm:py-32 py-10">
      <div className="main-container">
        <h6 className="mb-8 section-title">{activitiesdata?.title}</h6>
        <Masonry  data={activitiesdata?.nightActivitesData} />
        {/* <div className="grid gap-10 grid-cols-4">
          {activitiesdata?.nightActivitesData?.map((ele) => (
            <div className="relative rounded-lg">

            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Activities;
