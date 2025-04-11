import React from "react";
import jsonData from "../../public/assets/text/en.json";

const page = () => {
  const contactData = jsonData?.contact;
  return (
    <div className="max-w-5xl mx-auto px-4 sm:py-14 py-7 flex flex-col sm:gap-14 gap-8">
      <div className="text-black">
        <h2 className="font-semibold text-2xl sm:mb-6 mb-3">
          {contactData?.contact?.title}
        </h2>
        <ul className="list-disc flex flex-col sm:gap-5 gap-3">
          <li className="sm:text-lg text-sm ml-10">
            {contactData?.contact?.list1} <br />
            {contactData?.contact?.email}
            <a href="#" className="underline">
              {" "}
              {contactData?.contact?.link}
            </a>
          </li>

          <li className="sm:text-lg text-sm ml-10">
            {contactData?.contact?.list2}{" "}
            <a href="#" className="underline">
              {contactData?.contact?.link2}
            </a>
          </li>
        </ul>
      </div>
      <div className="text-black">
        <h2 className="font-semibold text-2xl sm:mb-6 mb-3">
          {contactData?.work?.title}
        </h2>
        <ul className="list-disc flex flex-col sm:gap-5 gap-3">
          <li className="sm:text-lg text-sm ml-10">
            {contactData?.work?.list1}
           
            <a href="#" className="underline">
              {" "}
              {contactData?.work?.link}
            </a>
          </li>
        </ul>
      </div>
      <div className="text-black">
        <h2 className="font-semibold text-2xl sm:mb-6 mb-3">
          {contactData?.write?.title}
        </h2>
        <ul className="list-disc flex flex-col sm:gap-5 gap-3">
          <li className="sm:text-lg text-sm ml-10">
            {contactData?.write?.list1}
           
            <a href="#" className="underline">
              {" "}
              {contactData?.write?.link}
            </a>
          </li>
        </ul>
      </div>
      <div className="text-black">
        <h2 className="font-semibold text-2xl sm:mb-6 mb-3">
          {contactData?.advertise?.title}
        </h2>
        <ul className="list-disc flex flex-col sm:gap-5 gap-3">
          <li className="sm:text-lg text-sm ml-10">
            {contactData?.advertise?.list1}
           
            <a href="#" className="underline">
              {" "}
              {contactData?.advertise?.link}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
