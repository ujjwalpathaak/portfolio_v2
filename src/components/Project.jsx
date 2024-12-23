import React from "react";
import SkillTag from "./SkillTag";

const Projects = ({ name, description, technologies, links, image }) => {
  return (
    <div className="mb-10" key={name}>
      <h6 className="text-heading">{name}</h6>
      <p className="break-all text-text">{description}</p>
      <div className="mt-2 flex flex-wrap">
        {technologies.map((technology) => (
          <SkillTag technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
