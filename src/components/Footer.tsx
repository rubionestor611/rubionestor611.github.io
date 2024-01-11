import { useTheme } from "./ThemeContext";
import darkLogo from "../assets/darkLogo.png";
import lightLogo from "../assets/lightLogo.png";
import { navLinks } from "../utils/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const {isDarkMode} = useTheme();

  return (
    <div className={`${isDarkMode ? 'dark':''}`}>
      <div className="bg-lightBG2 dark:bg-darkBG2 h-full w-full flex flex-col justify-center gap-4 py-8">
        {/* LOGO */}
        <a href="#home" className="flex flex-row justify-center cursor-pointer"><img src={isDarkMode ? darkLogo : lightLogo} alt="Logo" className="h-8 self-center"/></a>
        {/* LINKS */}
        <ul className="flex flex-row justify-center flex-wrap px-[15px]">
          {
            navLinks.map((titleLink, index) => (
              <li key={`${index}`}><a href={titleLink[1]} className="text-lightText dark:text-darkText mx-2 cursor-pointer">{titleLink[0]}</a></li>
            ))
          }
          <li><a href="https://firstgencs.com" target="_blank" className="text-lightText dark:text-darkText mx-2 cursor-pointer">Blog</a></li>
        </ul>
        {/* HYPERLINKS */}
        <div className="flex flex-row justify-center space-x-20 text-[30px]">
          <a href="https://github.com/rubionestor611" target="_blank" className="text-primary hover:text-lightAccent dark:hover:text-darkAccent hover:scale-125 cursor-pointer"><FontAwesomeIcon icon={faGithub}/></a>
          <a href="https://www.linkedin.com/in/rubio-nestor" target="_blank" className="text-primary hover:text-lightAccent dark:hover:text-darkAccent hover:scale-125 cursor-pointer"><FontAwesomeIcon icon={faLinkedin}/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;