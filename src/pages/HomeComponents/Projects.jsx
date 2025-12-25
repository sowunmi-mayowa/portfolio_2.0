import ProjectCard from "../../assets/components/ProjectCard";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { projectData } from "../../utils/projects";
import Reveal from "../../components/ui/reveal";

const Projects = () => {
  return (
    <Element name="projects">
      <Reveal
        direction="up"
        delay={0.1}
        className="bg-[#f9f9f9] dark:bg-[#162c42] font-montserrat pb-12 lg:pb-0"
      >
        <div className="mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl md:py-16 font-montserrat z-50">
          <Reveal direction="up" delay={0.15}>
            <div className="flex flex-col :justify-center md:items-center mb-6">
              <p className="uppercase text-sm md:text-lg pt-8 pb-2">projects</p>
              <h3 className="font-semibold text-lg md:text-xl capitalize mb-2 max-w-[16rem] md:text-center">
                Check out some of my recent works
              </h3>
            </div>
          </Reveal>
          <div className="hidden md:block">
            {projectData.slice(0, 3).map((project, idx) => (
              <Reveal
                key={project.id}
                direction={idx % 2 === 0 ? "left" : "right"}
                delay={0.1 + idx * 0.1}
                className="bg-[#fff] dark:bg-[#001122] rounded-3xl mb-4 border-2 border-[#ebebeb] dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center p-8">
                  <div>
                    <img
                      src={project.image}
                      alt="siQuote image"
                      className="w-full h-auto object-cover rounded-lg"
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
              </Reveal>
            ))}
          </div>
          <div className="md:hidden">
            {projectData.slice(0, 3).map((project, idx) => (
              <Reveal key={project.id} direction="up" delay={0.1 + idx * 0.1}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link
              to="/projects"
              className="bg-orange text-white px-6 py-2 rounded-full"
            >
              See more
            </Link>
            {/* <button className="bg-orange text-white px-6 py-2 rounded-full">See more</button> */}
          </div>
        </div>
      </Reveal>
    </Element>
  );
};

export default Projects;
