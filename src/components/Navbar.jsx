import React from "react";
import mk from "../assets/mk.png";
import { navList } from "../constants";
const Navbar = () => {
  return (
    <header className="w-full bg-black py-5 sm:px-10 px-5 flex justify-between ">
      <nav className="flex w-full screen-max-width">
        {/* <img src={mk} top={40} width={30} height={30}></img> */}
        <h1 className="text-white text-xl">mk .</h1>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navList.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-white hover:text-gray transistion-all "
            >
              {nav}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
