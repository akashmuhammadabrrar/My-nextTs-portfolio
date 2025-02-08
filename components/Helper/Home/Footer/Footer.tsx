import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="pt-6 pb-6 bg-[#240b39]">
      <div className="">
        <Image
          src={"/images/logo.png"}
          width={90}
          height={90}
          alt="logo"
          className="mx-auto"
        />
        <div className="flex items-center flex-wrap justify-center space-x-8 space-y-4 text-white font-bold">
          <div>Home</div>
          <div>Services</div>
          <div>Projects</div>
          <div>Reviews</div>
          <div>Contacts</div>
        </div>
        <p className="text-white text-opacity-60 font-semibold mt-4 text-center">
          © {currentYear} All Rights Reserved By Akash Muhammad Abrrar.
        </p>
      </div>
    </div>
  );
};

export default Footer;
