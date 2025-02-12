"use server";

export const fetchProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`);
  const projects = await res.json();
  return projects
};
