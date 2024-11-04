import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer bg-[#333338] h-[100vh] mt-auto">
      {/* */}
      <div className="text-white  font-semibold flex justify-around items-center space-y-5">
        <div className="flex space-x-5">
          <h1 className="text-xl">List your Show</h1>
          <p className="text-lg">
            Got a show, event, activity or a great experience? Partner with us &
            get listed on BookMyShow
          </p>
        </div>
        <button className="bg-[#EC5E71]  p-4 rounded-sm">Contact today!</button>
      </div>
      <div className="bg-[#404043] w-[100%] flex justify-around items-center p-1 my-3">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-6xl text-neutral-500 ">
            <RiCustomerService2Line />
          </span>
          <p className="text-xl text-neutral-500 ">24/7CUSTOMER CARE</p>
        </div>
        <div className="flex flex-col items-center space-y-2 ">
          <span className="text-6xl text-gray-500 ">
            <GiTicket />
          </span>
          <p className="text-xl text-gray-500 ">RESEND BOOKING CONFIRMATION</p>
        </div>
        <div className="flex flex-col items-center space-y-2 ">
          <span className="text-6xl text-gray-500 ">
            <FaEnvelopeOpenText />
          </span>
          <p className="text-xl text-gray-500 ">SUBSCRIBE TO THE NEWSLETTER</p>
        </div>
      </div>
      <div className="text-neutral-400 space-y-12 my-4">
        <div className="">
          <h1 className="">Movies Now Showing in Delhi-NCR</h1>
          <p className="text-sm text-neutral-500">
            Singham Again | Bhool Bhulaiyaa 3 | The House of Dead Horror |
            Prehistoric Adventure | Wild Roller Coaster | Venom: The Last Dance
            | Amaran | Lucky Baskhar
          </p>
        </div>
        <div className="">
          <h1>Upcoming Movies in Delhi-NCR</h1>
          <p className="text-sm text-neutral-500">
            Kale Lagan Chhe !?! | I am Kathalan | Christmas Eve in Millers Point
            | Swargam | Oru Anweshanathinte Thudakkam | Asuraru | Amaran |
            Anpodu Kanmani
          </p>
        </div>
        <div className="">
          <h1>Movies By Genre</h1>
          <p className="text-sm text-neutral-500">
            Adventure Movies | Action Movies | Comedy Movies | Romance Movies |
            Sci-fi Movies | Thriller Movies | Mystery Movies | Drama Movies |
            Animation Movies
          </p>
        </div>
        <div className="">
          <h1>Movies by Language</h1>
          <p className="text-sm text-neutral-500">
            Movies in Hindi | Movies in English | Movies in Telugu | MOvies in
            Tamil | Movies in Bhojpuri | MOvies in Urdu{" "}
          </p>
        </div>
        <div>
          <h1>COUNTRIES</h1>
          <p className="text-sm text-neutral-500">
            {" "}
            Indonesia | Singapore | UAE | Sri Lanka | West Indies
          </p>
        </div>
      </div>
      <div className="my-14">
        <div className="h-[1px] bg-neutral-500"></div>
        <div className="social_Media_logo flex justify-center items-center mt-6 space-x-3">
          <div className="bg-[#414146] p-2 w-[40px] rounded-full">
            <span className="text-2xl text-neutral-900">
              <FaFacebookF />
            </span>
          </div>
          <div className="bg-[#414146] p-2 w-[40px] rounded-full">
            <span className="text-2xl text-neutral-900">
              <TiSocialInstagram />
            </span>
          </div>
          <div className="bg-[#414146] p-2 w-[40px] rounded-full">
            <span className="text-2xl text-neutral-900">
              <RiTwitterXLine />
            </span>
          </div>
          <div className="bg-[#414146] p-2 w-[40px] rounded-full">
            <span className="text-2xl text-neutral-900">
              <FaYoutube />
            </span>
          </div>
          <div className="bg-[#414146] p-2 w-[40px] rounded-full">
            <span className="text-2xl text-neutral-900">
              <FaPinterestP />
            </span>
          </div>
        </div>
        <footer className="text-center text-neutral-500 my-1">
          Copyright 2024 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.{" "}
        </footer>
      </div>
    </div>
  );
};

export default Footer;
