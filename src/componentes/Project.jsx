import React from "react";
import ArrowRight from "../ui/ArrowRight";
import RegisterLogin from "../images/register-login.jpg";

function Project() {
    const anima = true;

    const [hoverInButton, setHoverInButton] = React.useState(false);

    return (
        <div className="flex flex-col md:flex-row w-fit h-fit mb-24 md:items-end">
            <div className="w-full md:mr-4">
                <img
                    src={RegisterLogin}
                    alt="3 etapas do projeto register login"
                    className="rounded-sm"
                />
            </div>
            <div className="">
                <h3 className="text-secondColor tracking-[0.04em] font-semibold uppercase mt-2 mb-4 text-base md:mt-0">
                    Register Login
                </h3>
                <p className="text-lg mb-6">
                    Lorem ipsum dolor sit amet, consectetur{" "}
                    <span className="text-secondColor font-semibold">
                        adipiscing elit. Ultrices lorem non feugiat egestas
                        amet.
                    </span>
                </p>
                <p className="text-sm mb-8 md:mb-6 ">Website Design</p>
                <button
                    className="py-2 px-4 border border-neutral rounded-full"
                    onMouseOver={() => setHoverInButton(true)}
                    onMouseOut={() => setHoverInButton(false)}
                >
                    <a
                        href="#"
                        className="text-secondColor flex gap-4 items-center text-sm"
                    >
                        View Work{" "}
                        <span
                            className={
                                hoverInButton
                                    ? "animate-pulse duration-100"
                                    : ""
                            }
                        >
                            {<ArrowRight />}
                        </span>
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Project;
