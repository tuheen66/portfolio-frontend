import DetailProject from "@/components/DetailProject";

const DynamicProductPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${projectId}`
  );
  const project = await res.json();

  return (
    <div>
      <DetailProject project={project} />
    </div>
  );
};

export default DynamicProductPage;
