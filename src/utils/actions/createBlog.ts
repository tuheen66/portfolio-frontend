"use server";

interface IFormInput {
    _id: string;
    name: string;
    email: string;
    message: string;
    title?:string;
    author?:string;
    image: string;
    blog: string;
  }

export const createBlog= async (data: IFormInput) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const blogs = await res.json();

  return blogs;
};
