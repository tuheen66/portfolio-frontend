import DetailBlog from "@/components/DetailBlog";

const page = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${blogId}`
  );
  const blog = await res.json();

  return (
    <div className="w-[70%] mx-auto mb-12">
      <DetailBlog blog={blog} />
    </div>
  );
};

export default page;
