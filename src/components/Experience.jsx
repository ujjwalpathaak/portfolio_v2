import React from "react";

const Experience = ({ title, company, role, duration, location, details, technologies }) => {
  return (
    <div className="mb-10" key={company}>
      <p className="text-text">{duration}</p>
      <h6 className="text-heading">
        {title} | {company}
      </h6>
      <p className="text-text">{role}</p>
      <p className="text-text">{location}</p>
      <p className="text-text">{details}</p>
      <div className="mt-2">

      {
        technologies.map((technology) => (
          <span className="text-skillText bg-skillBg px-2 py-1 mr-1 rounded-xl">{technology}</span>
        ))
      }
      </div>
    </div>
  );
};

export default Experience;
