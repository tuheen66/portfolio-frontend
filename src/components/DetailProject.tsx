import Link from "next/link";

import Image from "next/image";
import { TProject } from "@/utils/utils";

const DetailProject = ({ project }: { project: TProject }) => {
  return (
    <div className="mx-4 mt-12 lg:w-[80%] lg:mx-auto mb-12 pb-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-center text-slate-800 dark:text-slate-300 space-x-2">
          {project.title}
        </h1>
        <p className="text-lg text-center  text-slate-800 dark:text-gray-400">{project.sub_title}</p>
      </div>

      <div className="flex gap-12 flex-col lg:flex-row ">
        <div className="lg:w-2/3">
          <div className="max-w-4xl mx-auto p-6 space-y-6 text-slate-800 dark:text-gray-400">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-gray-400">
                Technologies Used:
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-slate-800 dark:text-gray-400">
                {project.technologies.map(
                  (technology: string, index: number) => (
                    <li key={index}>{technology}</li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-gray-400">
                Main Features:
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-800 dark:text-gray-400">
                {project.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="space-x-4">
              <Link href="/">
                <button className="bg-orange-600  text-white px-4 py-2 rounded-lg mt-8">
                  Home
                </button>
              </Link>
              <Link href={project.live_link} target="_blank">
                <button className="bg-orange-600  text-white px-4 py-2 rounded-lg mt-8">
                  Go to Website Live Link
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          <Image
            src={project.full_image}
            width={400}
            height={400}
            alt="project-image"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
