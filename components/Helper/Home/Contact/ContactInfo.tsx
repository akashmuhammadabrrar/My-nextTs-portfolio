import { contactData } from "@/app/Data/data";
import Link from "next/link";
import React from "react";
import { FaAddressBook, FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="">
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white"></FaPhone>
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Phone</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData.phone}
          </h1>
        </div>
      </div>
      {/* email */}
      <div className="flex items-center space-x-8 my-6">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <MdEmail className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">
            Email Address
          </h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData.email}
          </h1>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaAddressBook className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Address</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData.address}
          </h1>
        </div>
      </div>

      {/* social links */}

      <div className="flex justify-center items-center mt-4 gap-6">
        <div>
          <Link
            href={
              "https://www.linkedin.com/in/akash-muhammad-abrrar-764275228/"
            }
            target="_blank">
            <FaLinkedin className="w-4 h-4 md:w-7 md:h-7 text-white"></FaLinkedin>
          </Link>
        </div>
        <div className="space-x-3">
          <Link
            href={"https://www.facebook.com/hmakash.ahmed.96"}
            target="_blank">
            <FaFacebook className="w-4 h-4 md:w-7 md:h-7 text-white"></FaFacebook>
          </Link>
        </div>
        <div>
          <Link href={"https://x.com/akash_madbor9"} target="_blank">
            <FaSquareXTwitter className="w-4 h-4 md:w-7 md:h-7 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
