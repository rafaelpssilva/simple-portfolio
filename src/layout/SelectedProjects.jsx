import React from "react";
import Project from "../componentes/Project";

import work1 from "../images/work1.png";
import logo from "../images/logo.png";

function SelectedProjects() {
  return (
    <section id="project" className=" text-neutral mt-20 md:mt-44">
      <h2 id="experiencias" className="mb-8 md:mb-24 text-2xl">
        Minhas <span className="text-secondColor font-bold">Experiências</span>
      </h2>

      <div className="sm:hidden">
        <Project image={work1} layout="left" />
        <Project image={work1} layout="left" />
        <Project image={work1} layout="left" />
      </div>
    </section>
  );
}

export default SelectedProjects;
