import React from "react";
import SkillTag from "./SkillTag";
import HighlightText from "./HighlightText";

const Projects = ({ name, description, highlight_descripion, technologies, links, image }) => {
  return (
    <div className="mb-10 flex items-start" key={name}>
      <div className="w-1/4 mb-3 mr-6 lg:mb-6">
        <img className="" src={image} alt={name}></img>
      </div>
      <div className="w-3/4">
        <h6 className="text-xl justify-between items-center flex font-bold text-heading">
          <div>
          {name}
          </div>
          <div className="flex gap-2">
          {
            links.map(({ img, url }) => (
              <a
                href={url}
                target="_blank"
                className="relative group overflow-hidden p-1"
              >
                <span className="absolute inset-0 bg-yellow-300 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
                <img className="relative w-6 z-10" src={img} />
              </a>
            ))
          }
        </div></h6>
        <p className="text-text"><HighlightText text={description} wordsToHighlight={highlight_descripion} /></p>
        <div className="mt-2 flex flex-wrap">
          {technologies.map((technology) => (
            <SkillTag technology={technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
