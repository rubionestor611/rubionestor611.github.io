import { useTheme } from "../components/ThemeContext";
import { skills } from "../utils/utils";

const Skills = () => {
  const {isDarkMode} = useTheme();

  return (
    <div id="skills" className={`section ${isDarkMode ? 'dark' : ''} scroll-mt-[90px]`}>
      <div className="bg-lightBG1 dark:bg-darkBG1 flex flex-col justify-center py-[24px]">
        <p className="self-center text-lightText dark:text-darkText text-[24px] font-bold">Skills</p>
        <p className="self-center text-lightText dark:text-darkText text-[20px] font-semibold py-2">Programming Languages</p>
        <div className="pt-1 self-center flex flex-row flex-wrap justify-center gap-2 md:gap-4 lg:gap-8 w-[90%]">
        {
          skills.languages.map((lang,index) => (
            TechCard(lang,index)
          ))
        }
        </div>
        <p className="self-center text-lightText dark:text-darkText text-[20px] font-semibold py-2">Tools & Frameworks</p>
        <div className="pt-1 self-center flex flex-row flex-wrap justify-center gap-2 md:gap-4 lg:gap-8 w-[90%]">
        {
          skills.technologies.map((lang,index) => (
            TechCard(lang,index)
          ))
        }
        </div>
      </div> 
    </div>
  )
};

const TechCard = (lang:{name:string, logo:any},index:number) => {
  return (
    <div key={`${index}`} className="group flex flex-col hover:scale-110 cursor-default bg-lightBG2 dark:bg-darkBG2 text-lightText dark:text-darkText rounded h-[100px] w-[200px] text-xl font-bold border-2 border-lightText dark:border-darkText items-center justify-center">
      <img src={lang.logo} alt={`${lang.name} logo`} className="h-[50px] w-[50px] object-contain"/>
      <p>{lang.name}</p>
    </div>
  );
}

export default Skills;