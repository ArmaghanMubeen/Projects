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
  jobit,
  tripguide,
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
    title: "Flutter Developer",
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
    title: "Flutter Developer",
    company_name: "Code Solution Zone",
    icon: code_solution_zone,
    iconBg: "#383E56",
    date: "May 2024 - Dec 2024",
    points: [
      "Developed cross-platform mobile applications, handling both front-end and back-end development.",
      "Gained hands-on experience with MERN Stack technologies, contributing to full-stack development projects.",
      "Collaborated closely with the management and design teams to enhance app functionalities and deliver innovative solutions.",
      "Provided technical insights and recommendations to improve product development processes and project efficiency.",
    ],
  },
  {
    title: "MERN Stack & Flutter Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - May 2024",
    points: [
      "Developed a wide range of applications across various domains, showcasing adaptability and technical expertise.",
      "Managed projects from planning to deployment, mastering time management and adaptability.",
      "Skilled in diverse programming languages and frameworks, enabling versatile and efficient development.",
      "Honed discipline and problem-solving abilities while working solo.",
    ],
  },
  {
    title: "Native Android & Flutter Developer",
    company_name: "CDOXS",
    icon: cdoxs,
    iconBg: "#383E56",
    date: "Oct 2021 - Apr 2022",
    points: [
      " Experienced Flutter developer specializing in crafting innovative mobile applications.",
      "Developed diverse apps such as online food delivery, e-commerce, discount offer platforms, and home essentials delivery services.",
      "Proficient in advanced software development, project management, collaborative teamwork, problem-solving, and user-centric design.",
    ],
  },
  {
    title: "MERN Stack Developer Intern",
    company_name: "Powersoft19",
    icon: powersoft19,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Jul 2021",
    points: [
      "Internship at PowerSoft19, focusing on full-stack web development.",
      "Acquired skills in comprehensive web development, problem-solving, adaptability, and client communication.",
      "Strengthened attention to detail in a collaborative, high-pressure environment.",
      "Ready to contribute to innovative web development teams with newfound expertise.",
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
    name: "CinéNoir",
    description:
      "CinéNoir app for tracking film industry trends with secure content saving, detailed movie data, official graphics, and robust third-party integrations, built using Agile methodologies.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: cinenoir,
    source_code_link: "https://github.com/ArmaghanMubeen/Movie-Application",
  },
  {
    name: "GuideTailors",
    description:
      "Developed GuideTailors app with online tailoring and e-commerce features, sold it for international expansion, and later rehired for debugging, updates, deployment, and admin panel creation.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: guide_tailors,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.guidetailors.gt&hl=en",
  },
  {
    name: "Hamster Cat",
    description:
      "A mobile app that simulates a cloud mining experience, eliminates the need for energy-intensive hardware, features a scalable architecture for potential real mining integration, and enhances user engagement with a responsive interface for tracking simulated progress.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hamster_cat,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.hamstercatnetwork.hamsternetwork&hl=en",
  },
  {
    name: "Hunt and Harris RE",
    description:
      "Contributed to core features, resolved critical issues, proposed solutions to challenges, and enhanced user experience through feedback.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hunt_and_harris,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.huntandharrisre.erpapp&hl=pt_PT",
  },
  {
    name: "Law Nexus",
    description:
      "Developed GuideTailors app with online tailoring and e-commerce features, sold it for international expansion, and later rehired for debugging, updates, deployment, and admin panel creation.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: law_nexus,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.guidetailors.gt&hl=en",
  },
  {
    name: "MDoffices",
    description:
      "Developed a web application for a USA company, surpassing expectations while showcasing effective remote collaboration and communication skills.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: md_offices,
    source_code_link: "https://mdoffices.org/",
  },
  {
    name: "Ndoride",
    description:
      "Enhanced a mobile app's user experience by collaborating on feature development, bug fixing, and performance optimization, ensuring stability, responsiveness, and adherence to industry standards.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ndroide,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.ndoride.userapp&hl=en_US",
  },
  {
    name: "Pakistan Railways Official",
    description:
      "Enhanced Pakistan Railway's official app by integrating real-time train tracking, predictive travel times, interactive route maps, geolocation-triggered notifications, and a smart assistant for FAQs, while optimizing the backend for faster load times and responsiveness.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: railway,
    source_code_link:
      "https://play.google.com/store/apps/details?id=pk.gov.railways&hl=en_US",
  },
  {
    name: "PopDeal",
    description:
      "Enhanced a popular deals and offers app on Google Play Store, optimizing functionality and performance while applying Agile methodologies and teamwork to strengthen development skills.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pop_deal_royality,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.popDeal.androidApplication&hl=en",
  },
  {
    name: "Property Concierge CRM",
    description:
      "Led feature development, ensured code scalability, resolved critical issues, and pioneered innovative solutions for team synergy and long-term efficiency.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: property_concierge,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.astecopc.crmapp&hl=en",
  },
  {
    name: "RouteRules",
    description:
      "Mobile app for government officials that educates citizens for driving test success, integrates essential test info, follows the official format, and includes enhancements.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
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
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
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
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sign_guardian,
    source_code_link: "https://github.com/ArmaghanMubeen/SignGuardian",
  },
  {
    name: "SlickAccountants - Mobile Application",
    description:
      "Developed and sold SlickAccountants app and website, then hired for debugging, modification, and deployment.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: slick_accountants,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.slickaccountants.slick_accountants&hl=en",
  },
  {
    name: "SlickAccountants - Web Application",
    description:
      "Developed slickaccountants.org with features for client reviews, service offers, and questions, reducing customer service costs. Handled debugging, deployment, and admin panel development. Sold the website for international expansion.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
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
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
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
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
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
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: freeflow_vpn,
    source_code_link: "https://github.com/ArmaghanMubeen/FreeFlow-VPN.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
