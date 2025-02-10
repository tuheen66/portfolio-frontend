import Navbar from "@/components/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const layout =async ({ children }: Readonly<{ children: React.ReactNode }>) => {

  const session = await getServerSession(authOptions)

  return (
    <div>
      <Navbar session={session} />
      {children}
    </div>
  );
};

export default layout;
