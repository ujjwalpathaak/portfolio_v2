import React from "react";

const Social = ({ name, url }) => {
  return (
    <a className="h-9 w-9" href={url} target="_blank" rel="noopener noreferrer">
      <img src={`./${name}.svg`} alt={name} />
    </a>
  );
};

export default Social;
