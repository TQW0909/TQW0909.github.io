'use client';

import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import ContactLinks from './ContactLinks';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
        {/* Social Links */}
        <div className="text-center">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Connect With Me</h3>
        <ContactLinks />
        </div>
    </section>
  );
};

export default Contact; 