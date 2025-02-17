import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react";
import logo from "../assets/logo-new.png"
import { GrHome } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const linkstyle = "flex items-center gap-2 transition-all duration-300 ease-in border-b-2 border-transparent";

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar Container */}
      <div className={`py-5 sm:py-6 flex items-center  w-full justify-between sticky top-0 z-50 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[#1b1a2ea9] backdrop-blur-[15px] ${isScrolled ? 'bg-[#1b1a2ea9] sm:backdrop-blur-[15px]' : 'sm:bg-transparent'}`}>
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[95px] h-[15px] sm:w-[160px] sm:h-[25px] cursor-pointer"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden sm:block">
          <ul className="flex gap-12">
            <li className="raleway-link flex items-center gap-2 text-white">
              <NavLink to="/" className={linkstyle}><GrHome /> Home</NavLink>
            </li>
            <li className="raleway-link flex items-center gap-2 text-white">
              <NavLink to="/about" className={linkstyle}><AiOutlineUser /> About</NavLink>
            </li>
            <li className="raleway-link flex items-center gap-2 text-white">
              <NavLink to="/projects" className={linkstyle}><LiaLaptopCodeSolid /> Projects</NavLink>
            </li>
            <li className="raleway-link flex items-center gap-2 text-white">
              <NavLink to="/resume" className={linkstyle}><IoDocumentTextOutline /> Resume</NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden flex items-center relative justify-center">
          {/* Cross Icon */}
          <RxCross1
            onClick={toggleMobileMenu}
            className={`text-[#C770F0] text-2xl cursor-pointer transition-all duration-500 ease-in-out transform absolute right-[1px] ${isMenuOpen ? 'opacity-100 -rotate-180' : 'opacity-0 rotate-0'
              }`}
          />
          {/* Menu Icon */}
          <HiOutlineMenuAlt3
            onClick={toggleMobileMenu}
            className={`text-[#C770F0] text-2xl cursor-pointer transition-all duration-500 ease-in-out transform absolute right-[1px] ${isMenuOpen ? 'opacity-0 -rotate-180' : 'opacity-100 rotate-0'
              }`}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-[54px] left-0 w-full transition-all duration-500 ease-in-out bg-[#1b1a2ea9] backdrop-blur-[15px]
          ${isMenuOpen ? "opacity-100 max-h-screen pt-6 pb-10" : "opacity-0 max-h-0 overflow-hidden"}`}>
        <ul className="flex flex-col gap-10 justify-center w-full items-center">
          <li className="raleway-link flex items-center gap-2 text-white">
            <NavLink to="/" className={linkstyle} onClick={toggleMobileMenu}>
              <GrHome /> Home
            </NavLink>
          </li>
          <li className="raleway-link flex items-center gap-2 text-white">
            <NavLink to="/about" className={linkstyle} onClick={toggleMobileMenu}>
              <AiOutlineUser /> About
            </NavLink>
          </li>
          <li className="raleway-link flex items-center gap-2 text-white">
            <NavLink to="/projects" className={linkstyle} onClick={toggleMobileMenu}>
              <LiaLaptopCodeSolid /> Projects
            </NavLink>
          </li>
          <li className="raleway-link flex items-center gap-2 text-white">
            <NavLink to="/resume" className={linkstyle} onClick={toggleMobileMenu}>
              <IoDocumentTextOutline /> Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
