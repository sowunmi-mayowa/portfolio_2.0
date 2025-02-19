import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
      <footer className="bg-[#f9f9f9] dark:bg-[#001122] p-8 rounded-xl mt-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-col md:flex-row">
          
          {/* Brand / About Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Sowunmi Oluwamayowa</h2>
            <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
              Building innovative solutions one step at a time.
            </p>
          </div>
  
       
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-6 pt-4 md:pt-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition text-lg">
              <FaGithub />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition text-lg">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition text-lg">
              <FaInstagram />
            </a>
          </div>
  
        </div>
  
        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Sowunmi Oluwamayowa. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  