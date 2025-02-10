"use server";

import { revalidatePath } from "next/cache";

export const deleteMessage = async (id: string) => {
  // Perform deletion (e.g., using Mongoose or Prisma)
  await fetch(`http://localhost:3000/api/delete/${id}`, {
    method: "DELETE",
  });

  // Revalidate the table so changes reflect instantly
  revalidatePath("/your-page");
};
