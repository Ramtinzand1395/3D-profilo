import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  graphql,
  next,
  chatengine,
  shop,
  Web_log,
  mui,
  Map,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "material ui",
    icon: mui,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "next js",
    icon: next,
  },
];

const testimonials = [
  {
    testimonial:
"Sara Lee testimonial",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
    "Chris Brown testimonial",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
    "Lisa Wang testimonial",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chat Aplication",
    description:"Chat Aplication description",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "context",
        color: "pink-text-gradient",
      },
    ],
    image: chatengine,
    source_code_link: "https://github.com/",
  },
  {
    name: "Redux Shop",
    description:"Redux Shop description",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/Ramtinzand1395/redux-shop",
  },
  {
    name: "Web-log",
    description: "Web-log description",
        tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Qraphql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: Web_log,
    source_code_link: "https://github.com/Ramtinzand1395/weblog",
  },
  ,
  {
    name: "Map Online",
    description: "Map Onlinedescription",
        tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "leaflet",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: Map,
    source_code_link: "https://github.com/Ramtinzand1395/pishgamanasia",
  },
];

export { services, technologies, testimonials, projects };
