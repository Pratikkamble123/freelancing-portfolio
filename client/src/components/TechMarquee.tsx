import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";

export function TechMarquee() {
  return (
    <section className="py-20 overflow-hidden border-y border-white/5 bg-white/[0.02]">
      <div className="relative flex">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-background to-transparent" />

        <motion.div 
          className="flex items-center gap-12 md:gap-24 px-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...SITE_DATA.skills, ...SITE_DATA.skills].map((skill, i) => (
            <div key={i} className="flex flex-col items-center gap-3 group min-w-[80px]">
              <div 
                className="text-4xl md:text-5xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                style={{ color: skill.color }}
              >
                <skill.icon />
              </div>
              <span className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
