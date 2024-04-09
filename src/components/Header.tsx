import { useEffect, useState } from "react";
import lightLogo from "../assets/lightLogo.png";
import darkLogo from "../assets/darkLogo.png";
import { useTheme } from "./ThemeContext";
import { navLinks } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const {isDarkMode, toggleTheme} = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const activeClass = (link: string) => {
    return `#${activeSection}` == link ? 'underline font-bold' : 'hover:underline hover:decoration-dashed';
  }

  return (
    <header className={`${isDarkMode ? 'dark':''} fixed top-0 z-50 header h-[80px] w-screen ${isMenuOpen ? 'header-open' : ''}`}>
      <div className="flex h-[80px] justify-between items-center px-8 bg-lightBG2 dark:bg-darkBG2">
        <div className="flex flex-row justify-start items-center gap-16">
          {/* LOGO */}
          <div className="logo ">
            <a href="#home" onClick={() => {setIsMenuOpen(false);}}><img src={isDarkMode ? darkLogo : lightLogo} alt="Logo" className="h-8 cursor-pointer"/></a>
          </div>
          {/* TOGGLE */}
          <div className="flex flex-row h-[35px] w-[35px] justify-center items-center">
            <div onClick={toggleTheme} className={`${isDarkMode ? 'hidden' : 'flex'} text-yellow-500 text-[30px] cursor-pointer`}><FontAwesomeIcon icon={faSun}/></div>
            <div onClick={toggleTheme} className={`${!isDarkMode ? 'hidden' : 'flex'} text-slate-500 text-[30px] cursor-pointer`}><FontAwesomeIcon icon={faMoon}/></div>
          </div>
          
        </div>
        <div className="menu-toggle md:hidden text-lightText dark:text-darkText cursor-pointer" onClick={toggleMenu}>
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <nav className={`nav hidden md:flex md:items-center`}>
          <ul className="flex space-x-4">
            {
              navLinks.map((titleLink,index) => (
                <li key={`${index}`}><a href={titleLink[1]} className={`cursor-pointer text-lightText dark:text-darkText ${activeClass(titleLink[1])}`}>{titleLink[0]}</a></li>
              ))
            }
            <li><a href="https://firstgencs.com" target="_blank" className="bg-primary py-1 px-3 rounded-full text-lightBG1 dark:text-darkBG1 cursor-pointer font-bold">Blog</a></li>
          </ul>
        </nav>
      </div>
      <nav className={`absolute md:hidden h-screen bg-lightBG2 dark:bg-darkBG2 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0 w-screen' : 'translate-x-full w-0'} z-50`}>
        <ul className="flex flex-col items-end pr-[50px] pt-[100px] space-y-4">
        {
          navLinks.map((titleLink,index) => (
            <li key={`${index}`}><a href={titleLink[1]} className="cursor-pointer text-2xl text-lightText dark:text-darkText" onClick={toggleMenu}>{titleLink[0]}</a></li>
          ))
        }
        <li><a href="https://firstgencs.com" target="_blank" className="cursor-pointer text-2xl text-lightText dark:text-darkText">Blog</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;