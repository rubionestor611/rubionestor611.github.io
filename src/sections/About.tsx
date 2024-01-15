import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../components/ThemeContext";
import { aboutMe } from "../utils/utils";

const About = () => {
  const {isDarkMode} = useTheme();

  const yearsSinceLoveBegan = () => {
    const initialDate = new Date("07/21/2017");
    const today = new Date();

    const daysDiff = Math.round((today.getTime() - initialDate.getTime()) / (1000 * 3600 * 24));

    return `${Math.floor(daysDiff / 365)} years and ${daysDiff % 365} days`;
  };

  return (
    <div id="about" className={`${isDarkMode ? 'dark' : ''} scroll-mt-[90px]`}>
      <div className="bg-lightBG1 dark:bg-darkBG1 flex flex-col justify-center py-[24px] text-darkText px-4">
        <p className="self-center text-lightText dark:text-darkText text-[24px] mb-[24px] font-bold">About Me</p>
        <div className="flex flex-row justify-evenly space-x-2 gap-y-2 flex-wrap">
        {
          aboutMe.cards.map((item,index) => (
            AboutMeItem(item,index)
          ))
        }
        </div>
        <div className="px-[15px] text-center text-lightText dark:text-darkText space-y-2 mt-[24px]">
          <p>My name is Nestor Rubio, a first-generation American-Salvadoran and software engineer. My software engineering journey began at UCF during my first semester in a C programming class. I became captivated by problem-solving, shaping my career ever since. Interestingly, my tech aptitude began in elementary school, troubleshooting anything with a cable or connection for my parents, honing my skills in Googling because I had no one else to ask. I find it amusing how life primed me for this career.</p>
          <p>Since that first class, I have learned many new technologies, met plenty of amazing people, got to be tutored, be a tutor, be mentored as an intern, serve a mentor-like role to my peers in the office, and many more things. One cherished achievement: my enduring relationship with my amazing girlfriend Alyssa—{`${yearsSinceLoveBegan()}`}! I am one lucky man.</p>
        </div>
        
      </div> 
    </div>
  )
};

const AboutMeItem = ({logo, text}:any,index:number) => {
  return (
     <div key={`${index}`} className="group h-[250px] w-[250px] [perspective:1000px]">
      <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]  border border-lightText dark:border-darkText`}>
        <div className="absolute inset-0 flex flex-col justify-center text-primary text-9xl">
          <FontAwesomeIcon icon={logo} />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center h-full w-full rounded-xl bg-lightAccent dark:bg-darkAccent px-[15px] text-base text-center text-lightText dark:text-darkText [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p>{text}</p>
        </div>
      </div>
     </div>
  )
}

export default About;