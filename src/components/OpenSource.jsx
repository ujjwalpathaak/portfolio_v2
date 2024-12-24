import React from "react";
import SkillTag from "./SkillTag";

const OpenSource = (prop) => {
  return (
    <div className="mb-10">
      <h6 className="text-xl font-bold text-heading">{prop.repository}</h6>
      <div className="flex">
        <img
          src={prop.logo}
          alt="location"
          className="mr-2 inline-block h-6 w-6"
        />
        <h6 className="text-xl font-bold text-heading">{prop.organization}</h6>
      </div>
      <p className="mt-2 break-all text-text">{prop.details}</p>
      <div className="mt-2 flex flex-wrap">
        {prop.technologies.map((technology) => (
          <SkillTag technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default OpenSource;
