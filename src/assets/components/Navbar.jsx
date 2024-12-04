import Swiitch from "./Swiitch"
import { Link } from "react-scroll"
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pt-4 fixed w-full top-2 z-50">
        <div className="mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl md:py-8 font-montserrat sticky top-3 z-50">
            <div className="flex justify-between items-center bg-[#ebebeb] dark:bg-[#0d151c] p-4 md:p-8 rounded-full border-black dark:border-[#566370] border">
                <div className="font-bold text-xl">devMayowa</div>
                <div className="hidden lg:block">
                    <ul>
                        <Link to="/">
                            <li className="inline-block px-4 text-sm capitalize">home</li>
                        </Link>
                        <Link to='projects' smooth={true} duration={500}>
                            <li className="inline-block px-4 text-sm capitalize cursor-pointer">projects</li>
                        </Link>
                        <Link to='about' smooth={true} duration={500}>
                            <li className="inline-block px-4 text-sm capitalize cursor-pointer">about</li>
                        </Link>
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <div className="flex items-center gap-6 ">
                        <Link to='contact' smooth={true} duration={500}>
                            <button className="bg-orange text-white px-6 py-3 rounded-full">Reach out</button>
                        </Link>
                        <Swiitch />
                    </div>
                </div>
                {
                    !isOpen ?
                    <IoMenuSharp  className="lg:hidden cursor-pointer text-2xl" onClick={() => setIsOpen(!isOpen)}/> :
                    <ImCancelCircle className="lg:hidden cursor-pointer text-2xl" onClick={() => setIsOpen(!isOpen)} />
                }
            </div>
        </div>
        <div className={`lg:hidden fixed z-10 top-0 pt-20 right-0 h-[300px] w-full bg-[#ebebeb] dark:bg-[#0d151c] transition-transform transform ${isOpen ? "translate-y-0" : "-translate-y-full"} ease-in-out duration-700 shadow-lg`}>
            <div className={`flex gap-4 flex-col justify-start py-4 capitalize font-semibold px-6  `}>
                <ul className="flex flex-col gap-4">    
                    <Link to="/">
                        <li className="inline-block px-4 text-sm capitalize text-black dark:text-gray-400">home</li>
                    </Link>
                    <Link to='projects' smooth={true} duration={500}>
                        <li className="inline-block px-4 text-sm capitalize cursor-pointer">projects</li>
                    </Link>
                    <Link to='about' smooth={true} duration={500}>
                        <li className="inline-block px-4 text-sm capitalize cursor-pointer">about</li>
                    </Link>
                </ul>
                <div className="flex items-center gap-6 ">
                    <Link to='contact' smooth={true} duration={500}>
                        <button className="bg-orange text-white px-6 py-3 cursor-pointer rounded-full">Reach out</button>
                    </Link>
                    <Swiitch />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar