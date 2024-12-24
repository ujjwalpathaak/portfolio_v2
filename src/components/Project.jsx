import React from "react";
import SkillTag from "./SkillTag";

const Projects = ({ name, description, technologies, links, image }) => {
  return (
    <div className="mb-10 flex flex-col items-center lg:flex-row" key={name}>
      <div className="lg:mr-6 lg:w-1/3">
        <img className="" src={image} alt={name}></img>
      </div>
      <div className="lg:w-2/3">
        <h6 className="text-xl font-bold text-heading">{name}</h6>
        <p className="break-all text-text">{description}</p>
        <div className="mt-2 flex flex-wrap">
          {technologies.map((technology) => (
            <SkillTag technology={technology} />
          ))}
        </div>
        <div className="flex gap-2 mt-2">
        {
          links.map(({ img, url }) => (
            <a href={url} target="_blank" className="">
              <img className="w-7" src={img} />
            </a>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default Projects;
