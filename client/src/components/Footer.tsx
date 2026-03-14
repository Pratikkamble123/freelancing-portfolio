import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050508]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-display font-bold text-xl mb-1">DEV.</h4>
          <p className="text-sm text-muted-foreground">
            Built with React, Tailwind & Passion.
          </p>
        </div>

       <div className="flex gap-6">
  <a
    href="https://github.com/Pratikkamble123"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-all"
  >
    <Github className="w-5 h-5" />
  </a>

  <a
    href="https://www.linkedin.com/in/pratikkamble-dev/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-all"
  >
    <Linkedin className="w-5 h-5" />
  </a>

  <a
    href="mailto:pratikkamble7658@gmail.com"
    className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-all"
  >
    <Mail className="w-5 h-5" />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/918767346012?text=Hi%20Pratik,%20I%20want%20to%20discuss%20a%20project."
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full hover:bg-green-500/20 text-muted-foreground hover:text-green-400 transition-all"
  >
    <FaWhatsapp className="w-5 h-5" />
  </a>
</div>
        <div className="text-xs text-muted-foreground font-mono">
          © 2026 Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
