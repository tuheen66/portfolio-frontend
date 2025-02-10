import Sidebar from "@/components/Sidebar";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="flex lg:flex-row ">
        <div className="lg:w-1/6" >
          <Sidebar />
        </div>
        <div className=" lg:w-5/6  mx-12">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
