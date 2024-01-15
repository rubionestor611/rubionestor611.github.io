import GoLogo from "../assets/tech/Go-Logo_Blue.svg";
import PythonLogo from "../assets/tech/python.svg";
import CLogo from "../assets/tech/c.svg";
import JavaLogo from "../assets/tech/java.svg";
import JavaScriptLogo from "../assets/tech/js.svg";
import WorldLogo from "../assets/exp/worldwide.png";
import UCFLogo from "../assets/exp/ucf.png";
import QualtricsLogo from "../assets/exp/qualtrics.png";
import HTMLLogo from "../assets/tech/html.svg";
import CSSLogo from "../assets/tech/css.svg";
import ReactLogo from "../assets/tech/react.svg";
import TypeScriptLogo from "../assets/tech/typescript.svg";
import TailwindLogo from "../assets/tech/tailwind.svg";
import ReduxLogo from "../assets/tech/redux.svg";
import ExpressLogo from "../assets/tech/express.svg";
import NodeLogo from "../assets/tech/nodejs.svg";
import JUnitLogo from "../assets/tech/junit.svg";
import TestifyLogo from "../assets/tech/Testify.svg";
import PostmanLogo from "../assets/tech/postman.svg";
import AzureLogo from "../assets/tech/azure.svg";
import MongoLogo from "../assets/tech/mongodb.svg";
import MySQLLogo from "../assets/tech/mysql.svg";
import FirebaseLogo from "../assets/tech/firebase.svg";
import DockerLogo from "../assets/tech/docker.svg";
import BootstrapLogo from "../assets/tech/bootstrap.svg";
import JenkinsLogo from "../assets/tech/jenkins.svg";
import GitLogo from "../assets/tech/git.svg";
import GitlabLogo from "../assets/tech/gitlabLogo.svg";
import GithubLogo from "../assets/tech/githubLogo.svg";
import ViteLogo from "../assets/tech/vite.svg";
import selfie from "../assets/selfie.png";
import grad from "../assets/grad.jpg";
import armsOut from "../assets/armsOut.jpg";
import memoji from "../assets/memoji.png";

import { faDumbbell, faGraduationCap, faMousePointer, faSmileBeam } from "@fortawesome/free-solid-svg-icons";

export const navLinks = [
  ['Home','#home'],
  ['Skills','#skills'],
  ['Experience','#experience'],
  ['About Me', '#about'],
  ['Contact','#contact']
];

export const words = [" ", "Curious", "Hard-Working", "First-Gen", "Front-End", "Back-End", "Full-Stack"];

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
    {name:"Vite",logo:ViteLogo},
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

export const aboutMe = {
  cards: [
    {
      logo: faGraduationCap,
      text: "I graduated cum laude honors from the University of Central Florida in May 2023. I am thankful to have been able to help fellow knights through my tutoring while there. GO KNIGHTS!"
    },
    {
      logo: faDumbbell,
      text: "I love being able to exercise. For me this mostly means soccer and doing at-home workouts with my adjustable dumbbell set, cables, or my bodyweight."
    },
    {
      logo: faSmileBeam,
      text: "I love to make people feel included, welcome, involved, and cared for. Whether it be through humor, genuine curiosity in them, or whatever else I feel may help improve their day."
    },
    {
      logo: faMousePointer,
      text: "I run a blog called First Gen CS in which I write about different topics like data structures and algorithms and I hope to extend it to miscellaneous topics in the future. You can visit it through the links in the menu and footer."
    }
  ],
}

export const experiences = [
  {
    title: "Software Engineer",
    company:"Worldwide Interactive Services",
    location: "Orlando, FL",
    logo: WorldLogo,
    dateRange: "July 2023 - Present",
    description: [
      "Drive the development and enhancement of Milly's web and mobile applications by leveraging extensive expertise in React and React Native, while also crafting compelling demo products showcased to potential clients",
      "Lead Git version control management and actively mentor colleagues on diverse aspects of project execution and technology",
      "Lead and guide the design phases across all products, playing a pivotal role in ensuring high-quality design standards and user experience",
      "Undertake a leadership role in the conceptualization and implementation of innovative design processes to enhance product development and usability"
    ],
    techUsed: ["React","React Native","Expo Go","Tailwind","Redux Toolkit","Figma"],
  },
  {
    title: "Software Engineer Intern",
    company:"Qualtrics",
    location: "Seattle, WA",
    logo: QualtricsLogo,
    dateRange: "May 2022 - August 2022",
    description: [
      "Leveraged Go, Docker, Jenkins, and Bash scripting in an ambitious initiative to overhaul the Load Balancer as Code repository merge validation, resulting in a notable 45% reduction in the runtime of the verification script",
      "Embraced a steep learning curve, swiftly mastering previously unfamiliar technologies to achieve impactful improvements in project efficiency and effectiveness",
      "Demonstrated adeptness with Golang's Testify Suite to uphold the quality of code changes, ensuring robust and reliable enhancements to the project",
      "Wrote heavy documentation on the CLI tool, improving developer experience and ensuring ease of future development and scalability"
    ],
    techUsed: ["Go","Docker","Jenkins","Gitlab","Cobra CLI"]
  },
  {
    title: "Computer Science Tutor & Tutoring Mentor",
    company:"UCF Student Academic Resource Center",
    location: "Orlando, FL",
    logo: UCFLogo,
    dateRange: "May 2021 - August 2023",
    description: [
      "Hosted extensive tutoring sessions benefiting hundreds of students enrolled in courses covering Object-Oriented Programming w/ Java and Computer Science I w/ C, encompassing topics such as data structures, algorithms, and both object-oriented and procedural programming",
      "Earned hundreds of positive reviews in voluntary surveys, reflecting my dedication, empathy, and commitment to aiding students, culminating in top-ranking departmental feedback over multiple semesters",
      "Provided leadership after promotion to Peer Tutor Mentor in November 2021, by supervising and offering constructive feedback to fellow tutors to enhance their sessions while reporting observations to the Peer Tutoring Coordinator",
      "Effectively imparted practical skills extending beyond the academic curriculum, including Git, JUnit Testing, Valgrind Memory Leak testing for C programs, and proficiently navigating technical documentation"
    ],
    techUsed: ["Java","C","Python","WordPress"]
  },
]

export const selfieImage = {img: selfie, alt: "Selfie of Nestor"};
export const gradImage = {img:grad,alt:"Picture of Nestor at UCF graduation"};
export const armsOutImage = {img:armsOut,alt:"Picture of Nestor in graduation cap & gown with arms out"};
export const memojiImage = {img:memoji,alt:"Nestor's Apple Memoji picture"};