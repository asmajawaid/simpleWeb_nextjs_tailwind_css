import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";


export default function Deals() {
  return (
    <div className='bg-gray-50'>

      {/*Pricing  */}
      <section className="text-gray-400 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
        Recent Deals
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-900">
       Your <b>Asman</b> for the top deals from the world is best adventure tour operators. <br />
       Sign Up and never miss another adventure.
      </p>
      <div className="flex mx-auto border-2 border-cyan-600 rounded overflow-hidden mt-6">
        <button className="py-1 px-4 bg-cyan-800 text-gray-900 focus:outline-none">
          Monthly
        </button>
        <button className="py-1 px-4 focus:outline-none text-gray-900">Weekly</button>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full ">
       <Image src="/coverPic/price.webp" width={500} height={500} alt='place'/>
        <div className="h-3/5 p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
            START
          </h2>
          <h1 className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
            Weekly 30% OFF
          </h1>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-900 text-white rounded-full flex-shrink-0">
            <FaCheckCircle />
               </span>
            Vexillologist pitchfork
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <FaCheckCircle />
            </span>
            Tumeric plaid portland
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
             <FaCheckCircle />
            </span>
            Mixtape chillwave tumeric
          </p>
          <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably have not heard of them jean shorts.
          </p>
        </div>
      </div>
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <Image src="/coverPic/price.webp" width={500} height={500} alt='place'/>
       
        <div className="h-3/5 p-6 rounded-lg border-2 border-cyan-950 flex flex-col relative overflow-hidden">
          <span className="bg-cyan-950 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
            POPULAR
          </span>
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
            PRO
          </h2>
          <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>$38</span>
            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
             <FaCheckCircle />
            </span>
            Book your tour
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
             <FaCheckCircle />
            </span>
            Tumeric plaid portland
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
             <FaCheckCircle />
            </span>
            Hexagon neutra unicorn
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
             <FaCheckCircle />
            </span>
            Mixtape chillwave tumeric
          </p>
          <button className="flex items-center mt-auto text-white bg-cyan-950 border-0 py-2 px-4 w-full focus:outline-none hover:text-gray-200 hover:bg-sky-700 rounded">
            Book
           
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably have not heard of them jean shorts.
          </p>
        </div>
      </div>
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <Image src="/coverPic/price.webp" width={500} height={500} alt='place'/>
       
        <div className="h-3/5 p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
            BUSINESS
          </h2>
          <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>$56</span>
            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
             <FaCheckCircle />
            </span>
            Vexillologist pitchfork
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
             <FaCheckCircle />
            </span>
            Tumeric plaid portland
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
             <FaCheckCircle />
            </span>
            Hexagon neutra unicorn
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
             <FaCheckCircle />
            </span>
            Vexillologist pitchfork
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
             <FaCheckCircle />
            </span>
            Mixtape chillwave tumeric
          </p>
          <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably have not heard of them jean shorts.
          </p>
        </div>
      </div>
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <Image src="/coverPic/price.webp" width={500} height={500} alt='place'/>
       
        <div className="h-3/5 p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
            SPECIAL
          </h2>
          <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>$72</span>
            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
             <FaCheckCircle />
            </span>
            Vexillologist pitchfork
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
             <FaCheckCircle />
            </span>
            Tumeric plaid portland
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
             <FaCheckCircle />
            </span>
            Hexagon neutra unicorn
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
             <FaCheckCircle />
            </span>
            Vexillologist pitchfork
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
             <FaCheckCircle />
            </span>
            Mixtape chillwave tumeric
          </p>
          <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably have not heard of them jean shorts.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>




      {/* Deals */}
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto bg-slate-100">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          BRAND NAME
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
          Animated Night Hill Illustrations
        </h1>
        <div className="flex mb-4">
          <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
            Description
          </a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
            Reviews
          </a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
            Details
          </a>
        </div>
        <p className="leading-relaxed mb-4">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps
          cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
          tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.
        </p>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Color</span>
          <span className="ml-auto text-gray-900">Blue</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Size</span>
          <span className="ml-auto text-gray-900">Medium</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Quantity</span>
          <span className="ml-auto text-gray-900">4</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Button
          </button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          </button>
        </div>
      </div>
      <Image
        alt="New York"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="/coverPic/price4.jpg"
        width={500} height={500}
      />
    </div>
  </div>
</section>

    </div>
  )
}
