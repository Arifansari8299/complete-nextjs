import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="text-2xl font-bold text-blue-400">
          <Link href="/">Next.js</Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            className="text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:items-center md:gap-6 absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-auto px-4 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="mb-2 md:mb-0">
            <Link href="/" className="hover:text-blue-400">Home</Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link href="/routing" className="hover:text-blue-400">Routing</Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link href="/ssr" className="hover:text-blue-400">SSR</Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link href="/about" className="hover:text-blue-400">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
