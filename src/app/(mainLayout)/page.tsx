
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-[90%] mx-auto  min-h-screen ">
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}
