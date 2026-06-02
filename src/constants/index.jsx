import {
  echofex_project_img,
  nike_project_img,
  movies_project_img,
  manage_project_img,
} from "../assets/images/index.js";

import { RiReactjsFill } from "react-icons/ri";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaJava, FaPhp, FaLaravel } from "react-icons/fa6";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experiences", label: "Experiences" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const projects = [
  {
    id: 0,
    imgURL: echofex_project_img,
    label: "Echofex — Smart Home Affiliate Platform",
    subtext:
      "A production-ready affiliate website built with Next.js 15 App Router, TypeScript, Tailwind CSS, and Sanity CMS. Features advanced SEO and real-time filtering.",
    extendedDetails: {
      overview: "Echofex is a full-stack, SEO-optimized affiliate marketing website focused on smart home devices and IoT gadgets. It serves as a content hub—combining expert product reviews, buying guides, and affiliate links—built for real monetization using the Amazon Associates program.",
      images: [
        "/images/echofix1.png",
        "/images/echofix2.png",
        "/images/test_speed.png"
      ],
      features: [
        "Headless CMS (Sanity.io) for dynamic products & articles",
        "Full SEO with structured data (JSON-LD: FAQPage, Product, Organization)",
        "Amazon affiliate integration with nofollow compliance",
        "Real-time search across products and articles",
        "Dark mode, mobile-first responsive design",
        "Web Vitals monitoring & aggressive caching strategy"
      ],
      techStack: ["Next.js 15 (App Router)", "TypeScript", "Tailwind CSS v4", "Sanity.io", "Vercel"]
    },
    languages: [
      { id: 1, icon: <SiNextdotjs />, name: "Next.js" },
      { id: 2, icon: <SiTypescript />, name: "TypeScript" },
      { id: 3, icon: <SiTailwindcss />, name: "Tailwind CSS" },
    ],
    url: "https://www.echofex.me/",
  },
  {
    id: 1,
    imgURL: nike_project_img,
    label: "Nike Clone",
    subtext:
      "A modern web application designed to showcase and sell Nike shoes, featuring a user-friendly interface and smooth navigation.",
    languages: [
      { id: 1, icon: <RiReactjsFill />, name: "ReactJS" },
      {
        id: 2,
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
      },
      { id: 3, icon: <TbBrandJavascript />, name: "JavaScript" },
    ],
    url: "https://nike-clone24.netlify.app/",
  },
  {
    id: 2,
    imgURL: movies_project_img,
    label: "Movies App",
    subtext:
      "Designed and developed a user-friendly movie app. The app features a clean, modern interface with trending movie highlights.",
    languages: [
      { id: 1, icon: <RiReactjsFill />, name: "ReactJS" },
      {
        id: 2,
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
      },
      { id: 3, icon: <TbBrandJavascript />, name: "JavaScript" },
    ],
    url: "https://wonderful-mandazi-0fa2ab.netlify.app/",
  },
  {
    id: 3,
    imgURL: manage_project_img,
    label: "Manage",
    subtext:
      "Modern landing page that showcases your SaaS project with a clean, intuitive UI.",
    languages: [
      { id: 1, icon: <IoLogoHtml5 />, name: "HTML" },
      {
        id: 2,
        icon: <IoLogoCss3 />,
        name: "CSS",
      },
      { id: 3, icon: <TbBrandJavascript />, name: "JavaScript" },
    ],
    url: "https://managing-teams.netlify.app/",
  },
];

export const experiences = [
  {
    id: 1,
    year: "2024",
    start_date: "April",
    end_date: "May",
    description:
      "During my internship at Ecole Nationale de Commerce et de Gestion, I developed a stock management system using Laravel for backend management and React JS for the frontend, enabling efficient stock management. I was also responsible for the installation and configuration of a web server, ensuring smooth deployment and hosting of the application for optimal performance.",
  },
  {
    id: 2,
    year: "2023",
    start_date: "July",
    end_date: "August",
    description:
      "During my internship at Fiduciaire Al Widad, I created a company website to showcase the firm's services and improve its online visibility. Additionally, I carried out various tasks using Excel, contributing to data management and administrative support.",
  },
];

export const socialMedia = [
  { id: 1, icon: <FaGithub />, url: "https://github.com/hamza-ait-benayad" },
  {
    id: 2,
    icon: <CiLinkedin />,
    url: "https://www.linkedin.com/in/hamza-aitbenayad-612ba819b/",
  },
  { id: 3, icon: <FaXTwitter />, url: "https://x.com/hamza_bendy" },
  { id: 4, icon: <FaInstagram />, url: "https://instagram.com" },
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
    description: "JavaScript",
  },
  {
    icon: <IoLogoCss3 />,
    description: "CSS",
  },
  {
    icon: <IoLogoHtml5 />,
    description: "HTML",
  },
  {
    icon: <FaJava />,
    description: "Java",
  },
  {
    icon: <FaPhp />,
    description: "PHP",
  },
  {
    icon: <FaLaravel />,
    description: "Laravel",
  },
];
