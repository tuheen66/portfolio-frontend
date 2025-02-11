"use server";

export const fetchBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`);
  const blogs = await res.json();
  return blogs
};
