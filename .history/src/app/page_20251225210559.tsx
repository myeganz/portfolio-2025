import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar"; // <--- Import this

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar /> {/* <--- Add this at the top */}
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}