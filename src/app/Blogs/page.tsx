"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { fadeIn } from "../components/variants";

const blogData = [
  {
    id: 1,
    title: "Understanding React's useState Hook",
    description: "Learn how to use the useState hook to manage state in your React applications.",
    author: "John Doe",
    date: "February 5, 2025",
    image: "/images/react-hooks.webp",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    description: "A comprehensive guide to designing responsive and beautiful websites with Tailwind CSS.",
    author: "Jane Smith",
    date: "February 3, 2025",
    image: "/images/tailwind.png",
  },
  {
    id: 3,
    title: "Getting Started with Next.js",
    description: "Everything you need to know to build fast and scalable web applications using Next.js.",
    author: "Ali Khan",
    date: "January 30, 2025",
    image: "/images/nextjs.jpeg",
  },
  {
    id: 4,
    title: "Exploring TypeScript for React",
    description: "A beginner-friendly guide to integrating TypeScript with React for better type safety and development experience.",
    author: "Emily Davis",
    date: "January 28, 2025",
    image: "/images/tsreact.png"
  },
  {
    id: 5,
    title: "Building APIs with Node.js",
    description: "Learn how to design and develop robust RESTful APIs using Node.js and Express.",
    author: "Michael Brown",
   date: "January 25, 2025",
    image: "/images/apireact.png"
  },
  {
    id: 6,
    title: "Introduction to GraphQL",
    description: "Master the basics of GraphQL and how it can simplify querying data in your web applications.",
    author: "Sarah Wilson",
    date: "January 22, 2025",
    image: "images/graphQL.jpg"
  },
  {
    id: 7,
    title: "Mastering HTML5 for Modern Web Development",
    description: "Dive into the latest features of HTML5 and how to use them to create modern, semantic, and accessible web pages.",
    author: "Lucas Gray",
    date: "February 1, 2025",
    image: "/images/modernhtml.webp"
  },
  {
    id: 8,
    title: "Advanced CSS Techniques for Stunning Websites",
    description: "Learn advanced CSS strategies like Flexbox, Grid, and animations to create responsive and visually engaging websites.",
    author: "Olivia Turner",
    date: "January 18, 2025",
    image: "/images/Csstechnique.png"
  },
  {
    id: 9,
    title: "Deep Dive into JavaScript and TypeScript",
    description: "Understand the differences between JavaScript and TypeScript, and learn how TypeScript improves the development process with strong typing.",
    author: "Ethan Clark",
    date: "January 15, 2025",
    image: "/images/tsandjs.png"
  }
];

interface BlogCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  author,
  date,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition duration-300 "
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">By {author}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
      </div>
    </motion.div>
  );
};

const BlogPage = () => {
  return (
    <div className="p-6 bg-gray-900 body-font">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-white mb-12">
        Our New Blogs
      </h1>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog) => (
          <Link href={`/products/${blog.id}`} key={blog.id}>
            <BlogCard
              title={blog.title}
              description={blog.description}
              author={blog.author}
              date={blog.date}
              image={blog.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
