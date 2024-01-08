import { useState } from "react";
import lightLogo from "../assets/lightLogo.png";
import darkLogo from "../assets/darkLogo.png";
import { useTheme } from "./ThemeContext";
import { navLinks } from "../utils/utils";

const Header = () => {
  const {isDarkMode, toggleTheme} = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [section, setSection] = useState('#home');
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const activeClass = (link: string) => {
    return section == link ? 'underline font-bold' : 'hover:underline hover:decoration-dashed';
  }

  return (
    <header className={`${isDarkMode ? 'dark':''} header h-[80px] ${isMenuOpen ? 'header-open' : ''}`}>
      <div className="flex h-[80px] justify-between items-center px-4 bg-lightBG2 dark:bg-darkBG2">
        {/* LOGO */}
        <div className="logo ">
          <a href="#home" onClick={() => {setIsMenuOpen(false); setSection('#home')}}><img src={isDarkMode ? darkLogo : lightLogo} alt="Logo" className="h-8"/></a>
        </div>
        {/* TOGGLE */}
        <div>
          <input
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            onChange={toggleTheme}
            checked={isDarkMode}
          />
        </div>
        <div className="menu-toggle md:hidden text-lightText dark:text-darkText" onClick={toggleMenu}>
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
                <li key={`${index}`}><a href={titleLink[1]} onClick={() => setSection(titleLink[1])} className={`cursor-pointer text-lightText dark:text-darkText ${activeClass(titleLink[1])}`}>{titleLink[0]}</a></li>
              ))
            }
            <li><a href="https://firstgencs.com" target="_blank" className="bg-primary py-1 px-3 rounded-full text-lightBG1 dark:text-darkBG1">Blog</a></li>
          </ul>
        </nav>
      </div>
        <nav className={`absolute md:hidden h-screen bg-lightBG2 dark:bg-darkBG2 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0 w-screen' : 'translate-x-full w-0'} z-10`}>
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