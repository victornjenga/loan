import React from "react";
import { FaAddressBook, FaHome, FaTools, FaDollarSign } from "react-icons/fa";
import Link from "next/link";
function MdNav() {
  return (
    <div className="hidden md:flex top-0 mt-0  text-center   h-[70px] items-center bg-white z-10 w-full fixed justify-center  mx-4  space-x-20">
      <div className="">
        <p className=" italic font-medium text-xl  text-transparent  bg-clip-text bg-gradient-to-r from-blue-600  to-pink-600">CHANCE</p>
      </div>
      <div className="flex space-x-10 ">
        <Link href="/">
          <p className="text-xl cursor-pointer font-bold">Home</p>
        </Link>
        <Link href="loan">
          <p className="text-xl cursor-pointer font-bold">DashBoard</p>
        </Link>
        <Link href="profile">
          <p className="text-xl cursor-pointer font-bold">Profile</p>
        </Link>
        <Link href="account">
          <p className="text-xl cursor-pointer font-bold">Account</p>
        </Link>
      </div>
      <div>
        <button className="bg-pink-700 px-2 py-1 text-white font-bold rounded-xl text-sm">Get Started</button>
      </div>
    </div>
  );
}

export default MdNav;
