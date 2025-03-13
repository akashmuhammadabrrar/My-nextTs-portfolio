"use client";

import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

// define props type
type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY <= 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#240b39]" : "fixed"
      } h-[12vh] z-[10]  w-full transition-all duration-200`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <Image
          src={"/images/logo.png"}
          alt="LOGO"
          width={90}
          height={90}
          className="ml-[-1.5rem] sm:ml-0"
        />
        {/* nav links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => {
              return (
                <Link href={navlink.url} key={navlink.id}>
                  <p className="nav__link">{navlink.label}</p>
                </Link>
              );
            })}
          </div>
          {/* buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="/documents/MyResume.pdf" // Link to your resume file in the public folder
              download
              className="md:px-10 md:py-3 py-3 px-8 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-300 transition-all duration-200 rounded-lg">
              Hire Me
            </a>
            {/* burger menu */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"></HiBars3BottomRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
