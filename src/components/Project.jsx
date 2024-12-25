import React from "react";
import SkillTag from "./SkillTag";
import HighlightText from "./HighlightText";

const Projects = ({ name, description, highlight_descripion, technologies, links, image }) => {
  return (
    <div className="mb-10 flex flex-col items-center lg:flex-row" key={name}>
      <div className="w-full mb-3 lg:mb-0 lg:mr-6 lg:w-1/3">
        <img className="" src={image} alt={name}></img>
      </div>
      <div className="w-full lg:w-2/3">
        <h6 className="text-xl font-bold text-heading">{name}</h6>
        <p className="text-text"><HighlightText text={description} wordsToHighlight={highlight_descripion} /></p>
        <div className="mt-2 flex flex-wrap">
          {technologies.map((technology) => (
            <SkillTag technology={technology} />
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          {
            links.map(({ img, url }) => (
              <a
                href={url}
                target="_blank"
                className="relative group overflow-hidden p-1"
              >
                <span className="absolute inset-0 bg-yellow-300 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
                <img className="relative w-7 z-10" src={img} />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;
