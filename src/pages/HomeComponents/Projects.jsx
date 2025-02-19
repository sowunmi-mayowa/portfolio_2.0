import projectImg1 from "../../assets/project-img1.png"
import projectImg2 from "../../assets/project-img2.png"
import projectImg3 from "../../assets/project-img3.png"
import { Element } from "react-scroll"

const Projects = () => {
    const projectData = [
        {
            id: Math.floor(Math.random() * 1000),
            title: "SiQuote",
            company: "Ovabor Labs",
            stack: ["React", "firebase"],
            link: "https://si-quotes-v1-1.vercel.app/",
            image: projectImg1,
            description: "SiQuote allows users to compare and share pricing for satellite imagery services. It provides a streamlined platform to browse and evaluate quotes for satellite data, simplifying the decision-making process for individuals and organizations requiring geospatial information"
        },
        {
            id: Math.floor(Math.random() * 1000),
            title: "Equipfy",
            company: "Ovabor Labs",
            stack: ["React", "MongoDB", "Tailwind"],
            link: "https://equipfy-v1-1-1.onrender.com/",
            image: projectImg2,
            description: "eQuipfy is a platform for buying and selling used heavy equipment across Africa. It connects buyers and sellers, offering a user-friendly experience to trade machinery efficiently while promoting sustainable use of resources"
        },
        {
            id: Math.floor(Math.random() * 1000),
            title: "BrightLife Enhancement Service",
            company: "Client Project",
            stack: ["React", "MongoDB", "Tailwind"],
            link: "https://brightlifeenhancementservice.vercel.app/",
            image: projectImg3,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus iure porro minima similique suscipit atque quasi distinctio voluptatem fuga, obcaecati inventore expedita persp"
        }
    ]
  return (
    <Element name="projects">
        <div className='bg-[#f9f9f9] dark:bg-[#162c42] font-montserrat pb-12 lg:pb-0'> 
            <div className='mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl md:py-16 font-montserrat z-50'>
                <div className='flex flex-col :justify-center md:items-center mb-6'>
                    <p className="uppercase text-sm md:text-lg pt-8 pb-2">projects</p>
                    <h3 className="font-semibold text-lg md:text-xl capitalize mb-2 max-w-[16rem] md:text-center">Check out some of my recent works</h3>
                </div>
                {
                    projectData.map((project) => (
                        <div key={project.id} className='bg-[#fff] dark:bg-[#001122] rounded-3xl mb-4 border-2 border-[#ebebeb] dark:border-gray-700'>
                            <div className='flex flex-col md:flex-row gap-8 items-center p-8'>
                                <div>
                                    <img src={project.image} alt="siQuote image" />
                                </div>
                                <div className="px-2">
                                    <div>
                                        <h4 className="text-2xl font-bold">{project.title}</h4>
                                        <p className="text-sm">Company: {project.company}</p>
                                    </div>
                                    <div className="my-4 flex gap-2">
                                        {
                                            project.stack.map((stack, index) => (
                                                <span key={index} className="rounded-full capitalize bg-[#ebebeb] dark:bg-[#1b2838] text-xs px-6 py-2">{stack}</span>
                                            ))
                                        }
                                    </div>
                                    <p className="mb-4 max-w-lg text-sm">{project.description}</p>
                                    <div className="flex gap-4">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-orange text-white px-6 py-2 rounded-full text-sm">View Project</a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-[#f9f9f9] dark:bg-[#1b2838] px-6 py-2 rounded-full">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="flex justify-center mt-6">

                    <button className="bg-orange text-white px-6 py-2 rounded-full">See more</button>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default Projects