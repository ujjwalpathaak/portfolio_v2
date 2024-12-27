import React from 'react';

const ExternalLink = ({ text, link }) => {
  return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="text-xl italic relative inline-block text-black transition duration-300 group hover:bg-yellow-300"
      >
        {text}
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </a>
  );
};

export default ExternalLink;