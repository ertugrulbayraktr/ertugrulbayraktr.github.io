"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-[#2C3E50] text-white backdrop-blur-md border-b border-[#1A252F]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-end items-center">

        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12 items-center">
            <li>
              <Link 
                href="/" 
                className={`font-medium tracking-wide uppercase text-sm transition-colors relative pb-1 ${
                  pathname === '/' 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`font-medium tracking-wide uppercase text-sm transition-colors relative pb-1 ${
                  pathname === '/about' 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className={`font-medium tracking-wide uppercase text-sm transition-colors relative pb-1 ${
                  pathname === '/projects' 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className={`font-medium tracking-wide uppercase text-sm transition-colors relative pb-1 ${
                  pathname === '/blog' 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`font-medium tracking-wide uppercase text-sm transition-colors relative pb-1 ${
                  pathname === '/contact' 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                CONTACT
              </Link>
            </li>

          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4 pb-4 px-6">
            <li>
              <Link 
                href="/" 
                className={`block font-medium tracking-wide uppercase text-sm transition-colors relative pb-1 ${
                  pathname === '/' 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-white hover:text-gray-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`block font-medium tracking-wide uppercase text-sm transition-colors relative pb-1 ${
                  pathname === '/about' 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-white hover:text-gray-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className={`block font-medium tracking-wide uppercase text-sm transition-colors relative pb-1 ${
                  pathname === '/projects' 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-white hover:text-gray-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className={`block font-medium tracking-wide uppercase text-sm transition-colors relative pb-1 ${
                  pathname === '/blog' 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-white hover:text-gray-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`block font-medium tracking-wide uppercase text-sm transition-colors relative pb-1 ${
                  pathname === '/contact' 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-white hover:text-gray-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>

          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header; 