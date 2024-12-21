import React from "react";

const Experience = ({ title, company, role, duration, location, details }) => {
  return (
    <div className="mb-10" key={company}>
      <p className="text-textSecondary">{duration}</p>
      <h6 className="text-textPrimary">
        {title} | {company}
      </h6>
      <p className="text-textSecondary">{role}</p>
      <p className="text-textSecondary">{location}</p>
      <p className="text-textSecondary">{details}</p>
    </div>
  );
};

export default Experience;
