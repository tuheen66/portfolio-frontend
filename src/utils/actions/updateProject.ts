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

export const fetchProject = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${id}`
  );
  const project = await res.json();
  return project;
};

export const updateProject = async (id: string, updatedData: IProjectInfo) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    }
  );
  const project = await res.json();

  return project;
};
