import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import img1 from "./images/IMG_1339.jpg";

export const Experience = [
  {
    id: 1,
    date: "2016 - present",
    iconsSrc: <IoCodeWorking />,
    title: "Creative Director",
    location: "Miami, FL",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    id: 2,
    date: "2014 - 2016",
    iconsSrc: <IoCodeWorking />,
    title: "Creative Director",
    location: "Miami, FL",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    id: 3,
    date: "2012 - 2014",
    iconsSrc: <IoCodeWorking />,
    title: "Creative Director",
    location: "Miami, FL",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    id: 4,
    date: "2011 - 2012",
    iconsSrc: <IoCodeWorking />,
    title: "Creative Director",
    location: "Miami, FL",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    id: 5,
    date: "2010 - 2011",
    iconsSrc: <IoCodeWorking />,
    title: "Creative Director",
    location: "Miami, FL",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
];

export const Projects = [
  {
    id: 1,
    name: "eCommerce Web App",
    imageSrc: img1,
    techs: "Angular, Firebase, TypeScript",
    github: "https://github.com/yenferro89/eCommerce_Angular",
  },
  {
    id: 2,
    name: "ExpressJS API",
    imageSrc: img1,
    techs: "NodeJS, ExpressJS",
    github: "https://github.com/yenferro89/ExpressJS-API",
  },
  {
    id: 3,
    name: "Travel Advisor",
    imageSrc: img1,
    techs: "React Js, Chakra UI, Google API",
    github: "#",
  },
  {
    id: 4,
    name: "Pintrest UI Clone 2.0 ",
    imageSrc: img1,
    techs: "React Js,  Material UI",
    github: "#",
  },
  {
    id: 5,
    name: "Own Video Blog",
    imageSrc: img1,
    techs: "React Js, Chara UI, Firebase",
    github: "#",
  },
  {
    id: 6,
    name: "Whatsapp UI Clone",
    imageSrc: img1,
    techs: "NextJs, Firebase Auth",
    github: "#",
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
    link: "https://drive.google.com/file/d/1DaMTztN3SNWb61fAx52uJGcc5X1cpPiX/view?usp=sharing",
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
    name: "Whatsapp",
    link: "https://drive.google.com/file/d/1w_qu-wn6nFCJaxdcF-fpr9Yi76_YgBkC/view?usp=sharing",
  },
];
