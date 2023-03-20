import Image from "next/image";
import React from "react";
import { FaAlipay, FaPaypal, FaBitcoin } from "react-icons/fa";
import mpesa from "../public/assets/mpesa.png";
const commonStyles =
  "min-h-[70px] px-1  flex justify-center items-center border-black  border-2";
function About() {
  return (
    <div className="mt-10 flex flex-col justify-center items-center ">
      <div className="grid text-black sm:grid-cols-3 grid-cols-2 justify-center items-center sm:w-[80%] md:w-[60%] ">
        <div className={`rounded-tl-2xl  ${commonStyles}`}>
          <p className=" px-1">Fast</p>
        </div>
        <div className={`rounded-tr-2xl sm:rounded-none  ${commonStyles}`}>
          <p className=" px-1">Accredited</p>
        </div>
        <div className={`md:rounded-tr-2xl ${commonStyles}`}>
          <p className=" px-1"> Longer Duration</p>
        </div>
        <div className={`md:rounded-bl-2xl ${commonStyles}`}>
          <p className=" px-1">Fast Deposits</p>
        </div>
        <div className={`rounded-bl-2xl sm:rounded-none  ${commonStyles}`}>
          <p className="px-1"> Higher Duration</p>
        </div>
        <div className={`rounded-br-2xl ${commonStyles}`}>
          <p className=" px-1">Higher Limit</p>
        </div>
      </div>{" "}
      <div className="space-x-4 mt-5 flex flex-col items-center justify-center">
        <p>Payments Through</p>
        <div className="flex pt-2 space-x-3">
          <Image src={mpesa} width={60} height={60} />
          <FaPaypal className="text-5xl text-blue-500" />
          <FaBitcoin className="text-5xl text-yellow-500" />
        </div>
      </div>
    </div>
  );
}

export default About;
