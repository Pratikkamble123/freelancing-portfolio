import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechMarquee } from "@/components/TechMarquee";
import { Projects } from "@/components/Projects";
import { Guestbook } from "@/components/Guestbook";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechMarquee />
        <Projects />
        <Guestbook />
      </main>
      <Footer />
    </div>
  );
}
