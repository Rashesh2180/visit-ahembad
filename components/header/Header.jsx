"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

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
      { name: "Explore charms of Heritage", link: "" },
    ],
  },
  {
    name: "Sightseeing",
    link: "/products",
    dropdown: [
      {
        name: "Sightseeing in and around the Ahmedaba",
        link: "/products/laptops",
      },
      { name: "Top attractions of Ahmedabad", link: "" },
      { name: "Riverfront Scenes", link: "" },
      {
        name: "Join curated tours of Ahmedabad",
        link: "",
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
        link: "/products/laptops",
      },
      { name: "Architecture of the city", link: "" },
      { name: "Riverfront Scenes", link: "" },
      {
        name: "Iconic Monuments",
        link: "",
      },
      { name: "Traditional Stepwells", link: "" },
      { name: "Ahmedabad Attraction Pass", link: "" },
      { name: "Biodiversity", link: "" },
      { name: "Cultural Musuems", link: "" },
      { name: "Guided Tours and Itinearies", link: "" },
      { name: "Spirtituality", link: "" },
    ],
  },
  {
    name: "Eat & Drink",
    link: "/products",
    dropdown: [
      {
        name: "Explore the diversity of food",
        link: "/products/laptops",
      },
      { name: "Traditional & Local Delicacies", link: "" },
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
        link: "/products/laptops",
      },
      { name: "Theaters", link: "" },
      { name: "Riverfront Scenes", link: "" },
      {
        name: "Movies",
        link: "",
      },
      { name: "Dance", link: "" },
      { name: "Music", link: "" },
      { name: "Art Galleries", link: "" },
    ],
  },
  {
    name: "Information",
    link: "",
    dropdown: [
      {
        name: " Accomodations and Stays",
        link: "",
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
  const [open,setOpen] = useState(false)
  const menuRef = useRef(null);
  const pathname = usePathname();

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.relatedTarget)) {
      setOpenDropdown(null);
    }
  };

  const handleOpen = ()=>{
    setOpen(true)

  }
  const handleClose = ()=>{
    setOpen(false)

  }
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
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
                <div
                  
                  className={`px-3 py-2 text-lg font-medium rounded mb-2 cursor-pointer ${
                    pathname === item.link ? "underline font-bold" : ""
                  }`}
                >
                  {item.name}
                </div>

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
        {
          open && (
            <div
          className="flex flex-col left-0 top-0 z-10 gap-20 justify-center items-center absolute bg-[rgba(0,0,0,0.9)] text-white w-full h-screen"
          ref={menuRef}
          onMouseLeave={handleMouseLeave}
        >
          <button onClick={handleClose} className=" absolute top-5 right-5 text-red-600 text-xl font-bold cursor-pointer">X</button>
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
          <button className=" cursor-pointer text-base px-14 py-4 text-center bg-white text-black ">Login</button>

        </div>
          )
        }
        <div className="flex gap-4 items-center">
          <button className=" text-base max-lg:hidden cursor-pointer">Login</button>
          <button className="flex gap-2 items-center cursor-pointer">
            <FaShoppingCart size={30} />
            <span className="text-base">0</span>
          </button>
          <button className="lg:hidden block cursor-pointer" onClick={handleOpen}>
        <FaBars className="h-5 w-5" />
        </button>
        </div>
       
      </div>
    </header>
  );
}
