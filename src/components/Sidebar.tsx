"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-gray-200 h-full py-4 px-8  text-slate-800">
      <ul className="space-y-4 mx-auto">
        <li>
          <Link
            href="/dashboard"
            className={
              pathName === "/dashboard"
                ? "bg-slate-300 w-full px-4 py-1 rounded-lg"
                : "hover:text-gray-800 hover:underline"
            }
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            href="/dashboard/blogs"
            className={
              pathName === "/dashboard/blogs"
                ? "bg-slate-300 w-full px-4 py-1 rounded-lg"
                : "hover:text-gray-800 hover:underline"
            }
          >
            Blogs Management
          </Link>
        </li>

        <li>
          <Link
            href="/dashboard/projects"
            className={
              pathName === "/dashboard/projects"
                ? "bg-slate-300 w-full px-4 py-1 rounded-lg"
                : "hover:text-gray-800 hover:underline"
            }
          >
            Project Management
          </Link>
        </li>

        <li>
          <Link
            href="/dashboard/message"
            className={
              pathName === "/dashboard/message"
                ? "bg-slate-300 w-full px-4 py-1 rounded-lg"
                : "hover:text-gray-800 hover:underline"
            }
          >
            Message Management
          </Link>
        </li>
        <hr className="border-b-2  border-[#e67e22]" />
        <li>
          <Link
            href="/"
            className="flex items-center space-x-2 py-2 rounded-md hover:bg-gray-200 text-gray-700"
          >
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
