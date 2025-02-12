/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import DeleteProjectButton from "@/components/DeleteProjectButton";
import { createProject } from "@/utils/actions/createProject";
import { fetchProjects } from "@/utils/actions/fetchProjects";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface IFormInput {
  _id: string;
  name: string;
  email: string;
  message: string;
  title?: string;
  sub_title?: string;
  author?: string;
  image: string;
  category: string;
  blog: string;
}

const ProjectManagement = () => {
  const [projects, setProjects] = useState<IFormInput[]>([]);

  const router = useRouter();

  useEffect(() => {
    async function loadProject() {
      const data = await fetchProjects();
      setProjects(data);
    }
    loadProject();
  }, []);

  const handleDeleteSuccess = (deletedId: string) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project._id !== deletedId)
    );
  };

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
      const res = await createProject(projectInfo);
      if (res.insertedId) {
        Swal.fire("Project created successfully !!!");
        router.push("/projects");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="my-12">
        <h1 className="text-slate-700 dark:text-white">All Blogs</h1>

        <div>
          <div className="overflow-x-auto">
            <table className="table text-slate-900  dark:text-white">
              {/* head */}
              <thead className="text-slate-700  dark:text-white">
                <tr>
                  <th>SL #</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Subtitle</th>

                  <th>View Detail</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project: IFormInput, index: number) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask rounded-lg h-12 w-12">
                            <Image
                              src={project.image}
                              alt="Avatar Tailwind CSS Component"
                              width={100}
                              height={100}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{project.title}</td>
                    <td>{project.sub_title}</td>

                    <td>
                      <Link href={`/projects/${project._id}`}>
                        <button className="text-center bg-[#e67e22]  px-4 py-2  flex items-center gap-4 rounded-lg text-white w-28">
                          View Details
                        </button>
                      </Link>
                    </td>
                    <td>
                      <div className="join join-vertical">
                        <Link href={`/dashboard/projects/${project._id}`}>
                          <button className="btn btn-sm join-item bg-green-700 border-none text-white">
                            Update
                          </button>
                        </Link>
                        <DeleteProjectButton
                          id={project._id}
                          onDeleteSuccess={handleDeleteSuccess}
                        />
                        
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full max-w-xl mx-auto my-12 p-4 border border-gray-200  shadow-2xl shadow-slate-600 sm:p-6 md:p-8 bg-slate-400 dark:bg-slate-900 text-black dark:text-white rounded-xl ">
          <h5 className="text-2xl font-bold text-gray-700 dark:text-white text-center">
            Create Project
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

export default ProjectManagement;
