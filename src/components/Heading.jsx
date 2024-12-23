import React from "react";

const Heading = ({ heading, type }) => {
  if (type == "subheading") {
    return (
      <h6 className="mb-8 mt-24 text-lg font-bold text-heading">{heading}</h6>
    );
  }
  if (type == "name") {
    return <h1 className="text-4xl font-extrabold text-heading">{heading}</h1>;
  }
  if (type == "position") {
    return (
      <h1 className="mt-2 text-xl font-extrabold text-heading">{heading}</h1>
    );
  }
};

export default Heading;
