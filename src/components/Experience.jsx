import React from "react";
import SkillTag from "./SkillTag";
import HighlightText from "./HighlightText";

const Experience = ({
  title,
  company,
  role,
  duration,
  location,
  logo,
  details,
  highlight_details,
  technologies,
}) => {
  return (
    <div className="mb-10 rounded-md transition" key={company}>
      <p className="text-text">{duration}</p>

      <h6 className="text-xl font-bold text-heading">{title}</h6>
      <div className="flex">
        <div>
          {" "}
          <img
            src={logo}
            alt="location"
            className="mr-1 inline-block h-6 w-6"
          />
        </div>
        <div>
          <h6 className="text-xl font-bold text-heading">{company}</h6>
        </div>
      </div>
      <p className="text-text">{role}</p>
      <p className="mt-2 text-justify text-text">
        {" "}
        <HighlightText text={details} wordsToHighlight={highlight_details} />
      </p>
      {technologies && (
        <div className="mt-2 flex flex-wrap">
          {technologies.map((technology) => (
            <SkillTag technology={technology} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
