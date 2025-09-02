'use client';

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaComments } from 'react-icons/fa';
import ContactLinks from './ContactLinks';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="card p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center gap-3">
              <FaComments className="text-blue-600" />
              Contact Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="p-3 bg-blue-500 text-white rounded-lg">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Los Angeles, California</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="p-3 bg-green-500 text-white rounded-lg">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a 
                    href="mailto:twang356@usc.edu" 
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    twang356@usc.edu
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="p-3 bg-purple-500 text-white rounded-lg">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a 
                    href="tel:+19496877668" 
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    +1 (949) 687-7668
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="p-3 bg-orange-500 text-white rounded-lg">
                  <FaComments className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/wangtingqi/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    wangtingqi
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Me</h3>
              <ContactLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 