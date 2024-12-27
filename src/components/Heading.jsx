import React from "react";

const Heading = ({ heading, type }) => {
  if (type == "subheading") {
    return (
      <h6 className="mb-8 mt-24 text-lg font-bold text-heading underline underline-offset-4 lg:mt-32">
        {heading}
      </h6>
    );
  }
  if (type == "name") {
    return (
      <h1 className="text-3xl font-extrabold text-heading lg:text-5xl">
        {heading}
      </h1>
    );
  }
  if (type == "position") {
    return (
      <h1 className="mt-1 text-xl font-extrabold text-heading lg:mt-2 lg:text-3xl">
        {heading}
      </h1>
    );
  }
};

export default Heading;
