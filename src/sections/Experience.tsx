import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../components/ThemeContext";
import { experiences, projects } from "../utils/utils";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  const {isDarkMode} = useTheme();
  return (
    <div id="experience" className={`section ${isDarkMode ? 'dark' : ''} scroll-mt-[90px]`}>
      <div className="bg-lightBG1 dark:bg-darkBG1 flex flex-col justify-center pt-[24px]">
        <p className="self-center text-lightText dark:text-darkText text-[24px] font-bold mb-[24px]">Dev Experience</p>
        <div className="flex flex-col justify-center self-center gap-4">
        {
          experiences.map((item,index) => (
            ExpItem(item,index)
          ))
        }
        </div>
      </div>
      <div className="bg-lightBG1 dark:bg-darkBG1 flex flex-col justify-center pt-4 pb-[24px]">
        <p className="self-center text-lightText dark:text-darkText text-[24px] font-bold mb-[24px]">Personal Projects</p>
        <div className="flex flex-row justify-evenly flex-wrap gap-y-2 px-4 gap-x-2">
        {
          projects.map((item,index) => (
            ProjectItem(item,index)
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
  },
  index:number
  ) => {
    return (
      <div key={`${index}`} className="flex flex-row space-x-[25px] w-[90%] relative self-center">
        {/* left border */}
        <div className="absolute h-full border-l border-lightText dark:border-darkText rounded"/>
        {/* text content */}
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="w-[300px]">
            <p className="text-xs text-lightText dark:text-darkText italic">{exp.dateRange}</p>
            <p className="text-xl text-lightText dark:text-darkText font-bold">{exp.title}</p>
            <p className="text-sm text-lightText dark:text-darkText italic">{exp.company}</p>
            <p className="text-sm text-lightText dark:text-darkText italic">{exp.location}</p>
          </div>
          <div className="w-full">
            {/* bullet points */}
            <ul className="list-disc list-inside mt-2 md:mt-0">
              {
                exp.description.map((str,index) => (
                  <li key={`${index}`} className="text-xs text-lightText dark:text-darkText">{str}</li>
                ))
              }
            </ul>
            {/* skill bubbles */}
            <div className="flex flex-row space-x-2 flex-wrap mt-2">
            {
              exp.techUsed.map((str,index) => (
                <p key={`${index}`} className="min-w-[50px] text-center cursor-default text-xs p-2 bg-lightAccent dark:bg-darkAccent rounded-full text-lightText dark:text-darkText mb-2">{str}</p>
              ))
            }
            </div>
          </div>
          
        </div>
        
      </div>
    );
  }

const ProjectItem = (
  project:{
    img:string,
    name: string,
    desc: string,
    toolsUsed:string[],
    youtube: string,
    github:string,
    link:string,
  },
  index:number
  ) => {
    return (
      <div key={`${index}`} className="w-[300px] border border-lightText dark:border-darkText p-2 px-4 flex flex-col rounded-xl gap-2">
        <div className="self-center flex flex-row justify-center items-center h-[200px]">
          <img src={project.img} className="relative top-0 self-center object-fill rounded-lg max-h-[200px]"/>
        </div>
        
        <p className="text-xl text-lightText dark:text-darkText font-bold">{project.name}</p>
        <div className="flex flex-row text-[25px] w-full gap-4">
          <a href={project.youtube} target="_blank" className={`${project.youtube ? "flex" : "hidden"} cursor-pointer text-red-500 hover:scale-125`}><FontAwesomeIcon icon={faYoutube}/></a>
          <a href={project.github} target="_blank" className={`${project.github ? "flex" : "hidden"} cursor-pointer text-primary hover:scale-125`}><FontAwesomeIcon icon={faGithub}/></a>
          <a href={project.link} target="_blank" className={`${project.link ? "flex" : "hidden"} cursor-pointer text-primary hover:scale-125`}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
        </div>
        <p className="text-sm text-lightText dark:text-darkText">{project.desc}</p>
        <div className="flex flex-row space-x-2 flex-wrap mt-auto">
          {
            project.toolsUsed.map((str,index) => (
              <p key={`${index}`} className="min-w-[50px] text-center cursor-default text-xs p-2 bg-lightAccent dark:bg-darkAccent rounded-full text-lightText dark:text-darkText mb-2">{str}</p>
            ))
          }
          </div>
      </div>
    );
  }

export default Experience;