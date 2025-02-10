"use server";

import { IFormInput } from "@/app/(mainLayout)/contact/page";

export const postMessage = async (data: IFormInput) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const message = await res.json();

  return message;
};
