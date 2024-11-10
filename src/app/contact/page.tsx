import React from 'react'
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className='bg-fixed bg-cover bg-center contact_bg'>
      <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-900">
      Feel free to share your thoughts, and let is make your vision a
      reality!
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-gray-700  bg-gray-100 border-0 py-2 px-8 focus:outline-none hover:bg-gray-300 hover:text-[#345e37] text-semibold rounded text-lg">
            Button
          </button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-white">example@email.com</a>
          <p className="leading-normal my-5 text-white">
            49 Smith St.
            <br />
            Saint Cloud, MN 56301
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
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
    </div>
  </div>
</section>

    </div>
  )
}
