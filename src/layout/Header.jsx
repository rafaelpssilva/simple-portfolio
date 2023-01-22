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
            <a href="#historia">HISTÓRIA</a>
          </li>
          <li className="hover:text-tertiaryColor py-2 hover:border-b cursor-pointer ease-in duration-300">
            <a href="#experiencias">EXPERIÊNCIAS</a>
          </li>
          <li className="hover:text-tertiaryColor py-2 hover:border-b cursor-pointer ease-in duration-300">
            <a href="#saibamais">SAIBA MAIS</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
