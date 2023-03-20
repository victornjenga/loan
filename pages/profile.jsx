import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
const Profile = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center text-center items-center mt-10   ">
        <p className="font-semibold">Give this web app  all permissions to boost your credibility</p>

        <div className="flex flex-col  text-center justify-center items-center">
          <h3 className="text-2xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-blue-600  to-pink-600">
            Fill Out Your Details
          </h3>
          <form
            action="https://getform.io/f/7f94eb45-c382-4770-ad1d-f979e3443cc1"
            method="POST"
            className="flex flex-col w-full justify-center items-center text-center my-4"
          >
            <input
              className="rounded-2xl bg-gray-300  w-[300px] text-black font-bold text-center h-9 px-4 my-3 py-2 "
              placeholder="Enter your email"
              type="text"
              name="email"
            />
            <input
              className=" rounded-2xl bg-gray-300 text-black font-bold text-center w-[300px] h-9 px-4 my-3 py-2 "
              placeholder="Enter your phone"
              type="tel"
              name="phone"
            />
            <input
              className=" rounded-2xl bg-gray-300 text-black font-bold text-center w-[300px] h-9 px-4 my-3 py-2 "
              placeholder="Enter your phone"
              type="tel"
              name="phone"
            />
            <input
              className=" rounded-2xl bg-gray-300 text-black font-bold text-center w-[300px] h-9 px-4 my-3 py-2 "
              placeholder="Date of Birth"
              type="text"
              name="phone"
            />
            <input
              className=" rounded-2xl bg-gray-300 text-black font-bold text-center w-[300px] h-9 px-4 my-3 py-2 "
              placeholder="Enter your id Number"
              type="tel"
              name="phone"
            />

            <button className="bg-blue-600 text-black font-semibold px-3 py-2 rounded-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
