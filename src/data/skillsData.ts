import { title } from "process";
import { FaReact, FaAngular, FaNodeJs, FaHtml5 } from "react-icons/fa";
import {
    SiExpress,
    SiTailwindcss,
    SiJavascript,
    SiPostgresql,
    SiMongodb,
    SiVitest,
} from "react-icons/si";

export const skills = {
  frontend: {
    title: "Frontend",
    stacks: [
      {
        stack: "JavaScript",
        icon: SiJavascript,
      },
      {
        stack: "React.Js",
        icon: FaReact,
      },
      {
        stack: "Angular.Js",
        icon: FaAngular,
      },
      {
        stack: "tailwindcss",
        icon: SiTailwindcss,
      },
      {
        stack: "HTML",
        icon: FaHtml5,
      },
      {
        stack: "Vite",
        icon: SiVitest,
      },
    ],
  },
  backend: {
    title: "Backend",
    stacks: [
      {
        stack: "Node.js",
        icon: FaNodeJs,
      },
      {
        stack: "Express.Js",
        icon: SiExpress,
      },
      {
        stack: "Postgresql",
        icon: SiPostgresql,
      },
      {
        stack: "MangoDB",
        icon: SiMongodb,
      },
    ],
  },
};