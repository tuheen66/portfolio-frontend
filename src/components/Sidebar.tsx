import Link from "next/link";


const Sidebar = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-4 ">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            href="/dashboard/blogs"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            Blogs Management
          </Link>
        </li>

        <li>
          <Link
            href="/dashboard/projects"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            Project Management
          </Link>
        </li>

        <li>
          <Link
            href="/dashboard/message"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            Message Management
          </Link>
        </li>
        <hr className="border-b-4-2  border-slate-900" />
        <li>
          <Link
            href="/"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
