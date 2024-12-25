import React from "react";

const Social = ({ name, url }) => {
  return (
    <a
      className="relative flex items-center lg:justify-center h-7 lg:h-8 w-7 lg:w-8 transition-transform duration-300 ease-in-out hover:scale-110 lg:bottom-0 lg:mr-6 group"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Swipe Background Effect */}
      <span className="absolute inset-0 bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></span>
      {/* Icon */}
      <img
        className="relative z-10"
        src={`./${name}.svg`}
        alt={name}
      />
    </a>
  );
};

export default Social;