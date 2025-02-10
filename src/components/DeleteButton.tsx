"use client";

import { useRouter } from "next/navigation";

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const backendUrl=process.env.NEXT_PUBLIC_BACKEND_URL || "https://fallback-url.com"
   
    await fetch(`${backendUrl}/message/${id}`, {
      method: "DELETE",
    });
    router.refresh();
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
