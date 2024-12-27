import React from 'react';
import { Link } from 'react-router-dom';

const ExternalLink = ({ text, link }) => {
  return (
      <Link
        to={link}
        rel="noreferrer noopener"
        className="text-xl italic w-fit relative inline-block text-black transition duration-300 group hover:bg-yellow-300"
      >
        {text}
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </Link>
  );
};

export default ExternalLink;