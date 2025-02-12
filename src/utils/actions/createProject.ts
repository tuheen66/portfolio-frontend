"use server";

export interface IProjectInfo {
  title?: string;
  sub_title?: string;
  image: string;
  full_image: string;
  technologies: string[];
  features: string[];
  live_link: string;
}

export const createProject = async (data: IProjectInfo) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const project = await res.json();

  return project;
};
