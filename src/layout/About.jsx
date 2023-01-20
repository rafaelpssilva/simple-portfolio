import React from "react";

import Hobby1 from "../images/hobby1.png";
import Hobby2 from "../images/hobby2.png";
import Hobby3 from "../images/hobby3.png";

function About() {
  return (
    <section className=" md:flex md:items-center gap-4 md:mt-44 pb-10">
      <div className="mb-6 md:mb-0 md:w-1/2">
        <h2 className="mb-4 text-2xl text-secondColor font-semibold tracking-[0.06em] uppercase">
          A bit about me
        </h2>
        <p className="text-lg text-left">
          I am a UI/UX designer who is passionate about creating{" "}
          <span className="text-secondColor font-semibold">
            beautiful and joyful digital experiences. Besides design, I love
            music, games and travelling.
          </span>{" "}
        </p>
      </div>
      <div className="grid gap-2 grid-cols-2 md:w-1/2 ">
        <div className="relative items-center ">
          <img
            src={Hobby1}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 right-0 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <img
            src={Hobby2}
            alt=""
            className="md:max-w-[282px] md:max-h-[328px] bg-cover"
          />
          <img
            src={Hobby3}
            alt=""
            className="md:max-w-[282px] md:max-h-[328px] bg-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
