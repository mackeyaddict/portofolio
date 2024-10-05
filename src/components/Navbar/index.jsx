import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 120; 
      setIsScrolled(window.scrollY > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full border-y-4 border-black transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 z-[9999] bg-white shadow-lg' : ''}`}>
      <div className="mx-auto flex items-stretch relative">

        <div className="border-r-0 md:border-r-4 md:border-black p-4 flex items-center justify-center w-32">
          <img src={Logo} alt="Logo" className="h-16 w-16" />
        </div>

        <div className="md:hidden flex items-center ml-auto pr-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className={`absolute top-full left-0 right-0 bg-white border-b-4 border-black md:relative md:top-0 md:left-0 md:right-0 md:border-b-0 md:flex md:flex-1 ${isOpen ? 'block border-t-2' : 'hidden'}`}>
          <ul className="md:flex md:flex-1 md:items-stretch">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="md:flex-1 md:border-r-4 border-black last:border-r-0"
              >
                <a
                  href={item.href}
                  className="flex items-center justify-center h-full px-6 py-4 md:py-0 text-lg font-bold text-black hover:bg-yellow-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="md:border-l-4 border-black">
            <a
              href="https://drive.google.com/file/d/1OzLt-4ZqK8l5_jAzU965bgWArnuYQAlz/view"
              download
              className="flex items-center justify-center px-6 py-4 bg-black text-yellow-400 font-bold hover:bg-gray-800 transition-colors duration-300 h-full"
            >
              <span className="mr-2">Download CV</span>
              <FaDownload size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;