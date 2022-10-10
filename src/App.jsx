import "./App.css";
import Project from "./componentes/Project";
import Technology from "./componentes/Technology";

import Slider from "react-slick";
import About from "./layout/About";

function App() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    let settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className="App font-WorkSans text-secondColor">
            <div className="h-screen py-6 px-10 h-[-webkit-fill-available]">
                <header className="flex items-center justify-between my-2">
                    <div>
                        <h2 className="text-tertiaryColor text-xl">Rafael</h2>
                    </div>
                    <div className="">
                        <ul className="flex text-sm gap-x-8">
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
                <section className="h-8/10 text-center flex items-center relative w-full">
                    <h1 className="tracking-tighter text-neutral text-4xl text-center w-full bg">
                        I’m a developer specialising in{" "}
                        <span className="font-bold text-secondColor">
                            Front-End
                        </span>{" "}
                        and{" "}
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
            </div>

            <Technology />

            <section id="project" className="py-8 px-10 text-neutral">
                <h2 className="mb-24 text-2xl">
                    Selected{" "}
                    <span className="text-secondColor font-bold">Works</span>
                </h2>

                <Project />
                <Project />
            </section>

            <About />
        </div>
    );
}

export default App;
