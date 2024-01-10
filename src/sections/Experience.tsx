import { useTheme } from "../components/ThemeContext";
import { experiences } from "../utils/utils";

const Experience = () => {
  const {isDarkMode} = useTheme();
  return (
    <div id="experience" className={`${isDarkMode ? 'dark' : ''} scroll-mt-[90px]`}>
      <div className="bg-lightBG1 dark:bg-darkBG1 flex flex-col justify-center py-[24px]">
        <p className="self-center text-lightText dark:text-darkText text-[24px] font-bold mb-[24px]">Dev Experience</p>
        <div className="flex flex-col justify-center self-center gap-2">
        {
          experiences.map(item => (
            ExpItem(item)
          ))
        }
        </div>
      </div> 
    </div>
  )
};

const ExpItem = (
  exp:{
    title: string
    company: string
    location: string
    logo: any
    dateRange: string
    description: string[]
    techUsed: string[]
  }) => {
    return (
      <div className="opacity-75 hover:opacity-100  flex flex-row space-x-[25px] w-[90%] relative self-center">
        <div className="absolute h-full border-l border-lightText dark:border-darkText rounded"/>
        <div>
          <p className="text-xs text-lightText dark:text-darkText italic">{exp.dateRange}</p>
          <p className="text-xl text-lightText dark:text-darkText font-bold">{exp.title}</p>
          <p className="text-sm text-lightText dark:text-darkText italic">{exp.company}</p>
          <p className="text-sm text-lightText dark:text-darkText italic">{exp.location}</p>
          <ul className="list-disc mt-2">
            {
              exp.description.map(str => (
                <li className="text-xs text-lightText dark:text-darkText">{str}</li>
              ))
            }
          </ul>
          <div className="flex flex-row space-x-2 flex-wrap mt-2">
          {
            exp.techUsed.map(str => (
              <p className="cursor-default text-xs p-2 bg-lightAccent dark:bg-darkAccent rounded-full text-lightText dark:text-darkText mb-2">{str}</p>
            ))
          }
          </div>
        </div>
        
      </div>
    );
  }

export default Experience;