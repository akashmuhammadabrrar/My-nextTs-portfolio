import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10 ">
      <h2 className="text-bg text-2xl md:text-3xl lg:text-4xl font-bold">
        Lets Crack The Nutshell !
      </h2>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Contact With Me If You Need to Know Any Kind of Information about Our
        Community Or Our Works.
      </p>
      {/* inputs field */}
      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* first name */}
          <input
            type="text"
            placeholder="First name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          {/* last name */}
          <input
            type="text"
            placeholder="Last name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        {/* email  */}
        <div className="flex mt-5 flex-col md:flex-row items-center justify-center gap-4">
          {/* first name */}
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          {/* last name */}
          <input
            type="number"
            placeholder="+88 Phone Number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          {/* email address */}
        </div>
        <div>
          <select className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none">
            <option value="" disabled selected>
              Select An Option
            </option>
            <option value="frontend">Frontend Web Development</option>
            <option value="backend">Backend Development</option>
            <option value="full-stack">Full-stack Web Development</option>
          </select>
        </div>
        <textarea
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          rows={7}
          placeholder="Message"></textarea>
        <div className="mt-4 ">
          <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-300 rounded-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
