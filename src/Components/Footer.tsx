import React from 'react'
import Image from  "next/image"
import Link from "next/link"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-cyan-900'>
       <footer className="text-gray-500 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-cyan-100 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link  href=" "className="text-cyan-100 hover:text-white">First Link</Link>
          </li>
          <li>
            <Link  href=" "className="text-cyan-100 hover:text-white">Second Link</Link>
          </li>
          <li>
            <Link  href=" "className="text-cyan-100 hover:text-white">Third Link</Link>
          </li>
          <li>
            <Link  href=" "className="text-cyan-100 hover:text-white">Fourth Link</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-cyan-100 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link  href=" "className="text-cyan-100 hover:text-white">First Link</Link>
          </li>
          <li>
            <Link  href=" "className="text-cyan-100 hover:text-white">Second Link</Link>
          </li>
          <li>
            <Link  href=" "className="text-cyan-100 hover:text-white">Third Link</Link>
          </li>
          <li>
            <Link  href=" "className="text-cyan-100 hover:text-white">Fourth Link</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-cyan-100 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link  href=" "className="text-cyan-100 hover:text-white">First Link</Link>
          </li>
          <li>
            <Link  href=" "className="text-cyan-100 hover:text-white">Second Link</Link>
          </li>
          <li>
            <Link  href=" "className="text-cyan-100 hover:text-white">Third Link</Link>
          </li>
          <li>
            <Link  href=" "className="text-cyan-100 hover:text-white">Fourth Link</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-cyan-100 tracking-widest text-sm mb-3">
          SUBSCRIBE
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-cyan-100"
            >
              Search your place
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:bg-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex border-0 py-2 px-6  text-[#345e37] font-semibold bg-gray-100  focus:outline-none hover:bg-gray-200 rounded text-base">
            Start Planing
          </button>
        </div>
        <p className="text-gray-100 text-sm mt-2 md:text-left text-center">
        Be flexible with your travel dates and 
          <br className="lg:block hidden" />
          search for deals to save money. 
 
        </p>
      </div>
    </div>
  </div>
  <div className="bg-cyan-950">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <Link  href=" " className="flex title-font font-medium items-center md:justify-start justify-center text-cyan-100">
      <Image src="/coverPic/logo.jpeg" height={50} width={50} alt='logo' className='w-10 h-10'/>
  
        <span className="ml-3 text-xl">ASMA</span>
      </Link>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
        © 2024 AsmaJawaid —
        <Link
          href="/"
          rel="noopener noreferrer"
          className="text-cyan-100 ml-1"
          target="_blank"
        >
          @AsmaJawaid
        </Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
              target="_blank"
              href={"https://www.facebook.com/innocent.princes.581/"}
              className="text-white p-2"
            >
              <FaFacebook className="text-2xl" />
            </Link>

            <Link
              target="_blank"
              href={"https://www.instagram.com/jawed_hadi/"}
              className="text-white p-2"
            >
              <FaInstagram className="text-2xl " />
            </Link>

            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/asma-jawaid-92b94628b/"}
              className="text-white p-2"
            >
              <FaLinkedin className="text-2xl" />
            </Link>

            <Link
              target="_blank"
              href={"https://github.com/asmajawaid"}
              className="text-white p-2"
            >
              <FaGithub className="text-2xl" />
            </Link>
      </span>
    </div>
  </div>
</footer>
 
    </div>
  )
}
