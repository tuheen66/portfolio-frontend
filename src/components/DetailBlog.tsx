import Image from "next/image";

export type TBlog = {
  _id: string;
  title: string;
  author: string;
  image: string;
  blog: string;
  category: string;
};

const DetailBlog = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="my-12 pb-12 text-slate-900 dark:text-slate-400 ">
      <h1 className="text-center text-3xl mb-4"> {blog.title}</h1>
      <div>
        <Image
          className="mx-auto"
          src={blog.image}
          alt="blogImage"
          width={600}
          height={300}
        />
      </div>
      <div className="w-full lg:w-[600px] mx-auto my-4 space-y-4">
        <h2 className="text-xl ">Author : {blog.author}</h2>
        <h2 className="text-lg ">Category : {blog.category}</h2>
        <p>{blog.blog}</p>
      </div>
    </div>
  );
};

export default DetailBlog;
