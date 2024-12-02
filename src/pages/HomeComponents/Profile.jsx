import { FaLinkedin } from "react-icons/fa6"
import ProfilePicture from "../../assets/profile-picture.png"
import { Link } from "react-router-dom"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { useEffect, useState } from "react"

const Profile = () => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Detect dark mode
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(darkModeMediaQuery.matches);

        const handleChange = (e) => setIsDarkMode(e.matches);
        darkModeMediaQuery.addEventListener('change', handleChange);
        
        return () => darkModeMediaQuery.removeEventListener('change', handleChange);
    }, []);

    const handleMouseMove = (e, index) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - left,
            y: e.clientY - top
        });
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    const glowStyle = (index) => (
        hoveredCard === index
            ? {
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${
                      isDarkMode ? '#003468' : '#bebebe'
                  }, transparent)`,
                  transition: 'background 0.1s ease'
              }
            : {}
    );
  return (
    <div className='dark:bg-[#000810] bg-white font-montserrat'>
        <div className='mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl py-16'>
            <div className="flex flex-col-reverse lg:flex-row  items-center gap-10 h-full">
                <div className="max-w-lg xl:max-w-2xl bg-[#f9f9f9] dark:bg-[#001122] p-6 rounded-xl h-full">
                    <p className="text-sm">👋 Hey there, I'm</p>
                    <h3 className="text-3xl font-bold py-4 md:py-6">Sowunmi OluwaMmayowa</h3>
                    <p className="text-md ">I hold a National Diploma (ND) in Computer Science from the Federal Polytechnic Ilaro and am currently pursuing a Bachelor’s degree in Computer Science in the Prestigeous Federal University of Agriculture Abeokuta. My journey into tech has led me to a role as a front-end developer at Ovabor Labs, where I specialize in building dynamic, high-performance applications using the MERN stack—particularly with React, MongoDB, and Firebase.</p>
                    <p className="text-md mt-4">Outside of work, I’m an explorer of both digital and real-world landscapes. Whether diving into the latest web development trends or seeking new experiences outdoors, I’m always on the lookout for something fresh and exciting. I’m drawn to activities that challenge my perspective, spark creativity, and keep me moving forward in both life and career.</p>
                </div>
                <div className="bg-[#f9f9f9] dark:bg-[#001122] p-6 rounded-xl flex justify-center items-center h-full ">
                    <img src={ProfilePicture} alt="mayowa picture" className="w-1/2 h-1/2" />
                </div>
            </div>
            {/* <div className="flex gap-4 flex-col md:flex-row items-center pt-4">
                <Link to="#" className="flex gap-2 items-center w-full bg-[#f9f9f9] dark:bg-[#001122] p-6 rounded-xl h-full" >
                    <FaLinkedin className="text-2xl" />
                    <p>LinkedIn</p>
                </Link>
                <Link to="#" className="flex gap-2 items-center w-full bg-[#f9f9f9] dark:bg-[#001122] p-6 rounded-xl h-full">
                    <FaGithub className="text-2xl"/>
                    <p>LinkedIn</p>
                </Link>
                <Link to="#" className="flex gap-2 items-center w-full bg-[#f9f9f9] dark:bg-[#001122] p-6 rounded-xl h-full">
                    <FaTwitter className="text-2xl" />
                    <p>LinkedIn</p>
                </Link>
            </div> */}
            <div className="flex gap-4 flex-col lg:flex-row items-center pt-4">
            {[
                { icon: <FaLinkedin className="text-2xl" />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/sowunmi-oluwanayowa/' },
                { icon: <FaGithub className="text-2xl" />, label: 'GitHub', link: 'https://github.com/sowunmi-mayowa' },
                { icon: <FaTwitter className="text-2xl" />, label: 'Twitter', link: 'https://x.com/devmayowa' }
            ].map((item, index) => (
                <Link
                    target="_blank"
                    to={item.link}
                    key={index}
                    className="flex gap-2 items-center w-full bg-[#f9f9f9] dark:bg-[#001122] p-6 rounded-xl h-full relative overflow-hidden"
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={handleMouseLeave}
                    style={glowStyle(index)}
                >
                    {item.icon}
                    <p>{item.label}</p>
                </Link>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Profile