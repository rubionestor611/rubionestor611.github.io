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
        <a href="#home" className="flex flex-row justify-center"><img src={isDarkMode ? darkLogo : lightLogo} alt="Logo" className="h-8 self-center"/></a>
        {/* LINKS */}
        <ul className="flex flex-row justify-center flex-wrap space-x-20">
          {
            navLinks.map(titleLink => (
              <li><a href={titleLink[1]} className="text-lightText dark:text-darkText">{titleLink[0]}</a></li>
            ))
          }
        </ul>
        {/* HYPERLINKS */}
        <div className="flex flex-row justify-center space-x-20">
          <a href="https://github.com/rubionestor611" target="_blank" className="text-primary"><FontAwesomeIcon icon={faGithub} size="2xl"/></a>
          <a href="https://www.linkedin.com/in/rubio-nestor" target="_blank" className="text-primary"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;