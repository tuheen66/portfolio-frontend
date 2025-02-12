"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export type TUser = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ session }: { session: TUser | null }) => {
  const pathName = usePathname();

  return (
    <div className="bg-gray-600 text-white py-2 shadow-md w-[90%] mx-auto px-4 rounded-lg">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 justify-between items-center">
        <div>
          <Link href="/" className="flex gap-2 items-center text-2xl font-bold">
            <Image src={logo} width={50} height={50} alt="logo" />
            <h1 className="uppercase font-bold text-2xl text-[#e67e22] tracking-widest">
              <span className="text-[#A4C138]">Moni</span>rul
            </h1>
          </Link>
        </div>

        <div className="space-x-6 flex  lg:flex-row flex-wrap justify-center items-center  gap-2">
          <Link
            href="/"
            className={
              pathName === "/"
                ? "border border-[#e67e22] text-[#e67e22]  px-4 py-1 rounded-lg"
                : "hover:text-gray-200 hover:underline"
            }
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={
              pathName === "/projects"
                ? "border border-[#e67e22] text-[#e67e22] px-4 py-1 rounded-lg"
                : "hover:text-gray-200 hover:underline"
            }
          >
            Projects
          </Link>

          <Link
            href="/blogs"
            className={
              pathName === "/blogs"
                ? "border border-[#e67e22] text-[#e67e22] px-4 py-1 rounded-lg"
                : "hover:text-gray-200 hover:underline"
            }
          >
            Blogs
          </Link>

          <Link
            href="/contact"
            className={
              pathName === "/contact"
                ? "border border-[#e67e22] text-[#e67e22] px-4 py-1 rounded-lg"
                : "hover:text-gray-200 hover:underline"
            }
          >
            Contact
          </Link>

          <Link
            href="/dashboard"
            className={
              pathName === "/dashboard"
                ? "border border-[#e67e22] text-[#e67e22] px-4 py-1 rounded-lg"
                : "hover:text-gray-200 hover:underline"
            }
          >
            Dashboard
          </Link>
        </div>
        <div>
          <ThemeToggle/>
        </div>
        <div className="flex items-center">
          {session?.user ? (
            <button
              onClick={() => signOut()}
              className="border border-[#e67e22] text-[#e67e22] px-4 py-1 rounded-lg l hover:bg-[#e67e22] hover:text-white transition duration-200"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="border border-[#e67e22] text-[#e67e22] px-4 py-1 rounded-lg hover:bg-[#e67e22] hover:text-white transition duration-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
