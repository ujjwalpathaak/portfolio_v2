import React from "react";
import { Link } from "react-router-dom";

const ExternalLink = ({ text, link }) => {
  return (
    <Link
      to={link}
      rel="noreferrer noopener"
      className="group relative inline-block w-fit text-xl italic text-black transition duration-300 hover:bg-yellow-300"
    >
      {text}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default ExternalLink;
