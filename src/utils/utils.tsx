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

import InvoicesImage from "../assets/projects/invoices.jpg";
import AudioImage from "../assets/projects/Audio.png";
import PasswordImage from "../assets/projects/password.png";
import TodoImage from "../assets/projects/todo.png";
import ResumeImage from "../assets/projects/AzureResume.png";
import WorkoutPlannerImage from "../assets/projects/WorkoutPlannerImage.png";

import { faDumbbell, faGraduationCap, faMousePointer, faSmileBeam } from "@fortawesome/free-solid-svg-icons";

export const navLinks = [
  ['Home','#home'],
  ['Skills','#skills'],
  ['Experience','#experience'],
  ['About Me', '#about'],
  ['Contact','#contact']
];

export const words = [" ", "Curious", "Hard-Working", "Empathetic", "First-Gen", "Front-End", "Back-End", "Full-Stack"];

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
      text: "I graduated cum laude honors from the University of Central Florida in May 2023. I'm thankful to have helped many knights through my tutoring while there. GO KNIGHTS!"
    },
    {
      logo: faDumbbell,
      text: "I love being able to exercise. For me this mostly means soccer and doing at-home workouts with my adjustable dumbbell set, cables, or my bodyweight."
    },
    {
      logo: faSmileBeam,
      text: "I live to help and learn. I found the best outlet for my helping as a tutor at my university where I helped many students with a veriety of CS topics. In all my positions, I am always seeking to teach and learn from others."
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
      "Undertake a leadership role in the conceptualization and implementation of automation of development processes via scripting in Python and Github Action pipelines"
    ],
    techUsed: ["React","React Native","Expo Go","Tailwind","Redux Toolkit","Figma", "Python", "Github Actions"],
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
];

export const projects = [
  {
    img: WorkoutPlannerImage,
    name: "Workout Buddy",
    desc: "Workout Buddy is an app combining a typical workout scheduler/creator with all the benefits of building a support network of friends. It was started as a Senior Design project suggestion by me, since I've had something like this in mind for a long time. In it, you can befriend users to share workouts and workout schedules to support one another or even meet up to exercise together. In this project, I was not only the project manager for a group of 5 UCF students, but I also worked on many pages of the frontend and a string majority of the backend. From database design to API implementation and hosting.",
    toolsUsed: [
      "React Native","Expo Go","NodeJS","ExpressJS","MongoDB","Mongoose","Azure Web App","Azure Communication Services","JSON Web Token",
    ],
    link: "",
    github:"https://github.com/rubionestor611/workout-planner",
    youtube:"https://youtu.be/cNOD5thDXH4"
  },
  {
    img: ResumeImage,
    name: "Azure Cloud Resume",
    desc: "This page serves as my resume if everything I couldn't fit into one page was included. After seeing an article related to the Cloud Resume Challenge and reading what it involved, I knew I could learn a lot from it. The challenge involves setting up cloud functions, content delivery networks, and applying HTML skills and so I did all of that with mobile responsiveness in mind and some additional personal design choices.",
    toolsUsed: [
      "Azure CDN", "Cosmos DB", "Azure Functions", "HTML","CSS", "JavaScript", "Python"
    ],
    link: "https://nrubioresume.azureedge.net/",
    github:"https://github.com/rubionestor611/cloudresume",
    youtube:""
  },
  {
    img: InvoicesImage,
    name:"Invoice Number Generator",
    desc: "This app allows my dad to control his company invoicing with a simple tool. In it, he can provide simple information like lot number, charge amount, and more to generate the invoice and have an excel spreadsheet automatically updated to reflect the new invoice. This has saved the both of us many hours of work and counting through the automation of the process.",
    toolsUsed:[
      "Python", "PySimpleGUI", "OpenPyXL"
    ],
    youtube: "https://youtu.be/94pgVkFNxWE",
    github: "",
    link: "",
  },
  {
    img: AudioImage,
    name: "Aud.io",
    desc: "A group project at UCF, Aud.io is a React web application which allows for the many funcitonalities of music streaming and playlist-making. It's library is based entirely on copyright-free music.",
    toolsUsed:[
      "React","JavaScript","Auth0","CSS","Google Firebase"
    ],
    youtube: "https://www.youtube.com/watch?v=9KzQinshGLw",
    github: "https://github.com/santy81855/Music_Player",
    link: "",
  },
  {
    img: TodoImage,
    name: "React To-Do Application",
    desc: "My first React project. In it, I made it possible to categorize your items in the list by coloring each row. This way, I was able to group items by class or priorrity or anything else I could think of. I actually used this as my personal to do list for quite a while.",
    toolsUsed:[
      "React","JavaScript","CSS"
    ],
    youtube: "https://youtu.be/VKHbt1Z5-Fg",
    github: "https://github.com/rubionestor611/ReactToDo",
    link: "",
  },
  {
    img: PasswordImage,
    name: "Password Manager & Generator",
    desc: "My first personal project, it is a GUI used to store usernames and passwords for sites locally to a MySQL database. It includes ability to copy results to keyboard, generate a password, retrieve a password, and remove a password.",
    toolsUsed:[
      "Java","Java Swing", "MySQL"
    ],
    youtube: "https://youtu.be/GedZo7i60aI",
    github: "https://github.com/rubionestor611/PasswordManager",
    link: "",
  },
]

export const selfieImage = {img: selfie, alt: "Selfie of Nestor"};
export const gradImage = {img:grad,alt:"Picture of Nestor at UCF graduation"};
export const armsOutImage = {img:armsOut,alt:"Picture of Nestor in graduation cap & gown with arms out"};
export const memojiImage = {img:memoji,alt:"Nestor's Apple Memoji picture"};