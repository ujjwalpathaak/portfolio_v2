import React from "react";

const Social = ({ name, url }) => {
  return (
    <a className="h-8 w-8" href={url} target="_blank" rel="noopener noreferrer">
      <img src={`./${name}.svg`} alt={name} />
    </a>
  );
};

export default Social;
