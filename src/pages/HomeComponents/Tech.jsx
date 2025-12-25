import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
import { FaHtml5, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandVite } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import Reveal from "../../components/ui/reveal";

const Tech = () => {
  const stacks = [
    {
      icon: <FaHtml5 className="text-orange" />,
      text: "Html & CSS",
    },
    {
      icon: <TbBrandJavascript className="text-orange" />,
      text: "Javascript",
    },
    {
      icon: <FaReact className="text-orange" />,
      text: "Reactjs",
    },
    {
      icon: <FaNodeJs className="text-orange" />,
      text: "Nodejs",
    },
    {
      icon: <TbBrandVite className="text-orange" />,
      text: "Vite",
    },
    {
      icon: <BiLogoTypescript className="text-orange" />,
      text: "Typescript",
    },
    {
      icon: <RiTailwindCssFill className="text-orange" />,
      text: "TailwindCSS",
    },
    {
      icon: <IoLogoFirebase className="text-orange" />,
      text: "Firebase",
    },
    {
      icon: <DiMongodb className="text-orange" />,
      text: "MongoDB",
    },
  ];

  return (
    <Reveal direction="up" delay={0.1} className="bg-white dark:bg-[#001122]">
      <div className="mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl py-16 font-montserrat z-50">
        <Reveal direction="up" delay={0.15}>
          <p className="uppercase text-sm md:text-lg py-2 md:py-4">stacks</p>
          <h3 className="font-semibold text-lg max-w-[270px] md:max-w-[500px] md:text-xl capitalize mb-2">
            These are the tech stacks i work with
          </h3>
        </Reveal>
        <InfiniteMovingCards
          items={stacks}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
      </div>
    </Reveal>
  );
};

export default Tech;
