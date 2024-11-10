import Image from 'next/image'
import React from 'react'
import Link from "next/link"

export default function Blog() {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3 bg-slate-200">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/coverPic/blog1.jpeg"
            width={500} height={500}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href="" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3 bg-slate-200">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/coverPic/blog.jpeg"
            width={500} height={500}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The 400 Blows
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap">
              <Link href="" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
      
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3 bg-slate-200">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/coverPic/blog2.webp"
            alt="blog" width={500} height={500}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shooting Stars
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href="" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
