import { useTheme } from "../components/ThemeContext";
import { skills } from "../utils/utils";

const Skills = () => {
  const {isDarkMode} = useTheme();

  return (
    <div id="skills" className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-lightBG1 dark:bg-darkBG1 flex flex-col justify-center py-[24px]">
        <p className="self-center text-lightText dark:text-darkText text-[24px] font-bold">Skills</p>
        <p className="self-center text-lightText dark:text-darkText text-[20px] font-semibold">Programming Languages</p>
        <div className="pt-1 self-center flex flex-col justify-center gap-2">
          {
            skills.languages.map((lang) => (
              <div
                className="group flex flex-col hover:scale-125 hover:my-[20px] cursor-default bg-lightBG2 dark:bg-darkBG2 text-lightText dark:text-darkText rounded h-[100px] w-[200px] text-xl font-bold border-2 border-lightText dark:border-darkText items-center justify-center"
              >
                <img src={lang.logo} alt={`${lang.name} logo`} className="h-[50px] w-[50px]"/>
                <p>{lang.name}</p>
              </div>
            ))
          }
        </div>
        <p className="self-center text-lightText dark:text-darkText text-[20px] font-semibold">Tools & Frameworks</p>
      </div> 
    </div>
  )
};

export default Skills;