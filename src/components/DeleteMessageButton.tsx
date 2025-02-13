const DeleteMessageButton = ({
  id,
  onDeleteSuccess,
}: {
  id: string;
  onDeleteSuccess: (id: string) => void;
}) => {
  const handleDelete = async () => {
    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_URL || "https://fallback-url.com";

    const res = await fetch(`${backendUrl}/message/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      onDeleteSuccess(id);
    }
  };

  return (
    <button
      className="btn btn-sm join-item bg-red-700 border-none text-white"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default DeleteMessageButton;
