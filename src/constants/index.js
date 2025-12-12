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

const experiences = [
  {
    title: "President",
    company_name: "Ambo University Developer Club",
    icon: web,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Leading and managing a community of student developers, organizing workshops, hackathons, and tech talks.",
      "Coordinating technical training sessions on web development, mobile development, and software engineering best practices.",
      "Mentoring junior developers and facilitating knowledge sharing within the tech community.",
      "Building partnerships with tech companies and organizing career development events for students.",
    ],
  },
  {
    title: "Team Leader & Full Stack Developer",
    company_name: "AUGCVS - Final Year Project",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Led a team in developing a comprehensive graduation credential verification system for Ambo University using the MERN stack.",
      "Implemented secure authentication, QR code generation, and real-time verification capabilities.",
      "Designed and developed both frontend (React) and backend (Node.js, Express, MongoDB) components.",
      "Deployed the application on Vercel with proper security measures and database optimization.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Campus Department Information System",
    icon: web,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Developed a comprehensive educational dashboard portal for Ambo University featuring campus statistics and department overviews.",
      "Built with React, displaying real-time data including student counts, faculty numbers, and department statistics.",
      "Implemented a modern dark-themed interface with responsive design for various devices.",
      "Collaborated with university administration to gather requirements and deliver a user-friendly solution.",
    ],
  },
];

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
    caseStudy: {
      problem: "Universities in Ethiopia face significant challenges in verifying graduation credentials manually, leading to delays, fraud risks, and inefficiencies. The lack of a centralized digital system makes it difficult for employers and institutions to verify credentials quickly and securely.",
      solution: "Developed AUGCVS as my final year project, leading a team to create a comprehensive MERN stack web application that digitizes the entire credential verification process. The system implements QR code technology, secure authentication, and real-time verification to provide instant and tamper-proof credential validation.",
      features: [
        "Secure user authentication with role-based access (Admin, Student, Verifier)",
        "QR code generation for each graduation credential",
        "Real-time verification system with instant results",
        "Admin dashboard for managing students and credentials",
        "Secure database with encrypted credential storage",
        "Export credentials as PDF with embedded QR codes",
        "Search and filter functionality for quick access"
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Authentication", "QR Code Generation", "Vercel Deployment"],
      challenges: [
        "Ensuring data security and preventing credential tampering through encryption and hashing",
        "Implementing a robust QR code system that works offline and online",
        "Designing an intuitive UI for users with varying technical skills",
        "Coordinating team tasks and ensuring code quality as team leader"
      ],
      results: "Successfully deployed and demonstrated at university. The system reduced verification time from days to seconds and received positive feedback from university administration. The project showcased full-stack development skills and leadership capabilities as team leader."
    }
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
    caseStudy: {
      problem: "Finding rental properties in Ethiopia is challenging due to fragmented listings, lack of trust between owners and renters, and absence of a centralized platform. Traditional methods rely heavily on word-of-mouth and physical visits, wasting time and resources for both parties.",
      solution: "Built Rentify as a modern full-stack rental platform that connects property owners and renters through a secure, feature-rich web application. Implemented role-based access control, location-based recommendations, and a booking workflow to streamline the entire rental process from listing to approval.",
      features: [
        "Role-based authentication (Admin, Owner, Renter) with secure JWT",
        "Category-based listings (Homes, Cars, Offices, Equipment)",
        "Location-based recommendation system showing nearby properties",
        "Image upload and management via Cloudinary integration",
        "Booking and approval workflow system",
        "Advanced search and filtering by location, price, category",
        "Responsive design with TailwindCSS and smooth animations",
        "Admin dashboard for platform management"
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCSS", "Cloudinary", "JWT", "Vercel"],
      challenges: [
        "Implementing secure image uploads with Cloudinary while maintaining performance",
        "Building a location-based recommendation algorithm for relevant results",
        "Designing an intuitive booking workflow that works for both owners and renters",
        "Creating a fully responsive UI that looks great on all devices",
        "Managing state effectively across multiple user roles and permissions"
      ],
      results: "Successfully deployed live platform serving rental listings across Ethiopia. The application demonstrates advanced full-stack development skills including cloud storage integration, geolocation features, and complex state management. Positive feedback from early users highlights the platform's ease of use and modern design."
    }
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
    name: "Timetable Manager",
    description:
      "A comprehensive Android application built with Java for managing academic schedules and daily tasks. Features a beautiful, color-coded weekly timetable view, integrated daily task planner with checkboxes, smooth animations, and an intuitive UI with search and settings functionality. Includes offline support, local database storage, and customizable task categories for classes, assignments, and personal activities.",
    tags: [
      {
        name: "Java",
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
    source_code_link: "https://github.com/Yakob-B/timetable",
    caseStudy: {
      problem: "Students struggle to manage complex weekly class schedules and daily tasks efficiently. Existing solutions are either too complex, require internet connectivity, or lack integration between timetables and task management, leading to missed classes and forgotten assignments.",
      solution: "Developed Timetable Manager as a native Android application that combines a visual weekly schedule with an integrated daily task planner. The app works completely offline using local database storage, providing students with a reliable tool to manage their academic life without depending on internet connectivity.",
      features: [
        "Color-coded weekly timetable view for easy visualization",
        "Integrated daily task planner with checkbox completion tracking",
        "Offline-first architecture with SQLite database",
        "Customizable task categories (Classes, Assignments, Personal)",
        "Search functionality to quickly find classes and tasks",
        "Beautiful, intuitive UI with smooth animations",
        "Settings panel for personalization",
        "No internet required - fully functional offline"
      ],
      techStack: ["Java", "Android SDK", "SQLite", "XML Layouts", "Material Design"],
      challenges: [
        "Designing a clean UI that fits both weekly schedule and daily tasks",
        "Implementing efficient database queries for fast performance",
        "Creating smooth animations without impacting app responsiveness",
        "Managing complex state between different views and fragments",
        "Ensuring data persistence across app sessions"
      ],
      results: "Successfully deployed on Android devices with positive user feedback from fellow students. The app demonstrates proficiency in native Android development, database management, and UI/UX design. The offline-first approach ensures reliability, making it a practical solution for students in areas with limited connectivity."
    }
  },
];

export { services, technologies, experiences, testimonials, projects };
