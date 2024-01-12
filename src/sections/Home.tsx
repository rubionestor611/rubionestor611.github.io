import { useEffect } from "react";
import { useTheme } from "../components/ThemeContext";
import useTypingText from "../utils/useTypingText";
import { words } from "../utils/utils";
import selfie from "../assets/selfie.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Resume from "../assets/RubioNestorResume.pdf";
const  Home = () => {
  const {isDarkMode} = useTheme();
  const {word, stop, text} = useTypingText(words,130,20)

  const primaryText = "self-center text-[40px] text-primary font-bold";
  const secondaryText = "self-center text-[20px] text-lightText dark:text-darkText"
  useEffect(()=>{
    if(text == words[words.length - 1]) {
      stop();
    }
  },[text])

  return (
    <div id="home" className={`${isDarkMode ? 'dark':''} flex flex-col justify-center`}>
      <div className=" bg-lightBG1 dark:bg-darkBG1 justify-center flex flex-col pt-[80px]">
        {/* IMAGE */}
        <img src={selfie} className="self-center rounded-2xl h-[200px] w-[200px] bg-lightAccent dark:bg-darkAccent my-4 object-contain cursor-default"/>
        {/* ISLAND */}
        <div className="flex flex-row justify-center w-[90%] self-center">
          <div className="border-t-2 border-lightText dark:border-darkText self-center flex-1 h-0"/>
          <a href="https://github.com/rubionestor611" target="_blank" className="text-[30px] mx-2 text-primary hover:text-lightAccent dark:hover:text-darkAccent hover:scale-125 cursor-pointer"><FontAwesomeIcon icon={faGithub}/></a>
          <div className="border-t-2 border-lightText dark:border-darkText self-center flex-1 h-0"/>
          <a href="https://www.linkedin.com/in/rubio-nestor" target="_blank" className="text-[30px] mx-2 text-primary hover:text-lightAccent dark:hover:text-darkAccent hover:scale-125 cursor-pointer"><FontAwesomeIcon icon={faLinkedin}/></a>
          <div className="border-t-2 border-lightText dark:border-darkText self-center flex-1 h-0"/>
        </div>
        {/* TEXT */}
        <div className="flex flex-col justify-center pb-4">
          <p className={secondaryText}>Howdy! My name is</p>
          <p className={primaryText}>Nestor Rubio</p>
          <p className={secondaryText}>and I'm a</p>
          {word}
          <p className={primaryText}>Software Engineer</p>
        </div>
        {/* RESUMES */}
        <div className="rounded bg-lightBG2 dark:bg-darkBG2 flex flex-col justify-center py-[24px]">
          <p className="self-center text-[24px] font-bold text-lightText dark:text-darkText mb-[24px]">Résumé Options</p>
          <div className="flex flex-col sm:flex-row justify-center sm:gap-4">
            <a href={Resume} download={"RubioNestorResume"} target="_blank" className="flex flex-col justify-center text-center bg-primary w-[290px] h-[50px] rounded self-center text-lightBG1 dark:text-darkBG1 font-bold transition-colors duration-300 ease-in-out hover:bg-lightAccent dark:hover:bg-darkAccent cursor-pointer">PDF</a>
            <p className="self-center text-[20px] text-lightText dark:text-darkText">and</p>
            <a href="https://rubionestorresume.azureedge.net/" target="_blank" className="flex flex-col justify-center text-center bg-primary w-[290px] h-[50px] rounded self-center text-lightBG1 dark:text-darkBG1 font-bold transition-colors duration-300 ease-in-out hover:bg-lightAccent dark:hover:bg-darkAccent cursor-pointer">HTML / CSS</a>
          </div>
          
        </div>
      </div>
    </div>
  )
};

export default Home;