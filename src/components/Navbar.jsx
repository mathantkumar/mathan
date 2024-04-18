import React from "react";
import { navList } from "../constants";

const Navbar = () => {
  // const sectionRefs = {
  //   section1: useRef(null),
  //   section2: useRef(null),
  //   section3: useRef(null),
  // };

  // const scrollToSection = (sectionRef) => {
  //   if (sectionRef.current) {
  //     sectionRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <header className="w-full bg-white  flex justify-between py-5">
      <nav className="flex w-full screen-max-width">
        <h1 className="text-black text-xl font-bold ">mk .</h1>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navList.map((nav) => (
            <div
              key={nav}
              className="px-5  text-md cursor-pointer text-black font-semibold hover:text-gray transistion-all "
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
