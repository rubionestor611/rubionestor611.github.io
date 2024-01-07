import { useTheme } from "../components/ThemeContext";

const Experience = () => {
  const {isDarkMode} = useTheme();
  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-lightBG1 dark:bg-darkBG1 flex flex-col justify-center py-[24px]">
        <p className="self-center text-lightText dark:text-darkText text-[24px] font-bold">Experience</p>
      </div> 
    </div>
  )
};

export default Experience;