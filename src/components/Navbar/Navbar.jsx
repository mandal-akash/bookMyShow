import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import bookmyshow from "../../assets/bookMyShow.png";
import { IoIosSearch } from "react-icons/io";
import { HiMiniBars3 } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../Redux_Slices/movies_slices";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar_section py-2 bg-white">
      <nav className="flex justify-around">
        <div className="left_navbar flex items-center flex-[0.4]">
          <Link to="/"><div className="navbar_logo">
            <img
              src={bookmyshow}
              alt=""
              className="w-[9vw] hover:cursor-pointer"
            />
          </div>
          </Link>
          <div className="search_section flex items-center border w-[30vw] p-1 space-x-3">
            <span className="text-xl">
              <IoIosSearch />
            </span>
            <form>
              <input
                type="text"
                placeholder="Search for Movies,Events,Plays,Sports and Activities"
                className="w-[23vw] border-0 outline-0"
              />
            </form>
          </div>
        </div>
        <div className="right_navbar flex justify-around items-center flex-[0.2]">
          <p className="hover:cursor-pointer">Delhi-NCR</p>
          <button className="bg-red-500 text-white text-sm px-4 py-1.5 rounded-md hover:cursor-pointer">
            Sign in
          </button>
          <span className="text-2xl text-gray-600 hover:cursor-pointer">
            <HiMiniBars3 />
          </span>
        </div>
      </nav>
      <div className="category my-2">
        <div className="top_category_section flex justify-around bg-[#F5F5F5] p-2">
          <div className="left_category flex list-none flex-[0.3] justify-around">
            <Link to="/movies"> <li>Movies</li>  </Link>
            <Link to="/stream"> <li>Stream</li> </Link>
            <Link to="/events">   <li>Event</li> </Link>
            <li>Play</li>
            <li>Sports</li>
            <li>Activities</li>
          </div>
          <div className="right_category flex list-none flex-[0.3] justify-around">
            <li>ListYourShow</li>
            <li>Corporate</li>
            <li>Offers</li>
            <li>Git Cards</li>
          </div>
        </div>
        <div className="bg-[#EBEBEB]">
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
              <img
                className="w-[90vw] rounded-xl"
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg"
                alt="..."
              />
              <img
                className="w-[90vw] rounded-xl"
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1729862004049_indianoceanbms1240x300group.jpg"
                alt="..."
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
