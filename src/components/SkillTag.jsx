import React from "react";

const SkillTag = ({ small, technology }) => {
  return (
    <>
      {small ? (
        <span className="mb-1 rounded-lg bg-skillBg px-1 py-1 text-center text-xs text-skillText">
          {technology}
        </span>
      ) : (
        <span className="mb-1 mr-1 rounded-lg bg-skillBg px-3 py-1 text-sm text-skillText">
          {technology}
        </span>
      )}
    </>
  );
};

export default SkillTag;
