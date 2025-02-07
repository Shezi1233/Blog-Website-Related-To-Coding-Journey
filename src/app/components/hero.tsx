"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn } from './variants'
import TypewriterComponent from './typewriter'

const Hero = () => {
  return (
     <div>
       <section className="text-gray-600 bg-gray-200 body-font">
  <motion.div 
   variants={fadeIn("left",0.2)}
        initial = "hidden"
        whileInView={"show"}
        viewport={{once: false , amount: 0.7}}
  className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       <TypewriterComponent/>
      </h1>
      <p className="mb-8 leading-relaxed">
      Join me on a journey through web development where we explore everything from the basics of HTML to advanced JavaScript and modern frameworks. Whether youre a beginner or an expert this blog has something for everyone!
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          New Blogs
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="/images/Hero.jpg"
      />
    </div>
  </motion.div>
</section>

     </div>
  )
}

export default Hero