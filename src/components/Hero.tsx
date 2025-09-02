'use client';

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowDown } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="home" className="section min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Tingqi (Ting) Wang</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
              AI Graduate Student @ USC Viterbi
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionate about machine learning, AI, and technologies.
              Actively seeking for opportunities to apply my skills to real-world applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="#projects" 
                className="btn-primary inline-flex items-center gap-2 hover-lift"
              >
                View My Work
                <FaArrowDown className="text-sm" />
              </a>
              <a 
                href="#contact" 
                className="btn-secondary inline-flex items-center gap-2 hover-lift"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a 
                href="https://github.com/TQW0909" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift hover-scale"
              >
                <FaGithub className="text-2xl text-gray-700" />
              </a>
              <a 
                href="https://www.linkedin.com/in/wangtingqi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift hover-scale"
              >
                <FaLinkedin className="text-2xl text-blue-600" />
              </a>
              <a 
                href="mailto:twang356@usc.edu" 
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift hover-scale"
              >
                <FaEnvelope className="text-2xl text-red-500" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse-glow"></div>
              
              {/* Image Container */}
              <div className="relative w-[300px] h-[500px] mx-auto rounded-2xl overflow-hidden shadow-2xl hover-lift">
                <Image
                  src="/images/25USC-3514660716-2-1010354033-1.jpg"
                  alt="Tingqi Wang"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 300px, 300px"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
          <span className="text-sm font-medium">Scroll Down</span>
          <FaArrowDown className="text-xl" />
        </a>
      </div>
    </section>
  );
};

export default Hero; 