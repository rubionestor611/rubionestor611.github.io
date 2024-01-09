import GoLogo from "../assets/tech/Go-Logo_Blue.png";
import PythonLogo from "../assets/tech/python.png";
import CLogo from "../assets/tech/c.png";
import JavaLogo from "../assets/tech/java.png";
import JavaScriptLogo from "../assets/tech/js.png";
import WorldLogo from "../assets/exp/worldwide.png";
import UCFLogo from "../assets/exp/ucf.png";
import QualtricsLogo from "../assets/exp/qualtrics.png";
import HTMLLogo from "../assets/tech/html.png";
import CSSLogo from "../assets/tech/css.png";
import ReactLogo from "../assets/tech/react.png";
import TypeScriptLogo from "../assets/tech/typescript.png";
import TailwindLogo from "../assets/tech/tailwind.svg";
import ReduxLogo from "../assets/tech/redux.png";
import ExpressLogo from "../assets/tech/express.png";
import NodeLogo from "../assets/tech/nodejs.png";
import JUnitLogo from "../assets/tech/junit.png";
import TestifyLogo from "../assets/tech/Testify.png";
import PostmanLogo from "../assets/tech/postman.svg";
import AzureLogo from "../assets/tech/azure.png";
import MongoLogo from "../assets/tech/mongodb.png";
import MySQLLogo from "../assets/tech/mysql.png";
import FirebaseLogo from "../assets/tech/firebase.png";
import DockerLogo from "../assets/tech/docker.png";
import BootstrapLogo from "../assets/tech/bootstrap.png";
import JenkinsLogo from "../assets/tech/jenkins.png";
import GitLogo from "../assets/tech/git.svg";
import GitlabLogo from "../assets/tech/gitlabLogo.svg";
import GithubLogo from "../assets/tech/githubLogo.png";

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
    {name:"React",logo:ReactLogo},
    {name:"React Native",logo:ReactLogo},
    {name:"TypeScript",logo:TypeScriptLogo},
    {name:"Tailwind CSS",logo:TailwindLogo},
    {name:"Redux Toolkit",logo:ReduxLogo},
    {name:"ExpressJS",logo:ExpressLogo},
    {name:"NodeJS",logo:NodeLogo},
    {name:"HTML",logo:HTMLLogo},
    {name:"CSS",logo:CSSLogo},
    {name:"MySQL",logo:MySQLLogo},
    {name:"MongoDB",logo:MongoLogo},
    {name:"Google Firebase",logo:FirebaseLogo},
    {name:"Bootstrap",logo:BootstrapLogo},
    {name:"Git",logo:GitLogo},
    {name:"GitLab",logo:GitlabLogo},
    {name:"Github",logo:GithubLogo},
    {name:"Docker",logo:DockerLogo},
    {name:"Jenkins",logo:JenkinsLogo},
    {name:"Azure",logo:AzureLogo},
    {name:"Java Swing",logo:JavaLogo},
    {name:"Postman",logo:PostmanLogo},
    {name:"Golang Testify",logo:TestifyLogo},
    {name:"JUnit",logo:JUnitLogo},
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