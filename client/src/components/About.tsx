import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { GraduationCap, MapPin, Brain, Code } from "lucide-react";

function BentoCard({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`
        bg-card rounded-3xl p-6 border border-white/5 shadow-lg 
        hover:border-white/10 hover:shadow-xl transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
           Building scalable web applications and AI-powered solutions for modern businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          
          {/* Card 1: Bio */}
          <BentoCard className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-card to-card/50 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                👨‍💻
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Full-Stack Web & AI Developer</h3>
                <p className="text-sm text-muted-foreground">Helping startups and businesses build scalable digital products.</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {SITE_DATA.about.bio}
            </p>
          </BentoCard>

          {/* Card 2: Location */}
          <BentoCard delay={0.1} className="relative overflow-hidden group min-h-[200px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&h=500&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <MapPin className="w-6 h-6 text-primary mb-2" />
              <h4 className="text-xl font-bold">{SITE_DATA.about.location}</h4>
              <p className="text-sm text-gray-300">Open to freelance projects and long-term collaborations.</p>
            </div>
          </BentoCard>

          {/* Card 3: Education */}
          <BentoCard delay={0.2} className="bg-gradient-to-br from-blue-900/10 to-transparent border-blue-500/20">
            <GraduationCap className="w-8 h-8 text-blue-400 mb-4" />
            <h4 className="text-lg font-bold mb-1">{SITE_DATA.about.education.degree}</h4>
            <p className="text-sm text-blue-300 mb-2">{SITE_DATA.about.education.school}</p>
            <p className="text-xs text-muted-foreground">{SITE_DATA.about.education.details}</p>
          </BentoCard>

          {/* Card 4: Mindset */}
          <BentoCard delay={0.3} className="md:col-span-3 flex items-center justify-between gap-6 bg-white/5">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Work Philosophy</h4>
<p className="text-muted-foreground">
 My approach is simple — understand the business problem first, then build a solution that is efficient, scalable, and built to deliver real impact.</p>
  </div>
            </div>
            <Code className="w-12 h-12 text-white/5" />
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
