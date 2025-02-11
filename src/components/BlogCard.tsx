import Image from "next/image";

import Link from "next/link";
import { TBlog } from "./DetailBlog";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="flex gap-12 border-2 border-gray-300 rounded-lg p-5 shadow-lg shadow-gray-500">
      <div className="mb-4">
        <Image
          className="rounded-lg"
          src={blog.image}
          width={500}
          height={500}
          alt="blogImage"
        />
      </div>
      <div className="space-y-2">
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
