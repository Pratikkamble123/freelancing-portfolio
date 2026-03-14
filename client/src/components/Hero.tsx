import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { SITE_DATA } from "@/lib/data";
import { Terminal, Code2, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse delay-700" />

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-green-400">Available for work</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-6 tracking-tighter">
           Web & AI Solutions That Grow Your <br />
            <span className="text-gradient">Business</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8 font-light">
            {SITE_DATA.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              See My Work <ArrowDown className="w-4 h-4" />
            </a>
            <a 
              href="#guestbook" 
              className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* Right: Simulated Chat/Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-md"
        >
          <div className="relative rounded-2xl bg-[#0F0F16] border border-white/10 shadow-2xl shadow-purple-500/10 overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <Terminal className="w-3 h-3" />
                <span>bash</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm h-[300px] flex flex-col">
              <div className="flex-1 space-y-4 text-green-400/90">
                <TypeAnimation
                  sequence={[
                    SITE_DATA.hero.terminalMessages[0],
                    1000,
                    SITE_DATA.hero.terminalMessages[0] + "\n" + SITE_DATA.hero.terminalMessages[1],
                    1000,
                    SITE_DATA.hero.terminalMessages[0] + "\n" + SITE_DATA.hero.terminalMessages[1] + "\n" + SITE_DATA.hero.terminalMessages[2],
                    1000,
                    SITE_DATA.hero.terminalMessages[0] + "\n" + SITE_DATA.hero.terminalMessages[1] + "\n" + SITE_DATA.hero.terminalMessages[2] + "\n" + SITE_DATA.hero.terminalMessages[3],
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={0}
                  style={{ whiteSpace: 'pre-line', display: 'block' }}
                />
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                  AI
                </div>
                <div className="flex-1 px-3 py-2 rounded-lg bg-white/5 text-xs text-muted-foreground">
                  System operational. All systems go.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
