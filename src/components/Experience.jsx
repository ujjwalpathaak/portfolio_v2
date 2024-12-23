import React from "react";
import SkillTag from "./SkillTag";

const Experience = ({
  title,
  company,
  role,
  duration,
  location,
  logo,
  details,
  technologies,
}) => {
  return (
    <div className="mb-10" key={company}>
      <p className="text-text">{duration}</p>

        <h6 className="text-xl font-bold text-heading">{title}</h6>
      <div className="flex">
        <div> <img src={logo} alt="location" className="w-6 h-6 mr-1 inline-block" /></div>
        <div>  
          <h6 className="text-xl font-bold text-heading">{company}</h6></div>

      </div>
      <p className="text-text">{role}</p>
      <p className="mt-2 break-all text-text">{details}</p>
      <div className="mt-2 flex flex-wrap">
        {technologies.map((technology) => (
          <SkillTag technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
