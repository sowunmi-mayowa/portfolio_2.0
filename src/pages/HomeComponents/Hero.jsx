import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
import bgOverlay from "../../assets/bg-overlay.png";
import hero from "../../assets/hero-img.png";

const Hero = () => {
  const words = [
    {
      text: "Hello, I'm devMayowa,",
    },
  ];

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between w-full font-montserrat pt-28 h-[inherit] lg:h-screen px-6 md:px-12 xl:px-0 xl:max-w-6xl pb-28 mx-auto">
      {/* Background Overlay (Optional) */}
      {/* <img src={bgOverlay} alt="" className="absolute inset-0 opacity-50 dark:opacity-50 hidden md:block" /> */}

      <div className="w-full max-w-lg text-left break-words">
        <TypewriterEffectSmooth words={words} />
        <h3 className="text-xl md:text-3xl font-bold mt-4">
          Welcome to my Portfolio website.
        </h3>
        <p className="mt-2 text-md md:text-lg max-w-xl">
          I transform ideas into digital realities, focusing on creating unique
          and engaging experiences for users.
        </p>
        <button className="mt-6 bg-orange text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105">
          Reach out
        </button>
      </div>

      <div className="mt-8 lg:mt-0 w-[80%] max-w-[400px] md:max-w-[500px] lg:max-w-[550px]">
        <img
          src={hero}
          alt="Hero image"
          loading="lazy"
          decoding="async"
          className="w-full h-auto block mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
};

export default Hero;
