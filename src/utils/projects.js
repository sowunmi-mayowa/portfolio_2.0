import projectImg1 from "../assets/project-img1.png";
import projectImg2 from "../assets/project-img2.png";
import projectImg3 from "../assets/project-img3.png";
import projectImg4 from "../assets/project-img4.png";

export const projectData = [
  {
    id: Math.floor(Math.random() * 1000),
    title: "SiQuote",
    company: "Ovabor Labs",
    stack: ["React", "firebase"],
    link: "https://si-quotes-v1-1.vercel.app/",
    image: projectImg1,
    description:
      "SiQuote allows users to compare and share pricing for satellite imagery services. It provides a streamlined platform to browse and evaluate quotes for satellite data, simplifying the decision-making process for individuals and organizations requiring geospatial information",
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: "Equipfy",
    company: "Ovabor Labs",
    stack: ["React", "MongoDB", "Tailwind"],
    link: "https://equipfy-v1-1-1.onrender.com/",
    image: projectImg2,
    description:
      "eQuipfy is a platform for buying and selling used heavy equipment across Africa. It connects buyers and sellers, offering a user-friendly experience to trade machinery efficiently while promoting sustainable use of resources",
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: "BrightLife Enhancement Service",
    company: "Client Project",
    stack: ["React", "MongoDB", "Tailwind"],
    link: "https://brightlifeenhancementservice.vercel.app/",
    image: projectImg3,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus iure porro minima similique suscipit atque quasi distinctio voluptatem fuga, obcaecati inventore expedita persp",
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: "KaryaVest",
    company: "Ovabor Labs",
    stack: ["React", "CrewAI", "Tailwind", "OpenAI"],
    link: "https://karyavest.ovabor.com/",
    image: projectImg4,
    description:
      "KaryaVest is an AI-powered platform creates a tailored resume, customized cover letter and possible interview questions based on the job description provided by the user and the user's professional background",
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: "Dnoir Poetry Bar",
    company: "Client Project",
    stack: ["React", "Tailwind"],
    link: "https://d-noir.vercel.app/",
    image: projectImg2,
    description:
      "D'noir Poetry Bar is a website created to display the portfolio and price list of services of a professional ",
  },
];
