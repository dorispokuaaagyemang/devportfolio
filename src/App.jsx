import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import BlogAndContact from "./components/BlogAndContact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);

  // Toggle the `dark` class on <html> so Tailwind's `dark:` variants apply.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <BlogAndContact />
      <Footer />
    </div>
  );
}
