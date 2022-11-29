import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

import eCommerceAngular from "./images/eCommerceAngular.webp"
import ExpressJSPostman from "./images/ExpressJSPostman.webp"
import Portfolio from "./images/Portfolio.webp"
import QBT from  "./images/QBT.webp"
import techNotes from "./images/techNotes.webp"

export const Experience = [
  {
    id: 1,
    date: "2022 - Present",
    iconsSrc: <IoCodeWorking />,
    title: "Customer Support Engineer",
    location: "Kaseya, Miami FL",
    description:
      "Moderate Website, Documentation, Data Warehouse Management, and Project Management",
  },
  {
    id: 2,
    date: "2022 - 2022",
    iconsSrc: <IoCodeWorking />,
    title: "IT Support Analyst",
    location: "Azulle, Miami FL",
    description:
      "Moderate Website, Documentation, Data Warehouse Management, and Project Management",
  },
  {
    id: 3,
    date: "2021 - 2022",
    iconsSrc: <IoCodeWorking />,
    title: "Fullstack Developer",
    location: "FIU, Miami FL",
    description:
      "Web Development, User Experience, Visual Design, Project Management, and Team Leading",
  },

  {
    id: 4,
    date: "2019 - 2020",
    iconsSrc: <IoCodeWorking />,
    title: "Technician",
    location: "NextMRO, Miami FL",
    description:
      "Perform routine checks, Repairs, Overhauls, and Project Management",
  },
  {
    id: 5,
    date: "2014 - 2019",
    iconsSrc: <IoCodeWorking />,
    title: "Inspector",
    location: "Illuminair Support, Miami FL",
    description:
      "Incoming and Final Inspections, Assembly-Disassembly of units, and Project Management",
  },
  {
    id: 6,
    date: "2012 - 2014",
    iconsSrc: <IoCodeWorking />,
    title: "Assistant Manager",
    location: "RadioShack, Miami FL",
    description:
      "Project Management, Team Leading",
  },
];

export const Projects = [
  {
    id: 1,
    name: "eCommerce Web App",
    imageSrc: eCommerceAngular,
    techs: "Angular, Firebase, TypeScript",
    github: "https://github.com/yenferro89/eCommerce_Angular",
  },
  {
    id: 2,
    name: "ExpressJS API",
    imageSrc: ExpressJSPostman,
    techs: "NodeJS, ExpressJS",
    github: "https://github.com/yenferro89/ExpressJS-API",
  },
  {
    id: 3,
    name: "Portfolio 3.0",
    imageSrc: Portfolio,
    techs: "React, Firebase, JSX",
    github: "https://github.com/yenferro89/portfolio-3.0",
  },
  {
    id: 4,
    name: "Quality Behavior Therapy",
    imageSrc: QBT,
    techs: "NextJS, Tailwind, Vercel",
    github: "https://www.qbehavior.com/",
  },
  {
    id: 5,
    name: "techNotes",
    imageSrc: techNotes,
    techs: "MongoDB, ExpressJS, React, NodeJS",
    github: "https://github.com/yenferro89/techNotes",
  },

];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/yenferro89",
  },
  {
    id: 2,
    iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCKToESzJI7tM05eoBBZ-44g",
  },
  {
    id: 3,
    iconSrc: (
      <IoLogoInstagram className="text-orange-300 text-3xl cursor-pointer" />
    ),
    name: "Instagram",
    link: "https://www.instagram.com/yenferro/",
  },
  {
    id: 4,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yen-pinero-ferro-523a361b2",
  },
  {
    id: 5,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "WhatsApp",
    link: "https://wa.me/13054922467/",
  },
];
