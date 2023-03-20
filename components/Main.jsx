import React, { useEffect } from "react";
import { useState } from "react";
// import { db, storage } from "../firebase";
// import firebase from "firebase";
import Image from "next/image";
import banner from "../public/assets/banner.svg";
import Link from "next/link";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Main() {
  const [loading, setLoading] = useState(false);
  // const [location, setLocation] = useState();
  // const [contact, setContact] = useState();
  // const [model, setModel] = useState();

  // const getLocation = () => {
  //   setLoading(true);
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     setLocation("Geolocation is not supported by this browser.");
  //   }
  // };

  // function showPosition(position) {
  //   setLoading(true);
  //   const agent = navigator.userAgent;
  //   setModel(agent);
  //   setLocation(
  //     "Latitude: " +
  //       position.coords.latitude +
  //       "Longitude: " +
  //       position.coords.longitude
  //   );
  //   db.collection("Client").add({
  //     Location:
  //       "Latitude: " +
  //       position.coords.latitude +
  //       ",Longitude: " +
  //       position.coords.longitude,
  //     computer: agent,
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //   });
  //   setLoading(false);
  // }
  // // const getContact = () => {
  // //   if ("contacts" in navigator && "select" in navigator.contacts) {
  // //     try {
  // //       const contacts = navigator.contacts.select(["name", "tel"], {
  // //         multiple: true,
  // //       });

  // //       setContact(
  // //         "Your first contact: " + contacts[0].name + " " + contacts[0].tel
  // //       );
  // //       db.collection("contacts").add({
  // //         contacts:
  // //           "Your first contact: " + contacts[0].name + " " + contacts[0].tel,
  // //       });
  // //     } catch {
  // //       setContact("Unexpected error happened in Contact Picker API");
  // //     }
  // //   } else {
  // //     setContact("Your browser doesn't support Contact Picker API");
  // //   }
  // // };

  // useEffect(() => {
  //   getLocation();
  // }, [""]);

  return (
    <div className="text-center mt-10  mx-3 h-[600px] space-y-4 flex flex-col items-center justify-center">
      <p className="text-blue-600 italic font-medium text-2xl ">CHANCE</p>
      <p className="text-xl font-bold">GET FAST,LOW INTEREST RATE LOANS</p>
      <h1 className="text-6xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue-600  to-pink-600">
        CHANCE QUICK CASH
      </h1>
      <p className="italic font-semibold"> DEPOSITS WITHIN 5 MINUTES</p>
      <p className="text-xl">
        Trusted by <span className="text-blue-600">millions</span> around the
        world
      </p>
      <Link href="profile">
        <button className="bg-pink-500 px-3 py-2 rounded-lg text-lg text-white font-medium">
          Loan Now
        </button>
      </Link>
      <div className="flex space-x-3 py-3">
        <div className="shadow-lg cursor-pointer w-10 h-10 justify-center items-center flex shadow-gray-400 rounded-full ">
          <FaFacebookF />
        </div>
        <div className="shadow-lg cursor-pointer w-10 h-10 justify-center items-center flex shadow-gray-400 rounded-full ">
          <FaTwitter/>
        </div>
        <div className="shadow-lg cursor-pointer w-10 h-10 justify-center items-center flex shadow-gray-400 rounded-full ">
          <FaLinkedinIn/>
        </div>
      </div>
    </div>
  );
}

export default Main;
