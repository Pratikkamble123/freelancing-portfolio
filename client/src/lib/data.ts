import { 
  SiReact, SiNodedotjs, SiTypescript, SiPostgresql, SiDocker, 
  SiNextdotjs, SiTailwindcss, SiPython, SiRust, SiGraphql 
} from "react-icons/si";

export const SITE_DATA = {
  hero: {
    title: "Fullstack Developer",
    subtitle: "I help businesses build fast websites and smart AI tools that save time and drive growth.",
    terminalMessages: [
      // "> Initializing system...",
      // "> Loading profile...",
      // "> Welcome to my portfolio.",
      // "> Let's build something amazing."

      "> Initializing services...",
"> Business websites & landing pages",
"> Full-stack web applications",
"> AI agents & workflow automation",
"> Ready to work with you."
    ]
  },
  about: {
    bio: "I’m a Full-Stack Web & AI Developer focused on building high-performance websites, scalable web applications, and intelligent automation tools. I work with startups, founders, and growing businesses to turn ideas into production-ready digital products. From frontend design to backend architecture and AI integration, I focus on clean code, modern UI, and solutions that solve real business problems. My goal isn’t just to write code — it’s to build systems that save time, increase efficiency, and help businesses scale.",
    education: {
  degree: "Core Expertise",
  school: "Full-Stack & AI Development",
  year: "Building production-ready systems",
  details: "I specialize in scalable web applications, backend architecture, AI integrations, and automation workflows focused on real business impact."
},

    location: "Remote – Working Worldwide",
    mindset: "Always learning. Always shipping."
  },
  skills: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Rust", icon: SiRust, color: "#000000" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" }
  ],
  projects: [
    {
      id: "01",
      title: "GrowthEdge – Lead Generation Business Website",
      description: "A high-conversion marketing website designed for agencies to generate leads, showcase services, and convert visitors into clients.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      link: "https://growthedge-production.up.railway.app"
    },
    {
      id: "02",
      title: "ElevateTech – Enterprise Technology Website",
      description: "A modern enterprise website built for technology companies to showcase cloud solutions, AI automation, and cybersecurity services.",
     tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      link: "https://elevatetech-production.up.railway.app"
    },
    {
      id: "03",
      title: "ClientFlow – Client & Project Management Dashboard",
      description: "A web-based dashboard that helps agencies manage clients, track projects, and monitor activity in one centralized system.",
      tech: ["React", "TypeScript", "Node.js", "Express", "Neon PostgreSQL", "Tailwind CSS"],
      link: "https://clientflow-production-db19.up.railway.app/register"
    },
    {
      id: "04",
      title: "NexusSaaS – Lead Management & CRM Dashboard",
      description: "A SaaS CRM dashboard designed to manage leads, tasks, and sales workflows with an intuitive business management interface.",
      tech: ["React", "TypeScript", "Node.js", "Express", "Neon PostgreSQL", "Tailwind CSS"],
      link: "https://lead-flow-crm-production-2c72.up.railway.app/auth"
    }
  ]
};
