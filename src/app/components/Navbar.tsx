import React from "react";
import SunIcon from "../components/icons/SunIcon"

const Navbar = () => {
  return   <header className="flex items-center space-x-2 mb-10">
  <h1 className="text-white font-bold text-3xl flex-grow">devfinder</h1>

    <span className="uppercase text-white  ">Light</span>
    <button>
      <SunIcon  width={25} className="fill-white"/>
      </button>
  </header>
};

export default Navbar;
