import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  return (
    <div className="fixed h-[12vh] z-[10] bg-blue-950 w-full">
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
            <button className="md:px-10 md:py-3 py-3 px-8 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-300 transition-all duration-200 rounded-lg">
              Hire Me
            </button>
            {/* berger menu */}
            <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-white lg:hidden"></HiBars3BottomRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
