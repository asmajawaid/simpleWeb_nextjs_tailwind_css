import React from 'react'

export default function Hero() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom_image">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
   
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
        UP TO 60% OFF ADVENTURE TRAVEL <br />
        JOIN OVER 40,000 MEMBERS.
      </h1><br />
      <p className="mb-8 leading-relaxed text-white font-bold">
        Get exclusive acess to member only deals <br />
        on amazinig adventure holidays by email- it is Free
      </p> <br />
      <div className="flex justify-center">
        <button className="inline-flex text-[#345e37] bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:text-[#345e37] hover:bg-gray-200 rounded text-lg">
          Exiteing Deels
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:text-[#345e37] rounded text-lg">
          Email Me
        </button>
      </div> <br />
      <p className="mb-8 leading-relaxed text-white font-medium">
       No Thanks, I like boring holidays.
      </p>
    </div>
  </div>
</section>

    </div>
  )
}
