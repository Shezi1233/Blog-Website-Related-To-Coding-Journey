"use client"
import { motion } from 'framer-motion';
import React from 'react';
import { fadeIn } from './variants';

const Gallery = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <motion.div 
        variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
        
        className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* Title Section */}
          <div className="flex justify-center items-center w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white text-center">
              MASTER YOUR SKILLS IN VARIOUS LANGUAGES
            </h1>
          </div>

          {/* Gallery Section */}
          <div className="flex flex-wrap md:-m-2 -m-1">
            {/* Left Column */}
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block rounded-lg transform transition duration-300 hover:scale-105 hover:brightness-110"
                  src="/images/apireact.png"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block rounded-lg transform transition duration-300 hover:scale-105 hover:brightness-110"
                  src="/images/python.webp"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block rounded-lg transform transition duration-300 hover:scale-105 hover:brightness-110"
                  src="/images/htmlcss.jpg"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block rounded-lg transform transition duration-300 hover:scale-105 hover:brightness-110"
                  src="/images/java.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block rounded-lg transform transition duration-300 hover:scale-105 hover:brightness-110"
                  src="/images/php.webp"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block rounded-lg transform transition duration-300 hover:scale-105 hover:brightness-110"
                  src="/images/nextjs.jpg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Gallery;
