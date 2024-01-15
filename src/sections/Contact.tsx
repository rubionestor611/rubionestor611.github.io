import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../components/ThemeContext";
import { faGithub, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const {isDarkMode} = useTheme();
  return (
    <div id="contact" className={`section ${isDarkMode ? 'dark' : ''} scroll-mt-[90px]`}>
      <div className="bg-lightBG1 dark:bg-darkBG1 flex flex-col justify-center py-[24px] gap-[24px]">
        <p className="self-center text-lightText dark:text-darkText text-[24px] font-bold">Let's Connect</p>
        <div className="py-[20px] w-[90%] rounded self-center bg-lightAccent dark:bg-darkAccent text-[14px] text-lightText dark:text-darkText text-center">
          <p>I will gladly respond to any questions you may have and am always open to feedback!</p>
        </div>
        <div className="flex flex-col justify-center gap-[24px] sm:flex-row sm:w-[90%] sm:self-center sm:justify-start sm:gap-[20px]">
          <div className="flex flex-row justify-evenly text-[50px] text-primary sm:flex-col w-[90%] self-center sm:self-auto sm:w-auto">
            <div className="border-t-2 border-lightText dark:border-darkText self-center flex-1 h-0 sm:h-full sm:border-t-0 sm:border-r-2"/>
            <a target="_blank" href="https://github.com/rubionestor611" className="mx-2 sm:mx-0 sm:my-2 hover:text-lightAccent dark:hover:text-darkAccent hover:scale-125 cursor-pointer"><FontAwesomeIcon icon={faGithub}/></a>
            <div className="border-t-2 border-lightText dark:border-darkText self-center flex-1 h-0 sm:h-full sm:border-t-0 sm:border-r-2"/>
            <a target="_blank" href="https://www.linkedin.com/in/rubio-nestor" className="mx-2 sm:mx-0 sm:my-2 hover:text-lightAccent dark:hover:text-darkAccent hover:scale-125 cursor-pointer"><FontAwesomeIcon icon={faLinkedin} /></a>
            <div className="border-t-2 border-lightText dark:border-darkText self-center flex-1 h-0 sm:h-full sm:border-t-0 sm:border-r-2"/>
            <a target="_blank" href="mailto:nestordrubio9@gmail.com" className="mx-2 sm:mx-0 sm:my-2 hover:text-lightAccent dark:hover:text-darkAccent hover:scale-125 cursor-pointer"><FontAwesomeIcon icon={faGoogle}/></a>
            <div className="border-t-2 border-lightText dark:border-darkText self-center flex-1 h-0 sm:h-full sm:border-t-0 sm:border-r-2"/>
          </div>
          <ContactForm />
        </div>
      </div> 
    </div>
  )
};

export default Contact;