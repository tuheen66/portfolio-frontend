import DetailProject from "@/components/DetailProject";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${projectId}`
  );
  const project = await res.json();
  return {
    title: project.title,
    description: project.features,
  };
}






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
