import { useEffect, useMemo, useState } from "react";
import { useTheme } from "../components/ThemeContext";
import useTypingText from "../utils/useTypingText";
import { words } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Resume from "../assets/RubioNestorResume.pdf";
import { selfieImage, gradImage, armsOutImage, memojiImage } from "../utils/utils";
const  Home = () => {
  const {isDarkMode} = useTheme();
  const {word, stop, text} = useTypingText(words,130,20);

  const leftPics = useMemo(() => [selfieImage, gradImage],[]);
  const rightPics = useMemo(() => [armsOutImage, memojiImage],[]);

  const primaryText = "self-center text-[30px] sm:text-[40px] text-primary font-bold";
  const secondaryText = "self-center text-[20px] text-lightText dark:text-darkText";

  useEffect(()=>{
    if(text == words[words.length - 1]) {
      stop();
    }
  },[text])

  return (
    <div id="home" className={`section ${isDarkMode ? 'dark':''} flex flex-col justify-center`}>
      <div className=" bg-lightBG1 dark:bg-darkBG1 justify-center flex flex-col pt-[80px]">
        <div className="flex flex-col justify-center sm:px-4 sm:flex-row sm:justify-evenly">
          {/* IMAGE ROTATOR & ISLAND */}
          <div className="flex flex-col justify-center">
            <ImageRotator />
            <div className="hidden sm:flex md:hidden flex-row justify-center w-[90%] self-center pb-4">
              <div className="border-t-2 border-lightText dark:border-darkText self-center flex-1 h-0"/>
              <a href="https://github.com/rubionestor611" target="_blank" className="text-[30px] mx-2 text-primary hover:text-lightAccent dark:hover:text-darkAccent hover:scale-125 cursor-pointer"><FontAwesomeIcon icon={faGithub}/></a>
              <div className="border-t-2 border-lightText dark:border-darkText self-center flex-1 h-0"/>
              <a href="https://www.linkedin.com/in/rubio-nestor" target="_blank" className="text-[30px] mx-2 text-primary hover:text-lightAccent dark:hover:text-darkAccent hover:scale-125 cursor-pointer"><FontAwesomeIcon icon={faLinkedin}/></a>
              <div className="border-t-2 border-lightText dark:border-darkText self-center flex-1 h-0"/>
            </div>
          </div>
          <div className="flex-1 hidden lg:flex flex-col xl:flex-row justify-evenly lg:gap-2 items-center lg:py-4">
          {
            leftPics.map((imageObj,index) => (
              <img
                key={index}
                src={imageObj.img} alt={imageObj.alt}
                className="hidden lg:flex absolute lg:relative transition-opacity duration-500 ease-in-out rounded-2xl h-[200px] w-[200px] bg-lightAccent dark:bg-darkAccent object-contain hover:animate-wiggle hover:scale-110"
              />
            ))
          }
          </div>
          {/* MOBILE ISLAND & TEXT */}
          <div className="flex flex-col justify-center md:flex-col-reverse lg:flex-1">
            {/* MOBILE ISLAND */}
            <div className="flex sm:hidden md:flex flex-row justify-center w-[90%] max-w-[500px] self-center pb-4">
              <div className="border-t-2 border-lightText dark:border-darkText self-center flex-1 h-0"/>
              <a href="https://github.com/rubionestor611" target="_blank" className="text-[30px] mx-2 text-primary hover:text-lightAccent dark:hover:text-darkAccent hover:scale-125 cursor-pointer"><FontAwesomeIcon icon={faGithub}/></a>
              <div className="border-t-2 border-lightText dark:border-darkText self-center flex-1 h-0"/>
              <a href="https://www.linkedin.com/in/rubio-nestor" target="_blank" className="text-[30px] mx-2 text-primary hover:text-lightAccent dark:hover:text-darkAccent hover:scale-125 cursor-pointer"><FontAwesomeIcon icon={faLinkedin}/></a>
              <div className="border-t-2 border-lightText dark:border-darkText self-center flex-1 h-0"/>
            </div>
            {/* TEXT */}
            <div className="flex flex-col justify-center pb-4 sm:py-4 lg:flex-1">
              <p className={secondaryText}>Howdy! My name is</p>
              <p className={primaryText}>Nestor Rubio</p>
              <p className={secondaryText}>and I'm a</p>
              {word}
              <p className={primaryText}>Software Engineer</p>
            </div>
          </div>
          
          <div className="flex-1 hidden lg:flex flex-col xl:flex-row justify-evenly lg:gap-2 items-center lg:py-4">
          {
            rightPics.map((imageObj,index) => (
              <img
                key={index}
                src={imageObj.img} alt={imageObj.alt}
                className="hidden lg:flex absolute lg:relative transition-opacity duration-500 ease-in-out rounded-2xl h-[200px] w-[200px] bg-lightAccent dark:bg-darkAccent object-contain hover:animate-wiggle hover:scale-110"
              />
            ))
          }
          </div>
        </div>
        
        {/* RESUME ROW */}
        <div className="rounded bg-lightBG2 dark:bg-darkBG2 flex flex-col justify-center py-[24px]">
          <p className="self-center text-[24px] font-bold text-lightText dark:text-darkText mb-[24px]">Résumé Options</p>
          <div className="flex flex-col sm:flex-row justify-center sm:gap-4">
            <a href={Resume} download={"RubioNestorResume"} target="_blank" className="flex flex-col justify-center text-center bg-primary w-[290px] h-[50px] rounded self-center text-lightBG1 dark:text-darkBG1 font-bold transition-colors duration-300 ease-in-out hover:bg-lightAccent dark:hover:bg-darkAccent cursor-pointer">PDF</a>
            <p className="self-center text-[20px] text-lightText dark:text-darkText">and</p>
            <a href="https://nrubioresume.azureedge.net/" target="_blank" className="flex flex-col justify-center text-center bg-primary w-[290px] h-[50px] rounded self-center text-lightBG1 dark:text-darkBG1 font-bold transition-colors duration-300 ease-in-out hover:bg-lightAccent dark:hover:bg-darkAccent cursor-pointer">HTML / CSS</a>
          </div>
          
        </div>
      </div>
    </div>
  )
};

const ImageRotator = () => {
  const images = useMemo(() => [selfieImage,gradImage,memojiImage,armsOutImage],[]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate to the next image every 3 seconds
      rotateImage();
    }, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const rotateImage = () => {
    // Rotate to the next image and reset the timer
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="relative self-center w-[200px] h-[200px] my-4 cursor-pointer lg:cursor-default lg:hidden lg:flex-1 lg:flex-row lg:items-center lg:w-full lg:justify-evenly lg:self-auto  hover:animate-wiggle hover:scale-110"
      onClick={rotateImage}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.img}
          alt={image.alt}
          className={`absolute lg:relative transition-opacity duration-500 ease-in-out rounded-2xl h-[200px] w-[200px] bg-lightAccent dark:bg-darkAccent object-contain ${
            index === currentImageIndex ? "opacity-100" : "opacity-0 lg:opacity-100"
          }`}
        />
      ))}
    </div>
  );
};

export default Home;