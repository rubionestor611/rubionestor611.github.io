import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../components/ThemeContext";
import { faGithub, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const {isDarkMode} = useTheme();
  return (
    <div id="contact" className={`${isDarkMode ? 'dark' : ''} scroll-mt-[90px]`}>
      <div className="bg-lightBG1 dark:bg-darkBG1 flex flex-col justify-center py-[24px] gap-[24px]">
        <p className="self-center text-lightText dark:text-darkText text-[24px] font-bold">Let's Connect</p>
        <div className="py-[20px] w-[90%] rounded self-center bg-lightAccent dark:bg-darkAccent text-[14px] text-lightText dark:text-darkText text-center">
          <p>I will gladly respond to any questions you may have and am always open to feedback!</p>
        </div>
        <div className="flex flex-row justify-evenly text-[50px] text-primary">
          <a target="_blank" href="https://github.com/rubionestor611" className="hover:text-lightAccent dark:hover:text-darkAccent hover:scale-125"><FontAwesomeIcon icon={faGithub}/></a>
          <a target="_blank" href="https://www.linkedin.com/in/rubio-nestor" className="hover:text-lightAccent dark:hover:text-darkAccent hover:scale-125"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a target="_blank" href="mailto:nestordrubio9@gmail.com" className="hover:text-lightAccent dark:hover:text-darkAccent hover:scale-125"><FontAwesomeIcon icon={faGoogle}/></a>
        </div>
        <ContactForm />
      </div> 
    </div>
  )
};

export default Contact;