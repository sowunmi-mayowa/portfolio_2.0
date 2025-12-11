import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
import bgOverlay from "../../assets/bg-overlay.png";
import hero from "../../assets/hero-img.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };
  const words = [
    {
      text: "Hello, I'm devMayowa,",
    },
  ];

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between w-full font-montserrat pt-28 h-[inherit] lg:h-screen px-6 md:px-12 xl:px-0 xl:max-w-6xl pb-28 mx-auto">
      {/* Background Overlay (Optional) */}
      {/* <img src={bgOverlay} alt="" className="absolute inset-0 opacity-50 dark:opacity-50 hidden md:block" /> */}

      <motion.div
        className="w-full max-w-lg text-left break-words"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <TypewriterEffectSmooth words={words} />
        </motion.div>
        <motion.h3 variants={itemVariants} className="text-xl md:text-3xl font-bold">
          Welcome to my Portfolio website.
        </motion.h3>
        <motion.p variants={itemVariants} className="mt-2 text-md md:text-lg max-w-xl">
          I transform ideas into digital realities, focusing on creating unique
          and engaging experiences for users.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link to="contact" smooth={true} duration={500}>
            <button className="mt-6 bg-orange text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105">
              Reach out
            </button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-8 lg:mt-0 w-[80%] max-w-[400px] md:max-w-[500px] lg:max-w-[550px]"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={hero}
          alt="Hero image"
          loading="lazy"
          decoding="async"
          className="w-full h-auto block mx-auto lg:mx-0"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
