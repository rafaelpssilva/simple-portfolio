import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <header className="flex items-center justify-between ">
      <div className="w-12">
        <img src={logo} alt="" />
      </div>
      <div className="">
        <ul className="flex text-sm gap-x-8 select-none">
          <li className="hover:text-tertiaryColor py-2 hover:border-b cursor-pointer ease-in duration-200">
            HOME
          </li>
          <li className="hover:text-tertiaryColor py-2 hover:border-b cursor-pointer ease-in duration-300">
            WORK
          </li>
          <li className="hover:text-tertiaryColor py-2 hover:border-b cursor-pointer ease-in duration-300">
            ABOUT
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
