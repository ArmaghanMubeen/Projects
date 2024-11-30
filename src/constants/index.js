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
  powersoft19,
  code_solution_zone,
  freelance,
  cdoxs,
  bomi,
  threejs,
  ashhad,
  kashif,
  shaheer,
  cinenoir,
  guide_tailors,
  hamster_cat,
  hunt_and_harris,
  law_nexus,
  md_offices,
  ndroide,
  railway,
  pop_deal_royality,
  property_concierge,
  route_rules,
  ss_network,
  sign_guardian,
  slick_accountants,
  veeta_ai,
  qreate,
  freeflow_vpn,
  firebase,
  flutter,
  kp_network,
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
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Sr. Software Engineer",
    company_name: "Code Solution Zone",
    icon: code_solution_zone,
    iconBg: "#383E56",
    date: "May 2024 - Dec 2024",
    points: [
      "Developed cross-platform mobile applications using Flutter, integrated with Firebase for real-time database and authentication",
      "Built scalable backend solutions with Node.js and MongoDB, optimizing API performance, and reducing response time by 20%",
      "Contributed to the development of full-stack applications with the MERN stack, ensuring responsive and high-performance solutions.",
      "Implemented marketing strategies that increased user traffic by 35% within the first 3 months of the app launch.",
      "Published Android and iOS apps while leading a team of developers, collaborating with designers and stakeholders to ensure user friendly interfaces.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - May 2024",
    points: [
      "Designed, developed, and deployed full-stack applications using technologies such as React, Node.js, and Flutter.",
      "Integrated third-party APIs, including payment gateways and social media platforms, to enhance app functionality.",
      "Managed end-to-end project development, adapting to diverse requirements and ensuring scalable solutions for clients, including government officials.",
      "Adapted to diverse client requirements, ensuring scalability and performance, which led to a 50% increase in recurring business.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "CDOXS",
    icon: cdoxs,
    iconBg: "#383E56",
    date: "Oct 2021 - Apr 2022",
    points: [
      "Developed high-performance mobile applications in Dart, Java, and Kotlin for industries including e-commerce, online food delivery, and home essentials.",
      "Delivered end-to-end app development while maintaining high code quality standards, reducing bug-related issues by 25% post-launch.",
      "Published apps with a focus on user experience, maintaining optimal functionality and responsiveness.",
    ],
  },
  {
    title: "Software Engineer, Intern",
    company_name: "Powersoft19",
    icon: powersoft19,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Jul 2021",
    points: [
      "Developed dynamic, responsive websites using PHP, SQL, JavaScript, jQuery, HTML, and CSS",
      "Collaborated with the QA team to ensure cross-browser compatibility, helping maintain a 98% compatibility rate across major browsers.",
      "Gained hands-on experience in both front-end and back-end development, contributing to the overall functionality of web projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Provided an outstanding website with great attention to detail, exceeding all our expectations.",
    name: "Kashif ACA",
    designation: "CFO",
    company: " at The Imperial Electric Co.",
    image: kashif,
  },
  {
    testimonial:
      "Worked with Armaghan on many tech projects. Always reliable, innovative, and delivers top-quality results!",
    name: "Shaheer",
    designation: "Audit Associate",
    company: " at KPMG",
    image: shaheer,
  },
  {
    testimonial:
      "Working with Armaghan has been incredible. He mentored me through complex projects, offering invaluable guidance and expertise.",
    name: "Ashhad",
    designation: "Tech Consultant & Entrepreneur",
    company: "",
    image: ashhad,
  },
];

const projects = [
  {
    name: "Pakistan Railways Official",
    description:
      "Provided consulting services to Pakistan Railways, recommending features for their official app, including real-time train tracking, predictive travel times, interactive maps, geolocation-triggered notifications, and a smart assistant for FAQs, along with backend optimizations for faster load times and improved responsiveness",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "dbms",
        color: "pink-text-gradient",
      },
    ],
    image: railway,
    source_code_link:
      "https://play.google.com/store/apps/details?id=pk.gov.railways&hl=en_US",
  },
  {
    name: "BOMI",
    description:
      "A mobile app offering time-based virtual rewards that simulate a mining-like experience without hardware, featuring optimized performance for smooth usage on lower-end devices, a flexible reward system based on interaction duration, and a user-friendly interface for tracking rewards and enhancing engagement.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "REST APIs",
        color: "pink-text-gradient",
      },
    ],
    image: bomi,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.bomi.bomiapp&pcampaignid=web_share",
  },
  {
    name: "RouteRules",
    description:
      "Mobile app for government officials that educates citizens for driving test success, integrates essential test info, follows the official format, and includes enhancements.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: route_rules,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.drivesmartdesignedanddevelopedbyarmaghanmubeenbutt.drivesmart&hl=en_US",
  },

  {
    name: "SS Network",
    description:
      "Mobile app simulating network-based rewards through a time-driven system, allowing users to accumulate virtual assets with minimal resource consumption. Built for future integration, supporting potential features like network mining and monetization. Focused on user engagement with a seamless interface to track rewards and control activities.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: ss_network,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.ssnetwork.com&hl=en_US",
  },
  {
    name: "SignGuardian",
    description:
      "AI app for road safety that identifies traffic signs and assesses damage, with location-based reporting to traffic police.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "matlab",
        color: "pink-text-gradient",
      },
    ],
    image: sign_guardian,
    source_code_link: "https://github.com/ArmaghanMubeen/SignGuardian",
  },
  {
    name: "Hamster Cat",
    description:
      "A mobile app that simulates a cloud mining experience, eliminates the need for energy-intensive hardware, features a scalable architecture for potential real mining integration, and enhances user engagement with a responsive interface for tracking simulated progress.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: hamster_cat,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.hamstercatnetwork.hamsternetwork&hl=en",
  },
  {
    name: "Law Nexus",
    description:
      "Led design and development of law firm’s web application, gaining valuable insights during implementation.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "team leading",
        color: "green-text-gradient",
      },
      {
        name: "project management",
        color: "pink-text-gradient",
      },
    ],
    image: law_nexus,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.guidetailors.gt&hl=en",
  },
  {
    name: "GuideTailors",
    description:
      "Developed GuideTailors app with online tailoring and e-commerce features, sold it for international expansion, and later rehired for debugging, updates, deployment, and admin panel creation.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "marketing",
        color: "pink-text-gradient",
      },
    ],
    image: guide_tailors,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.guidetailors.gt&hl=en",
  },
  {
    name: "Property Concierge CRM",
    description:
      "Led feature development, ensured code scalability, resolved critical issues, and pioneered innovative solutions for team synergy and long-term efficiency.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "collaboration",
        color: "pink-text-gradient",
      },
    ],
    image: property_concierge,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.astecopc.crmapp&hl=en",
  },
  {
    name: "Ndoride",
    description:
      "Enhanced a mobile app's user experience by collaborating on feature development, bug fixing, and performance optimization, ensuring stability, responsiveness, and adherence to industry standards.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "dbms",
        color: "green-text-gradient",
      },
      {
        name: "swift",
        color: "pink-text-gradient",
      },
    ],
    image: ndroide,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.ndoride.userapp&hl=en_US",
  },
  {
    name: "Hunt and Harris RE",
    description:
      "Contributed to core features, resolved critical issues, proposed solutions to challenges, and enhanced user experience through feedback.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "collaboration",
        color: "pink-text-gradient",
      },
    ],
    image: hunt_and_harris,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.huntandharrisre.erpapp&hl=pt_PT",
  },
  {
    name: "CinéNoir",
    description:
      "CinéNoir app for tracking film industry trends with secure content saving, detailed movie data, official graphics, and robust third-party integrations, built using Agile methodologies.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "designing",
        color: "pink-text-gradient",
      },
    ],
    image: cinenoir,
    source_code_link: "https://github.com/ArmaghanMubeen/Movie-Application",
  },

  {
    name: "MDoffices",
    description:
      "Developed a web application for a USA company, surpassing expectations while showcasing effective remote collaboration and communication skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "designing",
        color: "green-text-gradient",
      },
      {
        name: "project management",
        color: "pink-text-gradient",
      },
    ],
    image: md_offices,
    source_code_link: "https://mdoffices.org/",
  },

  {
    name: "PopDeal",
    description:
      "Enhanced a popular deals and offers app on Google Play Store, optimizing functionality and performance while applying Agile methodologies and teamwork to strengthen development skills.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: pop_deal_royality,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.popDeal.androidApplication&hl=en",
  },

  {
    name: "SlickAccountants - Mobile Application",
    description:
      "Developed and sold SlickAccountants app and website, then hired for debugging, modification, and deployment.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "problem solving",
        color: "pink-text-gradient",
      },
    ],
    image: slick_accountants,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.slickaccountants.slick_accountants&hl=en",
  },
  {
    name: "SS Network",
    description:
      "Mobile app simulating network-based rewards through a time-driven system, allowing users to accumulate virtual assets with minimal resource consumption. Built for future integration, supporting potential features like network mining and monetization. Focused on user engagement with a seamless interface to track rewards and control activities.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: ss_network,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.ssnetwork.com&hl=en_US",
  },
  {
    name: "KP Network",
    description:
      "An innovative mobile app designed to reward users through a time-based system, providing a resource-efficient way to accumulate virtual assets. Built with future-ready architecture, it supports potential features like network-driven earning and monetization.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: kp_network,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.kpnetwok.kp&pcampaignid=web_share",
  },
  {
    name: "SlickAccountants - Web Application",
    description:
      "Developed slickaccountants.org with features for client reviews, service offers, and questions, reducing customer service costs. Handled debugging, deployment, and admin panel development. Sold the website for international expansion.",
    tags: [
      {
        name: "web",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: slick_accountants,
    source_code_link: "https://slickaccountants.org/",
  },
  {
    name: "VEETA AI",
    description:
      "App offers a virtual mining experience with time-based rewards, reducing the need for power-intensive equipment. Built for scalability, it can integrate with cloud mining services in the future. Features an intuitive interface for managing mining sessions and tracking virtual rewards.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: veeta_ai,
    source_code_link:
      "https://play.google.com/store/search?q=veeta%20ai&c=apps",
  },
  {
    name: "QReate",
    description:
      "Developed a mobile app that lets users easily scan, generate, and save QR codes, ensuring smooth performance and an intuitive interface for quick and reliable use.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "desiging",
        color: "green-text-gradient",
      },
      {
        name: "integration",
        color: "pink-text-gradient",
      },
    ],
    image: qreate,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.qreate.app&pcampaignid=web_share",
  },
  {
    name: "FreeFlow VPN",
    description:
      "Designed and developed a VPN app offering secure, fast, and reliable connectivity with an intuitive user interface.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "designing",
        color: "pink-text-gradient",
      },
    ],
    image: freeflow_vpn,
    source_code_link: "https://github.com/ArmaghanMubeen/FreeFlow-VPN.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
