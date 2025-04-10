"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import jsonData from "../../public/assets/text/en.json";

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

  const menuItems = jsonData?.header?.menuItems || [];

  return (
    <header className="sm:py-8 py-4 bg-white border-b border-black text-black relative max-sm:sticky top-0 z-50">
      <div className="main-container flex justify-between gap-5 items-center">
        <Link href="https://www.instagram.com/exploreheritageofindia" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={25} />
        </Link>

        <div className="lg:flex hidden flex-col items-center" ref={menuRef} onMouseLeave={handleMouseLeave}>
          <Link href="/" className="text-center mb-3 text-5xl font-semibold">{jsonData?.header?.heading || "-"}</Link>

          <div className="flex items-center gap-x-5 gap-y-3 flex-wrap justify-center">
            {menuItems.map((item, index) => (
              <div key={index} className="relative" onMouseEnter={() => handleMouseEnter(index)}>
                <Link href={item.link} className={`px-3 py-2 text-lg font-medium rounded mb-2 cursor-pointer ${pathname === item.link ? "underline font-bold" : ""}`}>
                  {item.name}
                </Link>

                {item.dropdown && openDropdown === index && (
                  <div className="absolute left-0 bg-[#a4a09d] overflow-hidden text-white shadow-lg rounded-md z-10">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link key={subIndex} href={subItem.link} className="block px-4 py-2 text-nowrap text-base hover:bg-[#a20d31] hover:text-black">
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
          <div className="flex flex-col left-0 top-0 z-10 gap-20 justify-center items-center absolute bg-[rgba(0,0,0,0.9)] text-white w-full h-screen" ref={menuRef} onMouseLeave={handleMouseLeave}>
            <button onClick={handleClose} className="absolute top-5 right-5 text-red-600 text-xl font-bold cursor-pointer">X</button>
            <Link href="/" className="text-center mb-3 text-4xl font-semibold">{jsonData?.header?.heading || "-"}</Link>

            <div className="flex items-center gap-y-5 flex-col justify-center mb-10">
              {menuItems.map((item, index) => (
                <div key={index} className="relative" onMouseEnter={() => handleMouseEnter(index)}>
                  <Link href={item.link} className={`px-3 py-2 text-lg font-medium rounded mb-2 ${pathname === item.link ? "underline font-bold" : ""}`}>
                    {item.name}
                  </Link>

                  {item.dropdown && openDropdown === index && (
                    <div className="absolute left-0 bg-[#a4a09d]  text-white shadow-lg rounded-md z-10">
                      {item.dropdown.map((subItem, subIndex) => ( 
                        <Link key={subIndex} href={subItem.link} onClick={handleClose} className="block px-4 text-nowrap py-2 text-sm hover:bg-[#a20d31] hover:text-black">
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button className="cursor-pointer text-base px-14 py-4 text-center bg-white text-black">{jsonData?.header?.login || "-"}</button>
          </div>
        )}

        <div className="flex gap-4 items-center">
          <button className="text-base max-lg:hidden cursor-pointer">{jsonData?.header?.login || "-"}</button>
          <Link href="/cart" className="flex gap-2 items-center cursor-pointer relative">
            <FaShoppingCart size={30} />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-2 py-0.5">
                {totalCount}
              </span>
            )}
          </Link>
          <button className="lg:hidden block cursor-pointer" onClick={handleOpen}>
            <FaBars className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
