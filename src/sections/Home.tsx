import { useEffect } from "react";
import { useTheme } from "../components/ThemeContext";
import useTypingText from "../utils/useTypingText";
import { words } from "../utils/utils";
import selfie from "../assets/selfie.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
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
    <div className={`${isDarkMode ? 'dark':''} flex flex-col justify-center`}>
      <div className=" bg-lightBG1 dark:bg-darkBG1 justify-center flex flex-col">
        {/* IMAGE */}
        <img src={selfie} className="self-center rounded-full h-[200px] w-[200px] bg-lightAccent dark:bg-darkAccent my-4 object-contain"/>
        {/* ISLAND */}
        <div className="bg-lightBG2 dark:bg-darkBG2 rounded-full border-black dark:border-white border-2 self-center w-[90%] flex flex-row justify-evenly text-primary text-[30px] py-[5px] mb-4">
        <a href="https://github.com/rubionestor611" target="_blank" className="text-primary"><FontAwesomeIcon icon={faGithub}/></a>
          <a href="https://www.linkedin.com/in/rubio-nestor" target="_blank" className="text-primary"><FontAwesomeIcon icon={faLinkedin}/></a>
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
          <button className="bg-primary w-[290px] h-[50px] rounded self-center text-lightBG1 dark:text-darkBG1 font-bold">PDF</button>
          <p className="self-center text-[20px] text-lightText dark:text-darkText">and</p>
          <button className="bg-primary w-[290px] h-[50px] rounded self-center text-lightBG1 dark:text-darkBG1 font-bold">HTML / CSS</button>
        </div>
      </div>
    </div>
  )
};

export default Home;