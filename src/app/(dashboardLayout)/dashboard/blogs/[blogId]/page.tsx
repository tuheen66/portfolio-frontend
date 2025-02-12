"use client";

import { fetchBlog, updateBlog } from "@/utils/actions/updateBlog";
import { useParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

interface IFormInput {
  _id?: string;
  name?: string;
  email?: string;
  message?: string;
  blogId?: string;
  title?: string | undefined;
  author?: string | undefined;
  image: string | undefined;
  category: string | undefined;
  blog: string | undefined;
}
interface IBlog {
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  author: string | undefined;
  image: string | undefined;
  category: string | undefined;
  blog: string | undefined;
}

const UpdateBlog = () => {
  const { blogId } = useParams();
  const router= useRouter()

  const [blog, setBlog] = useState<IBlog | null>(null);
  const { register, handleSubmit, reset } = useForm<IFormInput>({
    defaultValues: {
      title: blog?.title,
      author: blog?.author,
      image: blog?.image,
      category: blog?.category,
      blog: blog?.blog,
    },
  });

  useEffect(() => {
    async function getBlog() {
      const blogData = await fetchBlog(blogId as string);
      setBlog(blogData);
      reset(blogData);
    }

    getBlog();
  }, [blogId, reset]);

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    const updatedData = {
      ...data,
      title: data.title || "",
      author: data.author || "",
      image: data.image || "",
      category: data.category || "",
      blog: data.blog || "",

      _id: "",
      name: "",
      email: "",
      message: "",
      blogId: "",
    };

    const res = await updateBlog(blogId as string, updatedData);
    if (res.modifiedCount > 0) {
      Swal.fire("Blog updated successfully !!!");
      router.push('/blogs')
    }
  };

  return (
    <div>
      <div className="w-[50%] mx-auto mt-12 bg-slate-300 text-slate-900 p-8 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="mb-4 text-center text-2xl">Update Blog</h1>
          <div className="flex flex-col mb-2">
            <label>Blog Tittle</label>
            <input
              //   defaultValue={blog?.title}
              className="p-1 rounded-lg text-white px-2 py-1"
              {...register("title")}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label>Author</label>
            <input
              //   defaultValue={blog?.author}
              className="p-1 rounded-lg text-white px-2 py-1"
              {...register("author")}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label>Image</label>
            <input
              //   defaultValue={blog?.image}
              className="p-1 rounded-lg text-white px-2 py-1"
              {...register("image")}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label>Category</label>
            <input
              //   defaultValue={blog?.category}
              className="p-1 rounded-lg text-white px-2 py-1"
              {...register("category")}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label>Blog Content</label>
            <textarea
              className="p-1 rounded-lg text-white px-2 py-1"
              {...register("blog")}
            />
          </div>

          <div className="   flex items-center ">
            <button
              className="text-center bg-[#e67e22]  px-4 py-2  flex items-center gap-4 rounded-lg text-white  mt-4"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
