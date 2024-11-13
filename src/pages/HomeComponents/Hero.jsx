import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect"
import bgOverlay from "../../assets/bg-overlay.png"

const Hero = () => {
    const words = [
        {
          text: "Hello, I'm devMayowa,",
        },
      ]
      const words2 = [
        {
          text: "Welcome to my  protfolio website.",
        }
      ]
  return (
    <div className="h-3/4 flex justify-center items-center flex-col font-montserrat mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl" >
        <img src={bgOverlay} alt=""  className="absolute opacity-50 dark:opacity-30"/>
        <TypewriterEffectSmooth words={words} />
        <TypewriterEffectSmooth words={words2}  className="hidden md:block"/>
        <h3 className="text-lg font-bold text-center max-w-sm  md:hidden">Welcome to my Portfolio website.</h3>
        <p className="mb-6 text-md md:text-lg max-w-xl text-center">I transform ideas into digital realities, focusing on creating unique and engaging experiences for users.</p>
        <button className="bg-orange text-white px-6 py-3 rounded-full">Reach out</button>
    </div>

  )
}

export default Hero