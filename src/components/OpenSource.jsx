import React from "react";
import SkillTag from "./SkillTag";
import HighlightText from "./HighlightText";

const OpenSource = (prop) => {
  return (
    <div className="mb-10">
      <div className="flex">
        <img
          src={prop.logo}
          alt="location"
          className="mr-2 inline-block h-6 w-6"
        />
        <h6 className="text-xl font-bold text-heading">{prop.organization}</h6>
      </div>
      <p className="mt-2 text-text">
        <HighlightText
          text={prop.details}
          wordsToHighlight={prop.highlight_details}
        />
      </p>

      <div className="mt-2 flex flex-wrap">
        {prop.technologies.map((technology) => (
          <SkillTag technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default OpenSource;
