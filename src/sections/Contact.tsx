import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../components/ThemeContext";
import { faGithub, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const {isDarkMode} = useTheme();
  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-lightBG1 dark:bg-darkBG1 flex flex-col justify-center py-[24px] gap-[24px]">
        <p className="self-center text-lightText dark:text-darkText text-[24px] font-bold">Let's Connect</p>
        <div className="py-[20px] w-[90%] rounded self-center bg-lightAccent dark:bg-darkAccent text-[14px] text-lightText dark:text-darkText text-center">
          <p>I will gladly respond to any questions you may have and am always open to feedback!</p>
        </div>
        <div className="flex flex-row justify-evenly text-[50px] text-primary">
          <FontAwesomeIcon icon={faGithub}/>
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGoogle}/>
        </div>
        <ContactForm />
      </div> 
    </div>
  )
};

export default Contact;