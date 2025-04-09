import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[78rem] px-4 mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-10 gap-5 py-5 sm:py-12 text-black">
      <div className="flex flex-col">
        <h6 className=" font-semibold text-xl text-black  mb-3">
          Explore Ahmedabad
        </h6>
        <Link
          href="https://www.instagram.com/exploreheritageofindia"
          className="h-7 w-7 rounded-md bg-black flex items-center mb-4 justify-center"
        >
          <FaInstagram size={18} className="text-white" />
        </Link>
        <div className="text-sm  mt-auto text-black">
          Made with{" "}
          <Link href="https://www.squarespace.com/" className="underline ">
            Squarespace{" "}
          </Link>{" "}
          •{" "}
          <Link href="https://www.squarespace.com/" className="underline ">
            Privacy Policy{" "}
          </Link>
        </div>
      </div>
      <div className="text-base underline flex flex-col gap-5">
        <Link href="">Heritage of the city</Link>
        <Link href="">Fun activities</Link>
      </div>
      <div className="text-base underline flex flex-col gap-5">
        <Link href="">ABOUT</Link>
        <Link href="">CONTACT</Link>
      </div>
      <div className="flex flex-col gap-5">
        <h6 className=" font-semibold text-xl text-black  mb-3">
          Explore Ahmedabad
        </h6>
        <input
          type="text"
          className="p-5 text-base border border-gray-200"
          placeholder="Email Address"
        />
        <button className="p-5 bg-black text-center text-white inline-block font-semibold cursor-pointer hover:opacity-80 w-24">
          GO!
        </button>
      </div>
    </footer>
  );
};

export default Footer;
