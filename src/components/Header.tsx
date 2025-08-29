'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">Tingqi (Ting) Wang</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="#home" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-blue-600 transition-colors">About</Link></li>
            <li><Link href="#experience" className="hover:text-blue-600 transition-colors">Experience</Link></li>
            <li><Link href="#projects" className="hover:text-blue-600 transition-colors">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="px-6 py-4 space-y-4">
            <li><Link href="#home" className="block hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link href="#about" className="block hover:text-blue-600 transition-colors">About</Link></li>
            <li><Link href="#experience" className="block hover:text-blue-600 transition-colors">Experience</Link></li>
            <li><Link href="#projects" className="block hover:text-blue-600 transition-colors">Projects</Link></li>
            <li><Link href="#contact" className="block hover:text-blue-600 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header; 