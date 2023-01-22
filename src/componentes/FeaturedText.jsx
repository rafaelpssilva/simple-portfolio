import React from "react";

function FeaturedText({ children }) {
  return (
    <span className="text-secondColor hover:text-tertiaryColor hover:underline transition-all duration-500 font-bold">
      {children}
    </span>
  );
}

export default FeaturedText;
