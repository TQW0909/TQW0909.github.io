'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PiHandWavingDuotone } from 'react-icons/pi';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-6 text-gray-900"><PiHandWavingDuotone className="text-blue-600 inline-block" /> Hey! I'm Ting Wang!</h1>
            <p className="text-xl text-gray-600 mb-8">I'm a Computing Engineering & Computer Science graduate from USC Viterbi School of Engineering who is currently pursuing a master's in Artificial Intelligence!</p>
            <div className="flex space-x-4">
              <Link 
                href="#about" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                About Me
              </Link>
              <Link 
                href="#projects" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View My Projects
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-[450px] h-[750px] mx-auto">
            {/* Decorative background with vertical rectangle shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg transform rotate-3"></div>
            {/* Image container with vertical rectangle shape */}
            <div className="absolute inset-0 bg-white rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/25USC-3514660716-2-1010354033-1.jpg"
                alt="Tingqi Wang"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 300px, 300px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 