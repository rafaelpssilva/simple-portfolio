import React from "react";
import ArrowRight from "../ui/ArrowRight";
import RegisterLogin from "../images/register-login.jpg";
import work1 from "../images/work1.png";

function Project({ image, layout = "left" }) {
  const [hoverInButton, setHoverInButton] = React.useState(false);

  if (layout === "left") {
    return (
      <div className="flex flex-col md:flex-row items-end justify-center gap-8 mb-24">
        <div className="md:w-1/2 max-w-[594px] max-h-[490px]">
          <img src={image} alt="3 etapas do projeto register login" />
        </div>

        <div className="md:w-1/2 ">
          <h3 className="text-sm md:text-base text-secondColor tracking-[0.04em] font-semibold uppercase">
            Real Estate Templeate
          </h3>
          <p className="text-lg md:text-2xl text-left block mt-4 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            lorem non feugiat egestas amet.
          </p>
          <p className="text-base md:text-lg text-[#E3E4E6] mb-8 md:mb-6 ">
            Website Design
          </p>
          <button
            className="py-2 px-4 border border-neutral rounded-full hover:px-8 hover:bg-gradient-to-r hover:from-[#BC3CD8] hover:to-[#C54B8C] transition-all duration-400"
            onMouseOver={() => setHoverInButton(true)}
            onMouseOut={() => setHoverInButton(false)}
          >
            <a
              href="#"
              className="text-secondColor flex gap-4 items-center text-sm"
            >
              View Work{" "}
              <span
                className={hoverInButton ? "animate-pulse duration-100" : ""}
              >
                {<ArrowRight />}
              </span>
            </a>
          </button>
        </div>
      </div>
    );
  }

  if (layout === "right") {
    return (
      <div className="flex flex-col md:flex-row items-end justify-center gap-8 mt-4 mb-4">
        <div className="md:w-1/2 ">
          <h3 className="text-base text-secondColor tracking-[0.04em] font-semibold uppercase">
            Real Estate Templeate
          </h3>
          <p className="text-[32px] text-left block mt-4 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            lorem non feugiat egestas amet.
          </p>
          <p className="text-lg text-[#E3E4E6] mb-8 md:mb-6 ">Website Design</p>
          <button
            className="py-2 px-4 border border-neutral rounded-full hover:px-8 hover:bg-gradient-to-r hover:from-[#BC3CD8] hover:to-[#C54B8C] transition-all duration-400"
            onMouseOver={() => setHoverInButton(true)}
            onMouseOut={() => setHoverInButton(false)}
          >
            <a
              href="#"
              className="text-secondColor flex gap-4 items-center text-sm"
            >
              View Work{" "}
              <span
                className={hoverInButton ? "animate-pulse duration-100" : ""}
              >
                {<ArrowRight />}
              </span>
            </a>
          </button>
        </div>
        <div className="md:w-1/2 max-w-[594px] max-h-[490px]">
          <img src={image} alt="3 etapas do projeto register login" />
        </div>
      </div>
    );
  }
}

export default Project;
