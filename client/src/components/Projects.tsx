import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { ArrowUpRight, Github } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Selected Work</h2>
            <p className="text-muted-foreground">Digital products crafted with precision.</p>
          </div>
          <a href="#" className="text-sm font-mono text-primary hover:text-primary/80 flex items-center gap-2">
            View Github <Github className="w-4 h-4" />
          </a>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {SITE_DATA.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative bg-card rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-4xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors">
                  {project.id}
                </span>
                <a 
                  href={project.link}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors group-hover:rotate-45 duration-300"
                >
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </a>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/5 text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
