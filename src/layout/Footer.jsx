import React from "react";
import FeaturedText from "../componentes/FeaturedText";

import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-20 md:mt-44 pb-10 text-center">
      <h2 className="text-3xl font-light tracking-[-0.02em]">
        Entre em <FeaturedText>Contato</FeaturedText>.
      </h2>
      <p className="mt-1 text-secondColor">
        Para que possamos falar mais sobre...
      </p>
      <ul className="flex item-center justify-center gap-14 mt-8 text-gray-500 text-4xl">
        <li>
          <a
            className="hover:text-white transition-all duration-500"
            href=""
            target="_blank"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            className="hover:text-blue-600 transition-all duration-500"
            href=""
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            className="hover:text-green-600 transition-all duration-500"
            href=""
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
