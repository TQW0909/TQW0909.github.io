'use client';

import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaDatabase, FaServer, FaNetworkWired } from 'react-icons/fa';
import { SiDjango, SiR, SiEthereum, SiUbuntu } from 'react-icons/si';

const ProfessionalExperience: React.FC = () => {
  const experiences = [
    {
      company: "Megarobo",
      location: "Beijing, China",
      duration: "May 2023 – July 2023",
      position: "Undergraduate Software Engineering Intern: AIDD Team",
      icon: <FaCode className="text-3xl text-blue-600" />,
      description: "Developed a comprehensive web application for single-cell RNA database access and analysis, significantly improving automated analysis system development efficiency.",
      technologies: ["Django", "Python", "R", "Web Development", "Database Integration", "Microservices"],
      achievements: [
        "Architected a Django-based full-stack web application with a user-friendly interface to access and interact with the team's single-cell RNA database, improving the development of automated analysis systems by 25%",
        "Implemented a specialized R microservice to support advanced single-cell RNA analysis directly from the web application",
        "Integrated cell analytical and graphical tools and laying a foundation for the platform's future scalability and expansion"
      ]
    },
    {
      company: "Zenlayer",
      location: "Diamond Bar, CA",
      duration: "June 2022 – August 2022",
      position: "Undergraduate Research Intern",
      icon: <FaNetworkWired className="text-3xl text-blue-600" />,
      description: "Researched and documented Ethereum testnet architecture and validator setup procedures for blockchain infrastructure development.",
      technologies: ["Ethereum", "Blockchain", "Ubuntu", "VM", "Technical Documentation", "Networking"],
      achievements: [
        "Created detailed technical documentation for Eth2 validator setup and staking on the Prater/Goerli Testnet via an Ubuntu VM",
        "Researched the networking architecture of 2 Ethereum testnets, Goerli and Sepolia, to fork"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Professional Experience</h2>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                {/* Experience Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {experience.icon}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.company}</h3>
                      <p className="text-lg font-semibold text-blue-600 mb-2">{experience.position}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-blue-500" />
                          {experience.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaCalendarAlt className="text-blue-500" />
                          {experience.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
