import { TProject } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <div className="border-2 border-gray-300 shadow-xl shadow-slate-400 p-4 rounded-xl h-fit">
      <h2 className="mb-4 text-center text-2xl ">{project.title}</h2>
      <div className="">
        <Image
          className="rounded-xl  "
          src={project.image}
          alt="image"
          width={400}
          height={400}
        />
      </div>
      <div className="mt-4 flex justify-center">
        <Link href={`/projects/${project._id}`}>
          <button className="bg-[#e67e22]  px-4 py-2  flex items-center gap-4 rounded-lg ">
            View Details <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
