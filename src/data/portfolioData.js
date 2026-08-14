// -----------------------------------------------------------------------
// Central content file — edit this to update the site's copy/data.
// -----------------------------------------------------------------------

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "5+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "100%", label: "Dedication" },
];

export const ABOUT_CARDS_META = [
  { key: "cleanCode", title: "Clean Code", desc: "Writing maintainable and scalable code." },
  { key: "problemSolver", title: "Problem Solver", desc: "I love solving problems with efficient solutions." },
  { key: "collaborative", title: "Collaborative", desc: "Great team player and communicator." },
  { key: "learning", title: "Always Learning", desc: "Exploring new tech and improving every day." },
];

export const SKILL_TABS = {
  Frontend: {
    icons: [
      { name: "React", bg: "bg-slate-800", fg: "text-sky-400", label: "⚛" },
      { name: "Next.js", bg: "bg-slate-900", fg: "text-white", label: "N" },
      { name: "TypeScript", bg: "bg-blue-600", fg: "text-white", label: "TS" },
      { name: "Tailwind CSS", bg: "bg-slate-800", fg: "text-cyan-400", label: "≈" },
      { name: "JavaScript", bg: "bg-yellow-400", fg: "text-slate-900", label: "JS" },
      { name: "HTML5", bg: "bg-orange-600", fg: "text-white", label: "5" },
      { name: "CSS3", bg: "bg-blue-500", fg: "text-white", label: "3" },
    ],
    bars: [
      { label: "React / Next.js", value: 90 },
      { label: "Tailwind CSS", value: 90 },
      { label: "TypeScript", value: 85 },
      { label: "HTML / CSS", value: 95 },
      { label: "JavaScript", value: 90 },
    ],
  },
  Backend: {
    icons: [
      { name: "Node.js", bg: "bg-slate-800", fg: "text-green-500", label: "N" },
      { name: "Express", bg: "bg-slate-900", fg: "text-white", label: "Ex" },
      { name: "REST APIs", bg: "bg-slate-800", fg: "text-violet-400", label: "API" },
    ],
    bars: [
      { label: "Node.js / Express", value: 85 },
      { label: "REST APIs", value: 88 },
    ],
  },
  Database: {
    icons: [
      { name: "MongoDB", bg: "bg-green-700", fg: "text-white", label: "M" },
      { name: "PostgreSQL", bg: "bg-blue-800", fg: "text-white", label: "P" },
    ],
    bars: [
      { label: "MongoDB", value: 85 },
      { label: "PostgreSQL", value: 75 },
    ],
  },
  "Tools & Others": {
    icons: [
      { name: "Git", bg: "bg-orange-700", fg: "text-white", label: "G" },
      { name: "Figma", bg: "bg-slate-800", fg: "text-pink-400", label: "F" },
      { name: "Docker", bg: "bg-sky-700", fg: "text-white", label: "D" },
    ],
    bars: [
      { label: "Git / GitHub", value: 90 },
      { label: "Figma", value: 70 },
    ],
  },
};

export const EXPERIENCE = [
  {
    role: "Fullstack Developer",
    org: "Tech Solutions Inc.",
    period: "Jan 2023 — Present",
    desc: "Building scalable web applications using React, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver high-quality products.",
  },
  {
    role: "Frontend Developer",
    org: "Creative Studio",
    period: "Jun 2021 — Dec 2022",
    desc: "Developed responsive and interactive user interfaces using React and Tailwind CSS.",
  },
  {
    role: "Web Developer Intern",
    org: "CodeLab",
    period: "Jan 2021 — May 2021",
    desc: "Worked on real-world projects and improved skills in JavaScript, HTML, CSS, and backend development.",
  },
];

export const PROJECT_FILTERS = ["All", "Web Apps", "Extension", "Dashboard", "Fullstack"];

export const PROJECTS = [
  {
    title: "Student Result Management System",
    tag: "Fullstack",
    image: "/public/srms.jpg",
    desc: "A fullStack Management System that keeps track of student Results",
    stack: ["Tkinter", "Dango", "PostgreSQL"],
    gradient: "from-indigo-500 via-purple-500 to-fuchsia-500",
  },
  {
    title: "Furniuxe",
    tag: "Fullstack",
    image: "/public/furniuxe.jpeg",
    desc: "Modern Online Furniture Site",
    stack: ["React", "Node.js", "MongoDB"],
    gradient: "from-slate-700 via-slate-600 to-slate-800",
  },
  {
    title: "Tap Manager",
    tag: "FrontEnd",
    image: "/public/tabextension.png",
    desc: "A browser Extension built with Plasmo",
    stack: ["React", "Plasmo", "Tailwind CSS"],
    gradient: "from-slate-800 via-indigo-900 to-slate-900",
  },
];

export const BLOG_POSTS = [
  {
    title: "Getting Started with Next.js 14",
    date: "May 20, 2024",
    desc: "Explore the new features in Next.js 14 and how they improve developer experience.",
  },
  {
    title: "How I Structure My Fullstack Projects",
    date: "Apr 10, 2024",
    desc: "A look at my project structure and best practices for scalable applications.",
  },
  {
    title: "Understanding Authentication in Web Apps",
    date: "Mar 15, 2024",
    desc: "A comprehensive guide to authentication strategies in modern web applications.",
  },
];
