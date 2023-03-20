import React from "react";
import { FaAddressBook, FaHome, FaTools, FaDollarSign,FaMoneyBill} from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className=" mt-10 mb-10 bottom-10">
      <div className="space-x-4 flex flex-col items-center justify-center">
        <div className="mt-6 hidden md:block border-black ">
          <p className="italic text-lg ">All rights Reserved</p>
          <p className=" font-medium text-lg ">@Chance 2016-2022</p>
        </div>
        <div className="flex md:hidden bottom-0 mb-0 h-[70px] items-center bg-white w-full fixed justify-around mx-4 text-3xl space-x-4">
          <Link href="/">
            <FaHome className="text-pink-600   text-2xl cursor-pointer" />
          </Link>
          <Link href="loan">
            <FaMoneyBill className="text-blue-600  text-2xl cursor-pointer" />
          </Link>
          {/* <Link href="profile">
            <FaTools className="text-blue-600  text-2xl cursor-pointer" />
          </Link> */}

          <Link href="account">
            <FaAddressBook className="text-blue-600  text-2xl cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
