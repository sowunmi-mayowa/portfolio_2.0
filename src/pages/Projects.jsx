import React from "react";
import { projectData } from "../utils/projects";
import ProjectCard from "../assets/components/ProjectCard";

const Projects = () => {
  return (
    <div className="bg-[#f9f9f9] dark:bg-[#162c42] font-montserrat flex items-center justify-center">
      <div className="mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl py-8 md:py-16">
        <div className="flex flex-col :justify-center md:items-center">
          <h1 className="font-semibold text-lg md:text-xl capitalize mb-2 max-w-[16rem] md:text-center">
            Projects
          </h1>
          <div className="hidden md:block">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="bg-[#fff] dark:bg-[#001122] rounded-3xl mb-4 border-2 border-[#ebebeb] dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center p-8">
                  <div>
                    <img
                      src={project.image}
                      alt="siQuote image"
                      className="h-auto object-cover rounded-lg w-[492px]"
                    />
                  </div>
                  <div className="px-2">
                    <div>
                      <h4 className="text-2xl font-bold">{project.title}</h4>
                      <p className="text-sm">Company: {project.company}</p>
                    </div>
                    <div className="my-4 flex gap-2">
                      {project.stack.map((stack, index) => (
                        <span
                          key={index}
                          className="rounded-full capitalize bg-[#ebebeb] dark:bg-[#1b2838] text-xs px-6 py-2"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                    <p className="mb-4 max-w-lg text-sm">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange text-white px-6 py-2 rounded-full text-sm"
                      >
                        View Project
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#f9f9f9] dark:bg-[#1b2838] px-6 py-2 rounded-full"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="md:hidden">
            {projectData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
