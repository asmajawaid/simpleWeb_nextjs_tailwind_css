import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-cyan-950 z-50 sticky top-0 ">
      <header className="flex justify-center items-center flex-row text-gray-600 body-font bg-cyan-950">
        <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row md:text-sm items-center">
          <Link
            href=""
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 "
          >
            <Image
              src="/coverPic/logo.jpeg"
              height={50}
              width={50}
              alt="logo"
              className="w-10 h-10"
            />
            <span className="ml-3 text-xl text-cyan-50 ">Asman</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:text-sm md:pl-4 md:border-l md:border-gray-400	flex flex-wrap px-1 items-center text-base justify-center">
            <Link
              href="/"
              className="mr-5 hover:text-gray-300 font-semibold text-cyan-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="mr-5 hover:text-gray-300 font-semibold text-cyan-50"
            >
              About
            </Link>
            <Link
              href="/startplaning"
              className="mr-5 hover:text-gray-300 font-semibold text-cyan-50"
            >
              Start Planing
            </Link>
            <Link
              href="/blog"
              className="mr-5 hover:text-gray-300 font-semibold text-cyan-50"
            >
              Blog
            </Link>
            <Link
              href="/review"
              className="mr-5 hover:text-gray-300 font-semibold text-cyan-50"
            >
              Review
            </Link>
            <Link
              href="/contact"
              className="mr-5 hover:text-gray-300 font-semibold text-cyan-50"
            >
              Contact
            </Link>
          </nav>
          <div className="md:flex md:flex-row ">
            <button className="inline-flex items-center text-[#345e37] font-semibold bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 md:text-sm m-2 p-2">
              Log In
            </button>

            <button className="inline-flex items-center text-[#345e37] font-semibold bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 md:text-sm m-2 p-2">
              Sign Up
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
