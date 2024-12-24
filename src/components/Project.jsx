import React from "react";
import SkillTag from "./SkillTag";

const Projects = ({ name, description, technologies, links, image }) => {
  return (
    <div className="mb-10 flex flex-col items-center lg:flex-row" key={name}>
      <div className="w-full lg:mr-6">
        <img src={image} alt={name}></img>
      </div>
      <div>
        <h6 className="text-xl font-bold text-heading">{name}</h6>
        <p className="break-all text-text">{description}</p>
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
