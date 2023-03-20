import React from "react";
import {
  FaAffiliatetheme,
  FaAngleLeft,
  FaDollarSign,
  FaWallet,
  FaMoneyCheck,
  FaSave,
  FaPiggyBank,FaMoneyBill
} from "react-icons/fa";
function account() {
  return (
    <div className="items-center flex flex-col justify-center">
      <div className="hover:scale-105 shadow-md md:w-50% duration-300 p-4 mx-5 md:mx-10 rounded-xl mt-10 items-center text-center justify-center flex flex-col">
        <h2>Total Rewards</h2>
        <h1 className="text-3xl font-bold">
          KSH <span>0</span>
        </h1>
        <div className="flex mx-0 h-10 text-center justify-center space-x-10 rounded-xl bg-slate-100  items-center w-full ">
          <div className="text-center cursor-pointer">
            <p className="">View History</p>
          </div>
          <div className="text-center cursor-pointer">
            <p className="">Enter Invite Code</p>
          </div>
        </div> 
      </div>
      <div className="flex mt-10"> 
        <div className="hover:scale-101 shadow-md duration-300 p-4 mx-5 md:mx-10 rounded-xl items-center text-center justify-center flex flex-col">
        <FaWallet className="text-blue-500 text-4xl my-4 cursor-pointer" />
          <p>Add Funds To Your Wallet </p>
          <h2>
            Mininimum deposit to is earn ksh 200.
          </h2>
        </div>
        <div className="hover:scale-101 shadow-md duration-300 p-4 mx-5 md:mx-10 rounded-xl items-center text-center justify-center flex flex-col">
        <FaSave className="text-blue-500 text-4xl my-4 cursor-pointer" />

          <p>Wallet Transfer </p>
          <h2>
           Invite Friends to earn Ksh 50 each
          </h2>
        </div>
      </div>
    </div>
  );
}

export default account;
