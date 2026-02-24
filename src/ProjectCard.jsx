import React from "react";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, image, link }) => {
  return (
    <div className="project-card">
      <div className="card-header">
        <span>{title}</span>
        <a href={link} target="_blank" rel="noreferrer">
          <FiExternalLink />
        </a>
      </div>

      <img src={image} alt={title} />
    </div>
  );
};

export default ProjectCard;
