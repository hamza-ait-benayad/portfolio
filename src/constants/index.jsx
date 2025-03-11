import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../../public/icons";

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
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
    language: ["Html", "CSS", "JavaScript"],
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
    language: ["Html", "CSS", "JavaScript"],
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
    language: ["Html", "CSS", "JavaScript"],
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

