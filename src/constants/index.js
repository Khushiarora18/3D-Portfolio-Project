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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  carrent,
  tripguide,
  threejs,
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
    title: "Data Structures",
    icon: mobile,
  },
  {
    title: "OOPS",
    icon: backend,
  },
  {
    title: "Computer Networks",
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
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "php",
    icon: redux,
  },
];

const experiences = [
  {
    title: "Data Structures and Algorithm",
    company_name: "Coding Blocks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Comprehensive curriculum covering essential data structures and algorithms.",
      "Hands-on practical projects for real-world application.",
      "Industry-relevant challenges to enhance problem-solving abilities.",
      "Experienced instructors and peer interaction for effective learning.",
    ],
  },
  {
    title: "Full Stack Web Development",
    company_name: "Internshala",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Successfully completed a rigorous Full Stack Web Development certification course covering front-end, back-end, and database technologies. Gained in-depth knowledge of HTML, CSS, JavaScript, React, PHP, among others.",
      "Demonstrated practical skills by developing a fully functional web application as part of the course. Created an engaging and user-friendly project that showcased proficiency in implementing dynamic features, and managing data interactions.",
      " Engaged in a collaborative learning environment with industry-experienced instructors and like-minded peers. ",
      "Gained valuable experience in identifying and resolving challenges throughout the development process. ",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  /*  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },*/
];

const projects = [
  {
    name: "Live Weather App",
    description:
      "Web-based platform that utilizes an API to fetch real-time weather data. It displays current weather conditions, temperature, and other relevant information for a given location, providing users with up-to-date weather details in an intuitive and user-friendly interface.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/Khushiarora18/Live-WeatherApp-Project",
  },
  {
    name: "PG Life",
    description:
      "PG Life is a Full-Stack Web Application. This is a project that I was assigned to make during my Internshala Full Stack Web Development Internship Training. Tech Stack:- HTML, CSS, Bootstrap 5, Javascript, AJAX, PHP, MySQL.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Khushiarora18/PG_Life-Project",
  },
  {
    name: "Spotify 2.0",
    description:
      "Spotify 2.0: A work-in-progress project to enhance my skills with APIs. Soon to be featured on this website!.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "SpotifyAPI",
        color: "green-text-gradient",
      },
      {
        name: "ContextAPI",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
