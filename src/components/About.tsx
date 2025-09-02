'use client';

import React from 'react';
import { FaGraduationCap, FaCode, FaHeart, FaUsers, FaServer, FaMicrochip, FaCloud, FaDatabase, FaAws, FaRobot } from 'react-icons/fa';
import { FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiR, SiRos, SiSpringboot, SiDjango, SiFlask, SiNextdotjs, SiNumpy, SiPytorch, SiTensorflow, SiScikitlearn, SiSpacy, SiHuggingface, SiPandas, SiArduino, SiRaspberrypi, SiMysql, SiPostgresql, SiSupabase, SiSwift } from 'react-icons/si';
import { MdCloud, MdDataObject, MdSpeed, MdComputer, MdSchool } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { PiHandPeace } from 'react-icons/pi';
import { FaCircleInfo } from 'react-icons/fa6';

const About: React.FC = () => {
  const skills = {
    "Programming Languages": [
      { name: "Java", icon: <FaJava className="text-2xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-2xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-2xl" /> },
      { name: "C/C++", icon: <SiCplusplus className="text-2xl" /> },
      { name: "Python", icon: <FaPython className="text-2xl" /> },
      { name: "R", icon: <SiR className="text-2xl" /> },
      { name: "Swift", icon: <SiSwift className="text-2xl" /> },
      { name: "Cursor", icon: <FaCode className="text-2xl" /> }
    ],
    "Web Development": [
      { name: "HTML/CSS", icon: <FaHtml5 className="text-2xl" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-2xl" /> },
      { name: "Django", icon: <SiDjango className="text-2xl" /> },
      { name: "Flask", icon: <SiFlask className="text-2xl" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-2xl" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-2xl" /> }
    ],
    "Machine Learning": [
      { name: "PyTorch", icon: <SiPytorch className="text-2xl" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-2xl" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-2xl" /> },
      { name: "SpaCy", icon: <SiSpacy className="text-2xl" /> },
      { name: "HuggingFace", icon: <SiHuggingface className="text-2xl" /> },
      { name: "Kaggle", icon: <FaCode className="text-2xl" /> }
    ],
    "Data Processing": [
      { name: "NumPy", icon: <SiNumpy className="text-2xl" /> },
      { name: "Pandas", icon: <SiPandas className="text-2xl" /> },
      { name: "Matplotlib", icon: <SiNumpy className="text-2xl" /> }
    ],
    "Parallel Computing": [
      { name: "CUDA", icon: <FaServer className="text-2xl" /> },
      { name: "OpenMP", icon: <FaServer className="text-2xl" /> },
      { name: "Pthreads", icon: <FaServer className="text-2xl" /> },
      { name: "MPI", icon: <FaServer className="text-2xl" /> },
      { name: "Slurm", icon: <FaServer className="text-2xl" /> },
      { name: "HPC Environments", icon: <FaServer className="text-2xl" /> }
    ],
    "Hardware Design": [
      { name: "Verilog", icon: <FaMicrochip className="text-2xl" /> },
      { name: "QuestaSim", icon: <FaMicrochip className="text-2xl" /> },
      { name: "Xilinx Vivado", icon: <FaMicrochip className="text-2xl" /> },
      { name: "Cadence Virtuoso", icon: <FaMicrochip className="text-2xl" /> }
    ],
    "Embedded Systems": [
      { name: "Arduino Uno", icon: <SiArduino className="text-2xl" /> },
      { name: "Raspberry Pi", icon: <SiRaspberrypi className="text-2xl" /> },
      { name: "Nexys A7", icon: <FaMicrochip className="text-2xl" /> },
      { name: "ROS", icon: <SiRos className="text-2xl" /> }
    ],
    "Cloud & Databases": [
      { name: "AWS", icon: <FaAws className="text-2xl" /> },
      { name: "Azure", icon: <MdCloud className="text-2xl" /> },
      { name: "MySQL", icon: <SiMysql className="text-2xl" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl" /> },
      { name: "Supabase", icon: <SiSupabase className="text-2xl" /> }
    ]
  };

  const interests = [
    "Rugby", "Snowboarding", "Arts and Fashion", "Sailing", 
    "Cooking", "Biking", "Poker", "AutoML"
  ];

  return (
    <section id="about" className="section py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate computer science graduate student with expertise in machine learning, AI, 
            computer vision, and software engineering. Always eager to learn and create innovative solutions.
          </p>
        </div>

        {/* Education Modules */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Master's Degree Module */}
          <div className="card p-8 animate-fade-in-left">
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="text-3xl text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Master's Degree</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="p-3 bg-blue-500 text-white rounded-lg">
                  <FaGraduationCap className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Master of Science in Computer Science: AI</h4>
                  <p className="text-gray-600">University of Southern California</p>
                  <p className="text-gray-600">Viterbi School of Engineering</p>
                  <p className="text-sm text-gray-500">Expected Graduation: May 2027</p>
                  <p className="text-sm font-semibold text-blue-600">GPA: N/A</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">Machine Learning</span>
                  <span className="skill-badge">Deep Learning</span>
                  <span className="skill-badge">Advanced Algorithms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Undergraduate Module */}
          <div className="card p-8 animate-fade-in-right">
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="text-3xl text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">Undergraduate</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="p-3 bg-purple-500 text-white rounded-lg">
                  <FaGraduationCap className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Bachelor of Science in Computer Science and Computer Engineering</h4>
                  <p className="text-gray-600">University of Southern California</p>
                  <p className="text-gray-600">Viterbi School of Engineering</p>
                  <p className="text-sm text-gray-500">Graduated: May 2025</p>
                  <p className="text-sm font-semibold text-purple-600">GPA: 3.86</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Achievements & Awards</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="text-green-600 font-bold">🏆</div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Viterbi Dean's List</h5>
                      <p className="text-sm text-gray-600">8 Semesters</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <div className="text-orange-600 font-bold">🏅</div>
                    <div>
                      <h5 className="font-semibold text-gray-900">2023 Viterbi Engineering Mathematics Prize</h5>
                      <p className="text-sm text-gray-600">Excellence in Calculus - One of two students awarded</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Skills & Technologies</h3>
            <p className="text-gray-600">A comprehensive toolkit for building innovative solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div key={category} className="card p-6 animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">{category}</h4>
                <div className="space-y-3">
                  {skillList.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover-lift"
                    >
                      <div className="text-blue-600">{skill.icon}</div>
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div className="mt-16">
          <div className="text-center mb-8 animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaHeart className="text-3xl text-red-500" />
              <h3 className="text-3xl font-bold gradient-text">Interests & Hobbies</h3>
            </div>
            <p className="text-gray-600">Beyond coding and research</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <div 
                key={interest}
                className="card p-4 text-center hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-gray-700 font-medium">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
