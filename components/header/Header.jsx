"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaInstagram, FaShoppingCart, FaBars } from "react-icons/fa";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";
import jsonData from "../../public/assets/text/en.json";
import BlurText from "@/animations/BlurText";
export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const loginModalRef = useRef(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const modalView = searchParams.get("view");
  const loginModalOpen = modalView !== null;

  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleMouseEnter = (index) => setOpenDropdown(index);
  const handleMouseLeave = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.relatedTarget)) {
      setOpenDropdown(null);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLoginOpen = () => {
    router.push("?view=login", { scroll: false, shallow: true });
  };

  const handleLoginClose = () => {
    router.push("?", { scroll: false, shallow: true });
  };

  const handleSwitchView = (view) => {
    router.push(`?view=${view}`, { scroll: false, shallow: true });
  };

  useEffect(() => {
    if (open || loginModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open, loginModalOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginModalRef.current &&
        !loginModalRef.current.contains(event.target)
      ) {
        handleLoginClose();
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") handleLoginClose();
    };

    if (loginModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [loginModalOpen]);

  const menuItems = jsonData?.header?.menuItems || [];

  return (
    <header className="sm:py-8 py-4 bg-white border-b border-black text-black relative max-sm:sticky top-0 z-50">
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
          <Link href="/" className=" mb-3 ">
            <BlurText
              text={jsonData?.header?.heading || "-"}
              delay={150}
              animateBy="words"
              direction="top"
              className="text-5xl font-semibold text-center"
            />
          </Link>

          <div className="flex items-center gap-x-5 gap-y-3 flex-wrap justify-center">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <Link
                  href={item.link}
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
                        className="block px-4 py-2 text-nowrap text-base hover:bg-[#a20d31] hover:text-black"
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
              className="absolute top-5 right-5 text-red-600 text-xl font-bold cursor-pointer"
            >
              X
            </button>
            <Link href="/" className="text-center mb-3 text-4xl font-semibold">
              {jsonData?.header?.heading || "-"}
            </Link>

            <div className="flex items-center gap-y-5 flex-col justify-center mb-10">
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

            <button
              onClick={handleLoginOpen}
              className="cursor-pointer text-base px-14 py-4 text-center bg-white text-black"
            >
              {jsonData?.header?.login || "-"}
            </button>
          </div>
        )}

        <div className="flex gap-4 items-center">
          <button
            onClick={handleLoginOpen}
            className="text-base max-lg:hidden cursor-pointer"
          >
            {jsonData?.header?.login || "-"}
          </button>

          <Link
            href="/cart"
            className="flex gap-2 items-center cursor-pointer relative"
          >
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

      {loginModalOpen && (
        <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.7)] flex justify-center items-center">
          <div
            ref={loginModalRef}
            className="bg-white p-10 rounded shadow-lg relative w-11/12 max-w-md text-black"
          >
            <button
              onClick={handleLoginClose}
              className="absolute top-2 right-3 cursor-pointer text-red-600 font-bold text-lg"
            >
              X
            </button>

            {modalView === "login" && (
              <>
                <h2 className="text-2xl font-semibold mb-4">
                  Welcome to VISIT AMDAVAD
                </h2>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-2 mb-3 border"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 mb-5 border"
                />
                <button className="bg-black mb-5 hover:bg-white hover:text-black border border-black text-white px-4 py-2 w-full">
                  Submit
                </button>
                <div className="flex justify-center items-center gap-2 text-sm">
                  <button
                    onClick={() => handleSwitchView("reset")}
                    className="text-gray-600 underline"
                  >
                    Forgot Password?
                  </button>
                  <button
                    onClick={() => handleSwitchView("signup")}
                    className="text-gray-600 underline"
                  >
                    Create Account
                  </button>
                </div>
              </>
            )}

            {modalView === "reset" && (
              <>
                <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 mb-5 border"
                />
                <button className="bg-black mb-5 hover:bg-white hover:text-black border border-black text-white px-4 py-2 w-full">
                  Send Reset Link
                </button>
                <div className="text-center">
                  <button
                    onClick={() => handleSwitchView("login")}
                    className="text-gray-600 underline text-sm"
                  >
                    Back to Login
                  </button>
                </div>
              </>
            )}

            {modalView === "signup" && (
              <>
                <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
                <div className="mb-3 flex gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-2 border flex-1"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-2 border flex-1"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mb-3 border"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 mb-5 border"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-2 mb-5 border"
                />
                <button className="bg-black mb-5 hover:bg-white hover:text-black border border-black text-white px-4 py-2 w-full">
                  Sign Up
                </button>
                <div className="text-center">
                  <button
                    onClick={() => handleSwitchView("login")}
                    className="text-gray-600 underline text-sm"
                  >
                    Already have an account? Login
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
