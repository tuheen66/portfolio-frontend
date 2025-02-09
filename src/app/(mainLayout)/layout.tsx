import Navbar from "@/components/Navbar";

/* eslint-disable @typescript-eslint/no-explicit-any */
const layout = ({ children }: any) => {
  return (
    <div>
      <Navbar session={null} />
      {children}
    </div>
  );
};

export default layout;
