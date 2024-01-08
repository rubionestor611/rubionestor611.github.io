import GoLogo from "../assets/tech/Go-Logo_Blue.png";
import PythonLogo from "../assets/tech/python.png";
import CLogo from "../assets/tech/c.png";
import JavaLogo from "../assets/tech/java.png";
import JavaScriptLogo from "../assets/tech/js.png";
import WorldLogo from "../assets/exp/worldwide.png";
import UCFLogo from "../assets/exp/ucf.png";
import QualtricsLogo from "../assets/exp/qualtrics.png";
export const navLinks = [
  ['Home','#home'],
  ['Skills','#skills'],
  ['About Me', '#about'],
  ['Experience','#experience'],
  ['Contact','#contact']
];

export const words = [" ", "Curious", "Hard-Working", "Front-End", "Back-End", "Full-Stack"];

export const skills = {
  languages: [
    {name: "Python", logo: PythonLogo},
    {name: "Java", logo: JavaLogo},
    {name: "JavaScript", logo: JavaScriptLogo},
    {name: "C", logo: CLogo},
    {name: "Go", logo: GoLogo},
  ],
  technologies: [
    {name:"React",logo:""},
    {name:"React Native",logo:""},
    {name:"TypeScript",logo:""},
    {name:"Tailwind CSS",logo:""},
    {name:"Redux Toolkit",logo:""},
    {name:"ExpressJS",logo:""},
    {name:"NodeJS",logo:""},
    {name:"SQL",logo:""},
    {name:"MySQL",logo:""},
    {name:"MongoDB",logo:""},
    {name:"Google Firebase",logo:""},
    {name:"Bootstrap",logo:""},
    {name:"Git",logo:""},
    {name:"GitLab",logo:""},
    {name:"Github",logo:""},
    {name:"Docker",logo:""},
    {name:"Jenkins",logo:""},
    {name:"Azure",logo:""},
    {name:"Java Swing",logo:""},
    {name:"Postman",logo:""},
    {name:"Golang Testify",logo:""},
    {name:"JUnit",logo:""},
  ]
}

export const experiences = [
  {
    title: "Software Engineer",
    company:"Worldwide Interactive Services",
    location: "Orlando, FL",
    logo: WorldLogo,
    dateRange: "July 2023 - Present",
    description: "",
    techUsed: ["React","React Native","Expo Go","Tailwind","Redux Toolkit","Figma"],
  },
  {
    title: "Software Engineer Intern",
    company:"Qualtrics",
    location: "Seattle, WA",
    logo: QualtricsLogo,
    dateRange: "May 2022 - August 2022",
    description: "",
    techUsed: ["Go","Docker","Jenkins","Gitlab","Cobra CLI"]
  },
  {
    title: "Computer Science Tutor & Tutoring Mentor",
    company:"UCF Student Academic Resource Center",
    location: "Orlando, FL",
    logo: UCFLogo,
    dateRange: "May 2021 - August 2023",
    description: "",
    techUsed: ["Java","C","Python","WordPress"]
  },
]