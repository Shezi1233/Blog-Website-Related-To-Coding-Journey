"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn } from './variants'

const Statics = () => {
  return (
    <div>
        <section className="text-gray-400 bg-gray-900 body-font">
  <motion.div
  variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
  
  className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
          2.7K
        </h2>
        <p className="leading-relaxed">Users</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
          1.8K
        </h2>
        <p className="leading-relaxed">Likes</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
          35
        </h2>
        <p className="leading-relaxed">Downloads</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
          10
        </h2>
        <p className="leading-relaxed">Blogs</p>
      </div>
    </div>
  </motion.div>
</section>

    </div>
  )
}

export default Statics