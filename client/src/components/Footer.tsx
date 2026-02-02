import { Github, Twitter, Linkedin, Mail } from "lucide-react";

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
          <a href="#" className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-all">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:hello@example.com" className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <div className="text-xs text-muted-foreground font-mono">
          © 2024 Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
