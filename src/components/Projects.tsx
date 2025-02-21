import { TProject } from "@/utils/utils";
import ProjectCard from "./ProjectCard";

const Projects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`);
  const projects = await res.json();
 

  return (
    <div className=" mx-auto mb-12">
      <div>
        <h2 className="text-4xl md:text-5xl  lg:text-5xl font-bold text-slate-600 dark:text-white  text-center uppercase my-12">
          featured <span className="text-[#e67e22]">projects</span>
        </h2>
      </div>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.slice(0, 3).map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
