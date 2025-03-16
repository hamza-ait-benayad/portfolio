import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../../public/icons";

import {
  nike_project_img,
  movies_project_img,
  manage_project_img,
} from "../../public/images";

import { RiReactjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";

export const hero_image = "../assets/images/portfolio.png";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experiances", label: "Experiances" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const projects = [
  {
    id: 1,
    imgURL: nike_project_img,
    label: "Nike Clone",
    subtext:
      "A modern web application designed to showcase and sell Nike shoes, featuring a user-friendly interface and smooth navigation.",
      languages: [
        { id: 1, icon: <RiReactjsFill />,name:"ReactJS" },
        {
          id: 2,
          icon: <SiTailwindcss />, name:"Tailwind CSS"
        },
        { id: 3, icon: <TbBrandJavascript />,name:"JavaScript" },
      ],
  },
  {
    id: 2,
    imgURL: movies_project_img,
    label: "Movies App",
    subtext:
      "Designed and develope a user-friendly movie app. The app features a clean, modern interface with trending movie highlights.",
    languages: [
      { id: 1, icon: <RiReactjsFill />,name:"ReactJS" },
      {
        id: 2,
        icon: <SiTailwindcss />,name:"Tailwind CSS"
      },
      { id: 3, icon: <TbBrandJavascript />,name:"JavaScript" },
    ],
  },
  {
    id: 3,
    imgURL: manage_project_img,
    label: "Manage",
    subtext:
      "Modern landing page that showcases your SaaS project with a clean, intuitive UI.",
      languages: [
        { id: 1, icon: <IoLogoHtml5 />,name:"HTML" },
        {
          id: 2,
          icon: <IoLogoCss3 />,name:"CSS"
        },
        { id: 3, icon: <TbBrandJavascript />,name:"JavaScript" },
      ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const technologies = [
  {
    icon: <RiReactjsFill />,
    description: "React js",
  },
  {
    icon: <SiTailwindcss />,
    description: "Tailwind css",
  },
  {
    icon: <TbBrandJavascript />,
    description: "Java Script",
  },
  {
    icon: <IoLogoCss3 />,
    description: "CSS",
  },
  {
    icon: <IoLogoHtml5 />,
    description: "HTML",
  },
];
