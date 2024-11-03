import React from "react";
import bookmyshow from "../../assets/bookMyShow.png";
import { IoIosSearch } from "react-icons/io";
import { HiMiniBars3 } from "react-icons/hi2";
const Navbar = () => {
  return (
    <div className="navbar_section">
      <nav className="flex justify-around">
        <div className="left_navbar flex items-center flex-[0.4]">
          <div className="navbar_logo">
            <img src={bookmyshow} alt="" className="w-[9vw] hover:cursor-pointer" />
          </div>
          <div className="search_section flex items-center border w-[30vw] p-1 space-x-3">
            <span className="text-xl"><IoIosSearch /></span>
            <form>
                <input type="text" placeholder="Search for Movies,Events,Plays,Sports and Activities"className="w-[23vw] border-0 outline-0"/>
            </form>
          </div>
        </div>
        <div className="right_navbar flex justify-around items-center flex-[0.2]">
            <p className="hover:cursor-pointer">Delhi-NCR</p>
            <button className="bg-red-500 text-white text-sm px-4 py-1.5 rounded-md hover:cursor-pointer">Sign in</button>
            <span className="text-2xl text-gray-600 hover:cursor-pointer"><HiMiniBars3 /></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
