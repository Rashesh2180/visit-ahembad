"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const menuItems = [
  {
    name: "Things to do",
    link: "",
    dropdown: [
      { name: "Discover what new", link: "/new-page-1" },
      { name: "Night life of Ahmedabad ", link: "/night-life-of-ahmedabad" },
      { name: "Go Shopping!", link: "/go-shopping" },
      { name: "Sports and games", link: "/sports-and-games" },
      { name: " Ahmedabad  for kids", link: "/ahmedabad" },
      { name: "Explore charms of Heritage", link: "/historic-city-of-ahmedabad-1" },
      { name: "Curated experiences", link: "/curated-experiences" },
    ],
  },
  {
    name: "Sightseeing",
    link: "/products",
    dropdown: [
      {
        name: "Sightseeing in and around the Ahmedabad",
        link: "/sightseeing-in-and-around-the-ahmedabad",
      },
      { name: "Top attractions of Ahmedabad", link: "" },
      { name: "Riverfront Scenes", link: "" },
      {
        name: "Join curated tours of Ahmedabad",
        link: "/join-curated-tours-of-ahmedabad",
      },
      { name: " Follow our itinearies", link: "" },
      { name: "Ahmedabad Attraction Pass", link: "" },
      { name: "Biodiversity", link: "" },
    ],
  },
  {
    name: "Explore Heritage",
    link: "/products",
    dropdown: [
      {
        name: " Historic city of Ahmedabad",
        link: "/historic-city-of-ahmedabad-1",
      },
      { name: "Architecture of the city", link: "/architecture-of-the-city" },
      { name: "Riverfront Scenes", link: "" },
      {
        name: "Iconic Monuments",
        link: "/iconic-monuments",
      },
      { name: "Traditional Stepwells", link: "/traditional-stepwells" },
      { name: "Ahmedabad Attraction Pass", link: "" },
      { name: "Biodiversity", link: "" },
      { name: "Cultural Musuems", link: "" },
      { name: "Guided Tours and Itinearies", link: "" },
      { name: "Spirtituality", link: "/spirtituality" },
    ],
  },
  {
    name: "Eat & Drink",
    link: "",
    dropdown: [
      {
        name: "Explore the diversity of food",
        link: "/eat-and-drink",
      },
      { name: "Traditional & Local Delicacies", link: "/new-page-3" },
      { name: "Riverfront Scenes", link: "" },
      {
        name: "Unforgettable Experiences",
        link: "",
      },
      { name: "Restaurants with a view", link: "" },
      { name: "Themed Afternoon Teas", link: "" },
      { name: "Pocket Friendly places", link: "" },
      { name: " Sweet Tooth Diaries", link: "" },
      {
        name: " Curated Learning & Masterclasses",
        link: "",
      },
    ],
  },
  {
    name: "Art and Culture",
    link: "/products",
    dropdown: [
      {
        name: "Litreature",
        link: "/litreature",
      },
      { name: "Theaters", link: "" },
      { name: "Riverfront Scenes", link: "" },
      {
        name: "Movies",
        link: "",
      },
      { name: "Dance", link: "" },
      { name: "Music", link: "" },
      { name: "Art Galleries", link: "/art-galleries" },
    ],
  },
  {
    name: "Information",
    link: "",
    dropdown: [
      {
        name: " Accomodations and Stays",
        link: "/services-6-1",
      },
    ],
  },
  {
    name: "SHOP",
    link: "/shop",
  },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.relatedTarget)) {
      setOpenDropdown(null);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header className="sm:py-8 py-4  bg-white border-b border-black text-black relative max-sm:sticky top-0  z-50 ">
      <div className="main-container flex justify-between gap-5 items-center">
        <Link
          href="https://www.instagram.com/exploreheritageofindia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={25} />
        </Link>

        <div
          className="lg:flex hidden flex-col items-center"
          ref={menuRef}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/" className="text-center mb-3 text-5xl font-semibold">
            VISIT AMDAVAD
          </Link>

          <div className="flex items-center  gap-x-5 gap-y-3 flex-wrap justify-center">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <Link href={item.link}
                  className={`px-3 py-2 text-lg font-medium rounded mb-2 cursor-pointer ${
                    pathname === item.link ? "underline font-bold" : ""
                  }`}
                >
                  {item.name}
                </Link>

                {item.dropdown && openDropdown === index && (
                  <div className="absolute left-0 bg-[#a4a09d] overflow-hidden text-white shadow-lg rounded-md z-10">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.link}
                        className="block px-4 text-nowrap py-2 text-base hover:bg-[#a20d31] hover:text-black"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {open && (
          <div
            className="flex flex-col left-0 top-0 z-10 gap-20 justify-center items-center absolute bg-[rgba(0,0,0,0.9)] text-white w-full h-screen"
            ref={menuRef}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={handleClose}
              className=" absolute top-5 right-5 text-red-600 text-xl font-bold cursor-pointer"
            >
              X
            </button>
            <Link href="/" className="text-center mb-3 text-4xl font-semibold">
              VISIT AMDAVAD
            </Link>

            <div className="flex items-center  gap-y-5 flex-col justify-center mb-10">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <Link
                    href={item.link}
                    className={`px-3 py-2 text-lg font-medium rounded mb-2 ${
                      pathname === item.link ? "underline font-bold" : ""
                    }`}
                  >
                    {item.name}
                  </Link>

                  {item.dropdown && openDropdown === index && (
                    <div className="absolute left-0 bg-[#a4a09d] text-white shadow-lg rounded-md z-10">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.link}
                          onClick={handleClose}
                          className="block px-4 text-nowrap py-2 text-sm hover:bg-[#a20d31] hover:text-black"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button className=" cursor-pointer text-base px-14 py-4 text-center bg-white text-black ">
              Login
            </button>
          </div>
        )}
        <div className="flex gap-4 items-center">
          <button className=" text-base max-lg:hidden cursor-pointer">
            Login
          </button>
          <Link href="/cart" className="flex gap-2 items-center cursor-pointer relative">
            <FaShoppingCart size={30} />
            {totalCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-2 py-0.5">
            {totalCount}
          </span>
        )}
          </Link>
          <button
            className="lg:hidden block cursor-pointer"
            onClick={handleOpen}
          >
            <FaBars className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
