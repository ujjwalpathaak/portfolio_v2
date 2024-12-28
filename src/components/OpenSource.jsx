import React from "react";
import SkillTag from "./SkillTag";
import HighlightText from "./HighlightText";
import PullRequestsOverview from "./PullRequestOverview";

const OpenSource = (prop) => {
  return (
    <div className="mb-10" id={prop.repository}>
      <div className="flex">
        <img
          src={prop.logo}
          alt="location"
          className="mr-2 inline-block h-6 w-6"
        />
        <h6 className="text-xl font-bold text-heading">{prop.organization}</h6>
      </div>
      <div className="mt-2 mb-6">
      <HighlightText text={prop.introduction} wordsToHighlight={prop.highlight_introduction} />
      </div>
      <PullRequestsOverview details={prop.details} highlight_details={prop.highlight_details} />
      <div className="mt-4 flex flex-wrap">
        {prop.technologies.map((technology) => (
          <SkillTag technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default OpenSource;
