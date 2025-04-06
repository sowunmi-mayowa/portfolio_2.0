import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#fff] dark:bg-[#001122]  px-4 py-6 rounded-2xl shadow-md max-w-sm border-2 border-[#ebebeb] dark:border-gray-700 mb-6">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40  rounded-xl"
      />
      <h3 className="text-xl font-semibold mt-3">{project.title}</h3>
      <p className="text-sm text-gray-400">Company: {project.company}</p>
      <div className="flex gap-2 mt-2">
        {project.stack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-700 text-white dark:bg-gray-300 dark:text-black px-2 py-1 text-xs rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-sm mt-3">{project.description}</p>
      <div className="flex justify-between mt-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange text-white px-6 py-2 rounded-md text-sm"
        >
          View Project
        </a>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md">Github</button>
      </div>
    </div>
  );
};

export default ProjectCard;
