'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactLinks: React.FC = () => {
  // Replace these with your actual information
  const contactInfo = {
    linkedin: "https://www.linkedin.com/in/wangtingqi/",
    github: "https://github.com/TQW0909",
    email: "twang356@usc.edu",
    phone: "+1 949-687-7668"
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8">
      {/* LinkedIn */}
      <a
        href={contactInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <FaLinkedin className="text-xl" />
        <span>LinkedIn</span>
      </a>

      {/* GitHub */}
      <a
        href={contactInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
      >
        <FaGithub className="text-xl" />
        <span>GitHub</span>
      </a>

      {/* Email */}
      <a
        href={`mailto:${contactInfo.email}`}
        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        <FaEnvelope className="text-xl" />
        <span>Email</span>
      </a>

      {/* Phone */}
      <a
        href={`tel:${contactInfo.phone}`}
        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        <FaPhone className="text-xl" />
        <span>Phone</span>
      </a>
    </div>
  );
};

export default ContactLinks; 