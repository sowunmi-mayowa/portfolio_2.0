import { Link, useParams } from "react-router-dom";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";
import Seo from "../components/Seo";
import { projectData } from "../utils/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectData.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen p-8 pt-32">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link to="/projects" className="inline-block mt-4 text-orange">View all projects</Link>
      </main>
    );
  }

  const title = `${project.title} Case Study | Mayowa Sowunmi`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `https://devmayowa.dev/projects/${project.slug}`,
    creator: { "@type": "Person", name: "Mayowa Sowunmi", url: "https://devmayowa.dev" },
    keywords: project.stack.join(", "),
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] dark:bg-[#000810] font-montserrat">
      <Seo title={title} description={project.description} path={`/projects/${project.slug}`} type="article" schema={schema} />
      <Navbar />
      <main className="mx-8 md:mx-12 xl:mx-auto xl:max-w-5xl pt-32 pb-16">
        <Link to="/projects" className="text-sm text-orange">Back to all projects</Link>
        <h1 className="text-3xl md:text-5xl font-bold mt-5 mb-3">{project.title}</h1>
        <p className="text-sm mb-8">Built for {project.company}</p>
        <img
          src={project.image}
          alt={`${project.title} web application interface`}
          width="1200"
          height="750"
          className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
        />
        <div className="max-w-3xl mt-10">
          <h2 className="text-2xl font-bold mb-3">Project overview</h2>
          <p className="leading-7">{project.description}</p>
          <h2 className="text-2xl font-bold mt-10 mb-3">Technology used</h2>
          <ul className="flex flex-wrap gap-2" aria-label="Technology used">
            {project.stack.map((item) => <li key={item} className="bg-gray-200 dark:bg-[#1b2838] px-4 py-2 text-sm rounded">{item}</li>)}
          </ul>
          {project.link !== "#" && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-10 bg-orange text-white px-6 py-3 rounded">
              Visit live project
            </a>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
