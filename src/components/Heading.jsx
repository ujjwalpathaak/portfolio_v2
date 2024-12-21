import React from "react";

const Heading = ({ heading }) => {
  return (
    <h6 className="text-md mb-6 mt-12 font-semibold text-textPrimary">
      {heading}
    </h6>
  );
};

export default Heading;
