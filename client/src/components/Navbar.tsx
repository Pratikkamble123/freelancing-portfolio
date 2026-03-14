import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 transition-all duration-300 ${
        scrolled ? "pt-4" : "pt-6"
      }`}
    >
      <div 
        className={`
          flex items-center gap-6 px-6 py-3 rounded-full 
          bg-background/80 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20
          transition-all duration-300 ${scrolled ? "scale-90" : "scale-100"}
        `}
      >
        <Link href="/" className="font-display font-bold text-lg tracking-tighter hover:text-primary transition-colors">
          DEV.
        </Link>
        <div className="h-4 w-[1px] bg-white/10" />
        <div className="flex gap-6 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Work</a>
          <a href="#guestbook" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
