import React from "react";

const Social = ({ name, url }) => {
  return (
    <a
      className="group relative flex h-7 w-7 items-center transition-transform duration-300 ease-in-out hover:scale-110 lg:bottom-0 lg:mr-6 lg:h-8 lg:w-8 lg:justify-center"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Swipe Background Effect */}
      <span className="absolute inset-0 z-0 origin-left scale-x-0 transform bg-yellow-300 transition-transform duration-300 group-hover:scale-x-100"></span>
      {/* Icon */}
      <img className="relative z-10" src={`./${name}.svg`} alt={name} />
    </a>
  );
};

export default Social;
