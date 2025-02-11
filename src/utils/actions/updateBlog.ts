"use server";


interface IFormInput {
    _id: string;
  name: string;
  email: string ;
  message: string;
  title?: string |undefined;
  author?: string |undefined;
  image: string |undefined;
  category: string |undefined;
  blog: string |undefined;
  blogId: string;
  }

  

export const fetchBlog = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${id}`);
  const blogs = await res.json();
  return blogs;
};

export const updateBlog = async (id: string, updatedData: IFormInput) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    }
  );
  const blogs = await res.json();

  return blogs;
};
