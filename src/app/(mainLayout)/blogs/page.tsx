import BlogCard from "@/components/BlogCard";
import { TBlog } from "@/components/DetailBlog";

const BlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`);
  const blogs = await res.json();

  console.log(blogs);

  return (
    <div className="w-[90%] mx-auto min-h-screen pb-12">
      <h1 className="text-3xl text-center mt-12 text-slate-700 dark:text-white">
        All Blogs
      </h1>
      <div className="grid grid-cols-1 gap-12 my-12">
        {blogs.map((blog: TBlog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
