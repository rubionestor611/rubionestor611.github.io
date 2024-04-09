import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../components/ThemeContext";
import { faGithub, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../components/ContactForm";
import "../App.css";

const Contact = () => {
  const {isDarkMode} = useTheme();
  return (
    <div id="contact" className={`section ${isDarkMode ? 'dark' : ''} scroll-mt-[90px]`}>
      <div className="bg-lightBG1 dark:bg-darkBG1 flex flex-col justify-center pt-[24px] gap-[24px]">
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
        <svg id="wave" className="w-full" viewBox="0 0 1440 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(77, 106, 174, 1)" offset="0%" />
              <stop stopColor="rgba(15, 24, 46, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            className="fill-lightBG2 dark:fill-darkBG2"
            fill="pink"
            d="M0,162L30,162C60,162,120,162,180,144C240,126,300,90,360,87C420,84,480,114,540,129C600,144,660,144,720,138C780,132,840,120,900,114C960,108,1020,108,1080,114C1140,120,1200,132,1260,129C1320,126,1380,108,1440,105C1500,102,1560,114,1620,99C1680,84,1740,42,1800,42C1860,42,1920,84,1980,96C2040,108,2100,90,2160,87C2220,84,2280,96,2340,93C2400,90,2460,72,2520,54C2580,36,2640,18,2700,21C2760,24,2820,48,2880,66C2940,84,3000,96,3060,87C3120,78,3180,48,3240,51C3300,54,3360,90,3420,90C3480,90,3540,54,3600,33C3660,12,3720,6,3780,27C3840,48,3900,96,3960,120C4020,144,4080,144,4140,129C4200,114,4260,84,4290,69L4320,54L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"
          />
        </svg>
      </div> 
    </div>
  )
};

export default Contact;