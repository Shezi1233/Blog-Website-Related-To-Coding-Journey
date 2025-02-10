"use client"
import React, { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-black text-white">
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo or Website Name */}
        <div className="text-xl font-serif font-black">CodeCraft</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navbar Links */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex space-x-8 items-center text-lg`}
        >
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/About" className="hover:text-gray-400">About</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
          <a href="/Blogs" className="hover:text-gray-400">Blogs</a>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="flex flex-col space-y-4 text-center">
          <li>
            <a href="/" className="block py-2 text-lg">Home</a>
          </li>
          <li>
            <a href="/about" className="block py-2 text-lg">About</a>
          </li>
          <li>
            <a href="/contact" className="block py-2 text-lg">Contact</a>
          </li>
          <li>
            <a href="/blogs" className="block py-2 text-lg">Blogs</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
