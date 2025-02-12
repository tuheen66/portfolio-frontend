/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  fetchProject,
  IProjectInfo,
  updateProject,
} from "@/utils/actions/updateProject";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateProject = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<IProjectInfo | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function getProject() {
      const projectData = await fetchProject(projectId as string);
      setProject(projectData);
    }
    getProject();
  }, [projectId]);

  console.log(project);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const image = (form.elements.namedItem("image") as HTMLInputElement).value;
    const full_image = (
      form.elements.namedItem("full_image") as HTMLInputElement
    ).value;
    const sub_title = (form.elements.namedItem("sub_title") as HTMLInputElement)
      .value;
    const tech_1 = (form.elements.namedItem("tech_1") as HTMLInputElement)
      .value;
    const tech_2 = (form.elements.namedItem("tech_2") as HTMLInputElement)
      .value;
    const tech_3 = (form.elements.namedItem("tech_3") as HTMLInputElement)
      .value;
    const tech_4 = (form.elements.namedItem("tech_4") as HTMLInputElement)
      .value;
    const tech_5 = (form.elements.namedItem("tech_5") as HTMLInputElement)
      .value;
    const features_1 = (
      form.elements.namedItem("features_1") as HTMLInputElement
    ).value;
    const features_2 = (
      form.elements.namedItem("features_2") as HTMLInputElement
    ).value;
    const features_3 = (
      form.elements.namedItem("features_3") as HTMLInputElement
    ).value;
    const features_4 = (
      form.elements.namedItem("features_4") as HTMLInputElement
    ).value;
    const features_5 = (
      form.elements.namedItem("features_5") as HTMLInputElement
    ).value;
    const live_link = (form.elements.namedItem("live_link") as HTMLInputElement)
      .value;

    const technologies = [tech_1, tech_2, tech_3, tech_4, tech_5];
    const features = [
      features_1,
      features_2,
      features_3,
      features_4,
      features_5,
    ];

    const projectInfo = {
      title,
      sub_title,
      image,
      full_image,
      technologies,
      features,
      live_link,
    };

    try {
      const res = await updateProject(projectId as string, projectInfo);
      if (res.modifiedCount > 0) {
        Swal.fire("Project updated successfully !!!");
        router.push("/projects");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div>
        <div className="w-full max-w-xl mx-auto my-12 p-4 bg-slate-300 border border-gray-200  shadow-2xl shadow-slate-600 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 rounded-xl ">
          <h5 className="text-2xl font-bold text-gray-700 dark:text-white text-center">
            Update Project
          </h5>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>

              <input
                name="title"
                defaultValue={project?.title}
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block rounded-lg w-full p-2.5 mb-4 "
                placeholder="Project title"
                required
              />
            </div>

            {/* subtitle  */}
            <div>
              <label
                htmlFor="sub_title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Subtitle
              </label>

              <input
                name="sub_title"
                defaultValue={project?.sub_title}
                type="text"
                id="sub_title"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="Project subtitle"
                required
              />
            </div>

            {/* ------------------------------- */}

            <div className="">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image
              </label>

              <input
                name="image"
                defaultValue={project?.image}
                type="text"
                id="image"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="Thumbnail image link"
                required
              />
            </div>

            <div className="">
              <label
                htmlFor="full_image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Image
              </label>

              <input
                name="full_image"
                defaultValue={project?.full_image}
                type="text"
                id="full_image"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="Full image link"
                required
              />
            </div>

            <div className="">
              <label
                htmlFor="tech_1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Technology 1
              </label>

              <input
                name="tech_1"
                defaultValue={project?.technologies[0]}
                type="text"
                id="tech_1"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="Technology 1"
                required
              />
            </div>

            <div className="">
              <label
                htmlFor="tech_2"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Technology 2
              </label>

              <input
                name="tech_2"
                defaultValue={project?.technologies[1]}
                type="text"
                id="tech_2"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="Technology 2"
                required
              />
            </div>

            <div className="">
              <label
                htmlFor="tech_3"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Technology 3
              </label>

              <input
                name="tech_3"
                defaultValue={project?.technologies[2]}
                type="text"
                id="tech_3"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="Technology 3"
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="tech_4"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Technology 4
              </label>

              <input
                name="tech_4"
                defaultValue={project?.technologies[3]}
                type="text"
                id="tech_4"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="Technology 4"
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="tech_5"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Technology 5
              </label>

              <input
                name="tech_5"
                defaultValue={project?.technologies[4]}
                type="text"
                id="tech_5"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="Technology 5"
                required
              />
            </div>

            {/* ----------------------------------- */}

            <div>
              <label
                htmlFor="features_1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Features 1
              </label>

              <input
                name="features_1"
                defaultValue={project?.features[0]}
                type="text"
                id="features_1"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="  Features 1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="features_2"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Features 2
              </label>

              <input
                name="features_2"
                defaultValue={project?.features[1]}
                type="text"
                id="features_2"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="  Features 2"
                required
              />
            </div>
            <div>
              <label
                htmlFor="features_3"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Features 3
              </label>

              <input
                name="features_3"
                defaultValue={project?.features[2]}
                type="text"
                id="features_3"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="  Features 3"
                required
              />
            </div>
            <div>
              <label
                htmlFor="features_4"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Features 4
              </label>

              <input
                name="features_4"
                defaultValue={project?.features[3]}
                type="text"
                id="features_4"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="  Features 4"
                required
              />
            </div>
            <div>
              <label
                htmlFor="features_5"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Features 5
              </label>

              <input
                name="features_5"
                defaultValue={project?.features[4]}
                type="text"
                id="features_5"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="  Features 5"
                required
              />
            </div>

            {/* --------------------------------- */}

            <div>
              <label
                htmlFor="live_link"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Live Link
              </label>

              <input
                name="live_link"
                defaultValue={project?.live_link}
                type="text"
                id="live_link"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm block w-full p-2.5 mb-4 "
                placeholder="  Live Link"
                required
              />
            </div>

            <button className="btn px-6 bg-[#d35400] text-white  hover:text-blue-500 hover:bg-orange-400">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProject;
