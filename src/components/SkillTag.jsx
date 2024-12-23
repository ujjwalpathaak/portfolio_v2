import React from "react";

const SkillTag = ({ technology }) => {
  return (
    <span className="mb-1 mr-1 rounded-lg bg-skillBg px-3 py-1 text-sm text-skillText">
      {technology}
    </span>
  );
};

export default SkillTag;
