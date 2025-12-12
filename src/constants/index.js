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
  carrent,
  // jobit,
  // tripguide,
  rentify,
  amboportal,
  augcvs,
  timetable,
  threejs,
  resume,
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
  {
    id: "resume",
    title: "Resume",
    link: resume,
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Security Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express",
    icon: nodejs,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Android",
    icon: mobile,
  },
  {
    name: "Kotlin",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "REST API",
    icon: backend,
  },
  {
    name: "Cyber Security",
    icon: docker,
  },
];

const experiences = [];

const testimonials = [
  {
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
  },
];

const projects = [
  {
    name: "Ambo University Graduation Credential Verification System",
    description:
      "A secure web-based system built with MERN stack for verifying graduation credentials of Ambo University students. Features secure authentication, QR code generation, and real-time verification capabilities.",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: augcvs,
    source_code_link: "https://github.com/Yakob-B/AUGCVS",
    demo_link: "https://augcvs.vercel.app/",
  },
  {
    name: "🏡 Rentify – Smart Rental Platform",
    description:
      "Rentify is a full-stack web platform designed to simplify property and asset rentals in Ethiopia. It connects owners and renters through a secure and intuitive interface with modern features such as user authentication with role-based access (Admin, Owner, Renter), category-based listings for homes, cars, offices, and more, location-based recommendation system that shows nearby listings, image uploads via Cloudinary, booking and approval workflow, and future-ready payment integrations (Telebirr, Stripe). Fully responsive and animated UI built with TailwindCSS.",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: rentify,
    source_code_link: "https://github.com/Yakob-B/Rentify",
    demo_link: "https://rentify-orcin-five.vercel.app",
  },
  {
    name: "Ambo Portal",
    description:
      "A comprehensive educational dashboard portal for Ambo University featuring campus statistics, department overviews, and school information. The portal displays real-time data including student counts, faculty numbers, and department statistics with a modern dark-themed interface.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Dashboard",
        color: "green-text-gradient",
      },
      {
        name: "Dark Mode",
        color: "pink-text-gradient",
      },
    ],
    image: amboportal,
    source_code_link: "https://github.com/Yakob-B",
  },
  {
    name: "Timetable Scheduling App",
    description:
      "Android application developed with Kotlin for managing and viewing class timetables. Features intuitive UI with smooth animations, offline support, and notification reminders for upcoming classes.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Android",
        color: "green-text-gradient",
      },
      {
        name: "XML",
        color: "pink-text-gradient",
      },
    ],
    image: timetable,
    source_code_link: "https://github.com/Yakob-B",
  },
];

export { services, technologies, experiences, testimonials, projects };
