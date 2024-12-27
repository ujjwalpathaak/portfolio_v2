import React from "react";
import SkillTag from "./SkillTag";
import HighlightText from "./HighlightText";

const Projects = ({
  name,
  description,
  highlight_descripion,
  technologies,
  links,
  image,
}) => {
  return (
    <div className="mb-10 flex flex-col items-start lg:flex-row" key={name}>
      <div className="mb-3 w-full lg:mb-6 lg:mr-6 lg:w-1/3">
        <img className="" src={image} alt={name}></img>
      </div>
      <div className="w-full lg:w-2/3">
        <h6 className="flex items-center justify-between text-xl font-bold text-heading">
          <div>{name}</div>
          <div className="flex gap-2">
            {links.map(({ img, url }) => (
              <a
                href={url}
                target="_blank"
                className="group relative overflow-hidden p-1"
              >
                <span className="absolute inset-0 -translate-x-full transform bg-yellow-300 transition-transform duration-300 group-hover:translate-x-0"></span>
                <img className="relative z-10 w-6" src={img} />
              </a>
            ))}
          </div>
        </h6>
        <p className="text-text">
          <HighlightText
            text={description}
            wordsToHighlight={highlight_descripion}
          />
        </p>
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
