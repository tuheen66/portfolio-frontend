import ProjectCard from "@/components/ProjectCard";
import { TProject } from "@/utils/utils";

const ProjectPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`);
  const projects = await res.json();

  return (
    <div className="w-[90%] mx-auto mb-12">
      <div>
        <h2 className="text-4xl md:text-3xl  lg:text-5xl font-bold text-slate-600 dark:text-white  text-center uppercase my-12">
          my <span className="text-[#e67e22]">projects</span>
        </h2>
      </div>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </section>
    </div>
  );
};

export default ProjectPage;
