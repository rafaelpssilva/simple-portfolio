import React from "react";

function Home() {
  return (
    <section className="h-[80vh] mb-[10vh] text-center flex items-center relative  select-none">
      <h1 className="tracking-tighter text-neutral text-4xl text-center w-full bg">
        I’m a developer specialising in{" "}
        <span className="font-bold text-secondColor">Front-End</span> and{" "}
        <span className="font-bold text-secondColor">
          Interaction Programing
        </span>
      </h1>
      <div className="absolute bottom-0 right-2/4 animate-bounce">
        <a href="#technology">
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L12 12L22 2"
              stroke="#E3E4E6"
              strokeWidth="2.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Home;
