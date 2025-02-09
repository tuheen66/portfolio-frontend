import ProjectCard from "@/components/ProjectCard";
import { TProject } from "@/utils/utils";

const ProjectPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`);
  const projects = await res.json();
  console.log(projects);

  return (
    <div className="w-[90%] mx-auto mb-12">
      <div>
        <h2 className="text-4xl md:text-3xl  lg:text-5xl font-bold text-gray-300 text-center uppercase my-12">
          my <span className="text-[#e67e22]">projects</span>
        </h2>
      </div>
      <section className="grid grid-cols-3 gap-12">
        {projects.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </section>
    </div>
  );
};

export default ProjectPage;
