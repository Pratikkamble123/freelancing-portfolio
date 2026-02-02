import { 
  SiReact, SiNodedotjs, SiTypescript, SiPostgresql, SiDocker, 
  SiNextdotjs, SiTailwindcss, SiPython, SiRust, SiGraphql 
} from "react-icons/si";

export const SITE_DATA = {
  hero: {
    title: "Fullstack Developer",
    subtitle: "Building digital experiences with precision and passion.",
    terminalMessages: [
      "> Initializing system...",
      "> Loading profile...",
      "> Welcome to my portfolio.",
      "> Let's build something amazing."
    ]
  },
  about: {
    bio: "I'm a developer obsessed with performance and design. I bridge the gap between complex backend logic and beautiful frontend experiences.",
    education: {
      degree: "B.S. Computer Science",
      school: "Tech University",
      year: "2020 - 2024",
      details: "President of the Science Club. Specialized in Distributed Systems."
    },
    location: "San Francisco, CA",
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
      title: "Neon Dashboard",
      description: "A high-performance analytics dashboard with real-time data streaming.",
      tech: ["React", "D3.js", "WebSocket"],
      link: "#"
    },
    {
      id: "02",
      title: "Nebula API",
      description: "Distributed cloud storage solution with end-to-end encryption.",
      tech: ["Go", "gRPC", "Postgres"],
      link: "#"
    },
    {
      id: "03",
      title: "Zenith UI",
      description: "An open-source component library focused on accessibility.",
      tech: ["TypeScript", "Radix UI", "Stitches"],
      link: "#"
    },
    {
      id: "04",
      title: "Flow State",
      description: "Productivity app for developers to manage deep work sessions.",
      tech: ["Electron", "React", "Redux"],
      link: "#"
    }
  ]
};
