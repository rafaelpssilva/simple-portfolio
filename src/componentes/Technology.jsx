import { useState, useEffect } from "react";

import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiPython } from "react-icons/di";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import CertficadoDiscovery1 from "../images/certificado-discovery1.jpg";
import CertficadoDiscovery2 from "../images/certificado-discovery2.jpg";
import FathfullTheBrand from "../images/faithfullthebrand.jpg";
import RegisterApi from "../images/register-api.jpg";

function Technology() {
    const [currentTechnology, setCurrentTechnology] = useState("My learnig");

    const [htmlSelect, setHtmlSelect] = useState(false);
    const [cssSelect, setCssSelect] = useState(false);
    const [javascriptSelect, setJavascriptSelect] = useState(false);
    const [reactSelect, setReactSelect] = useState(false);
    const [nodejsSelect, setNodejsSelect] = useState(false);
    const [pythonSelect, setPythonSelect] = useState(false);

    function eventClick(setTech) {
        if (
            (setTech === setHtmlSelect && htmlSelect) ||
            (setTech === setCssSelect && cssSelect) ||
            (setTech === setJavascriptSelect && javascriptSelect) ||
            (setTech === setReactSelect && reactSelect) ||
            (setTech === setNodejsSelect && nodejsSelect) ||
            (setTech === setPythonSelect && pythonSelect)
        ) {
            console.log("true");
            setTech(false);
            return setCurrentTechnology("My learnig");
        }
        setHtmlSelect(false);
        setCssSelect(false);
        setJavascriptSelect(false);
        setReactSelect(false);
        setNodejsSelect(false);
        setPythonSelect(false);
        setTech(true);
    }

    const technologyDescription = [
        {
            language: "My learnig",
            description: (
                <div className="flex flex-col md:flex-row md:items-top md:gap-4">
                    <p
                        key="myLearnig"
                        className="mb-6 text-sm md:w-1/2 md:text-lg md:text-justify"
                    >
                        Minha carreira de programador começa aos 16 anos
                        programadando em python pelo celular com curso de
                        Python3 do Gustavo Guanabara do{" "}
                        <a
                            href="#"
                            className="text-secondColor underline underline-offset-2 text-tertiaryColor "
                        >
                            Curso em Vídeo
                        </a>
                        . Ao longo dos estudos comecei a me interessar por
                        front-end onde realizei vários cursos por plataformas
                        renomadas no segmento. Com mais de 1 ano e 6 meses de
                        experiência conto com projetos de ponta utilizando{" "}
                        <a
                            href="#"
                            className="text-secondColor underline underline-offset-2 text-tertiaryColor "
                        >
                            React
                        </a>{" "}
                        e{" "}
                        <a
                            href="#"
                            className="text-secondColor underline underline-offset-2 text-tertiaryColor "
                        >
                            Tailwind CSS.
                        </a>
                        <br />
                        Nos slides abaixos você verá alguns certificados e
                        projetos no qual clicando neles te redicionará para o
                        mesmo, e tambem clicando nos ícones das tecnologias
                        acima íra acontecer algo bem legal.
                    </p>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper w-full md:w-1/2 "
                    >
                        <SwiperSlide>
                            <img
                                className=""
                                src={CertficadoDiscovery1}
                                alt="image slide 1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className=""
                                src={CertficadoDiscovery2}
                                alt="image slide 2"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <a
                                href="https://faithfullthebrand.vercel.app"
                                target="_blank"
                            >
                                <img
                                    className=""
                                    src={FathfullTheBrand}
                                    alt="image slide 3"
                                />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a
                                href="https://registerapi.vercel.app"
                                target="_blank"
                            >
                                <img
                                    className=""
                                    src={RegisterApi}
                                    alt="image slide 3"
                                />
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            ),
        },
        {
            language: "HTML 5",
            description: (
                <p key="html5">
                    HyperText Markup Language (HTML) is the most basic building
                    block on the web. Defines the meaning and structure of web
                    content. Technologies other than HTML are often used to
                    describe the appearance/presentation (CSS) or
                    functionality/behavior (JavaScript) of a web page.,
                </p>
            ),
        },
        {
            language: "CSS 3",
            description: (
                <p key="css3">
                    Cascading Style Sheets (CSS) is a style language (en-US)
                    used to describe the presentation of a document written in
                    HTML or XML (including several XML languages such as SVG,
                    MathML, or XHTML). CSS describes how elements are shown on
                    screen, paper, speech, or other media.
                </p>
            ),
        },
        {
            language: "JavaScript",
            description: (
                <p key="javascript">
                    JavaScript® (às vezes abreviado para JS) é uma linguagem
                    leve, interpretada e baseada em objetos com funções de
                    primeira classe, mais conhecida como a linguagem de script
                    para páginas Web, mas usada também em vários outros
                    ambientes sem browser, tais como node.js.
                </p>
            ),
        },
        {
            language: "React",
            description: (
                <p key="react">
                    According to its official slogan, React is a library for
                    building user interfaces. React is not a framework – it's
                    not even web-only. It is used with other libraries for
                    rendering in certain environments. For example, React Native
                    can be used for building mobile applications; React 360 can
                    be used to build virtual reality applications; and many
                    other possibilities.
                </p>
            ),
        },
        {
            language: "Node.js",
            description: (
                <p key="nodejs">
                    Node.js is a cross-platform javascript execution environment
                    that allows developers to produce network and server-side
                    applications using JavaScript.
                </p>
            ),
        },
        {
            language: "Python",
            description: (
                <p key="python">
                    Python is a high level general-purpose programming language.
                    It uses a multi-paradigm approach, meaning it supports
                    procedural, object-oriented, and some functional programming
                    constructs.
                </p>
            ),
        },
    ];

    return (
        <section id="technology" className="mb-32 py-8 px-10 text-neutral">
            <h2 className="mb-8 text-2xl text-secondColor font-bold">
                Technology
            </h2>
            <ul className="flex justify-between md:w-4/5 mb-8">
                <li
                    onClick={(e) => {
                        setCurrentTechnology("HTML 5");
                        eventClick(setHtmlSelect);
                    }}
                    className={
                        htmlSelect
                            ? "w-20 md:w-24 text-html animate-pulse ease-in-out duration-700"
                            : "w-16 md:w-20"
                    }
                >
                    <DiHtml5 size={"100%"} />
                </li>
                <li
                    onClick={(e) => {
                        setCurrentTechnology("CSS 3");
                        eventClick(setCssSelect);
                    }}
                    className={
                        cssSelect
                            ? "w-20 md:w-24 text-css3 animate-pulse ease-in-out duration-700"
                            : "w-16 md:w-20"
                    }
                >
                    <DiCss3 size={"100%"} />
                </li>
                <li
                    onClick={(e) => {
                        setCurrentTechnology("JavaScript");
                        eventClick(setJavascriptSelect);
                    }}
                    className={
                        javascriptSelect
                            ? "w-20 md:w-24 text-javascript animate-pulse ease-in-out duration-700"
                            : "w-16 md:w-20"
                    }
                >
                    <DiJavascript1 size={"100%"} />
                </li>
                <li
                    onClick={(e) => {
                        setCurrentTechnology("React");
                        eventClick(setReactSelect);
                    }}
                    className={
                        reactSelect
                            ? "w-20 md:w-24 text-react animate-pulse ease-in-out duration-700"
                            : "w-16 md:w-20"
                    }
                >
                    <DiReact size={"100%"} />
                </li>
                <li
                    onClick={(e) => {
                        setCurrentTechnology("Node.js");
                        eventClick(setNodejsSelect);
                    }}
                    className={
                        nodejsSelect
                            ? "w-20 md:w-24 text-nodejs animate-pulse ease-in-out duration-700"
                            : "w-16 md:w-20"
                    }
                >
                    <DiNodejsSmall size={"100%"} />
                </li>
                <li
                    onClick={(e) => {
                        setCurrentTechnology("Python");
                        eventClick(setPythonSelect);
                    }}
                    className={
                        pythonSelect
                            ? "w-20 md:w-24 text-python animate-pulse ease-in-out duration-700"
                            : "w-16 md:w-20"
                    }
                >
                    <DiPython size={"100%"} />
                </li>
            </ul>
            <h3 className="text-secondColor tracking-[0.04em] font-semibold uppercase mt-2 mb-4 text-base md:mt-0">
                {currentTechnology}
            </h3>
            <div>
                {technologyDescription.map(
                    ({ language, description }) =>
                        language === currentTechnology && description
                )}
            </div>
        </section>
    );
}

export default Technology;