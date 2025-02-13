'use client'

import Image from "next/image";


import Link from "next/link";
import { TBlog } from "./DetailBlog";



const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div
      
      className="flex flex-col lg:flex-row gap-12 border-2 bg-slate-300 dark:bg-slate-900 dark:text-white text-slate-900 border-gray-300 rounded-lg p-5 shadow-lg shadow-gray-500"
    >
      <div className="mb-4 mx-auto">
        <Image
          className="rounded-lg"
          src={blog.image}
          width={500}
          height={500}
          alt="blogImage"
        />
      </div>
      <div className="space-y-2 w-full">
        <h1 className="text-xl"> {blog.title}</h1>
        <h2>Author : {blog.author}</h2>
        <h2>Category : {blog.category}</h2>

        <p>
          {blog.blog.slice(0, 200)}
          <Link href={`/blogs/${blog._id}`}>
            <span> _ read more . . .</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
