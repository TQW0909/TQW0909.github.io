'use client';

import React from 'react';
import { FaGraduationCap, FaCode, FaTools, FaHeart, FaJava, FaDatabase, FaCloud, FaServer, FaMicrochip, FaRobot, FaAws } from 'react-icons/fa';
import { 
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiR, SiRos, SiHtml5, SiCss3, 
  SiSpringboot, SiDjango, SiFlask, SiBootstrap, SiApacheecharts, SiNextdotjs, 
  SiNumpy, SiPytorch, SiTensorflow, SiScikitlearn, SiSpacy, 
  SiHuggingface, SiPandas, SiArduino, SiRaspberrypi, 
  SiMysql, SiPostgresql, SiSupabase,
  SiKaggle, SiSwift
} from 'react-icons/si';
import { FaCircleInfo } from "react-icons/fa6";
import { MdSchool, MdComputer, MdSpeed, MdDataObject, MdCloud } from 'react-icons/md';
import { PiHandPeace } from 'react-icons/pi';
import { CgWebsite } from 'react-icons/cg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center gap-3">
          <FaCircleInfo className="text-blue-600" />
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <MdComputer className="text-blue-600" />
              Introduction
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
                I'm Tingqi "Ting" Wang, a Computing Engineering & Computer Science graduate from USC.
                My specific interests are in machine learning and AI and I'm currently pursuing a Master's in AI at USC.          
            </p>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <MdSchool className="text-blue-600" />
              Education
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h4 className="text-xl font-medium text-gray-900 flex items-center gap-2">
                <PiHandPeace className='text-blue-500'/>
                  University of Southern California
                </h4>
                <p className="text-gray-600">Master of Science in Computer Science - Artificial Intelligence</p>
                <p className="text-gray-500">2025 - 2027</p>
              </div>
            </div>
            <br></br>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h4 className="text-xl font-medium text-gray-900 flex items-center gap-2">
                <PiHandPeace className='text-blue-500'/>
                  University of Southern California
                  
                </h4>
                <p className="text-gray-600">Bachelors of Science in Computer Engineering and Computer Science: Computing Systems</p>
                <p className="text-gray-500">2021 - 2025</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <FaCode className="text-blue-600" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Programming Languages */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-medium mb-3 text-gray-900 flex items-center gap-2">
                  <FaCode className="text-blue-500" />
                  Programming Languages
                </h4>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center gap-2">
                    <FaJava className="text-blue-500 text-xl" />
                    Java
                  </li>
                  <li className="flex items-center gap-2">
                    <SiJavascript className="text-blue-500 text-xl" />
                    JavaScript
                  </li>
                  <li className="flex items-center gap-2">
                    <SiTypescript className="text-blue-500 text-xl" />
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <SiCplusplus className="text-blue-500 text-xl" />
                    C/C++
                  </li>
                  <li className="flex items-center gap-2">
                    <SiPython className="text-blue-500 text-xl" />
                    Python
                  </li>
                  <li className="flex items-center gap-2">
                    <SiR className="text-blue-500 text-xl" />
                    R
                  </li>
                  <li className="flex items-center gap-2">
                    <SiSwift className="text-blue-500 text-xl" />
                    Swift
                  </li>
                </ul>
              </div>

              {/* Web Development */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-medium mb-3 text-gray-900 flex items-center gap-2">
                  <CgWebsite className="text-blue-500" />
                  Web Development
                </h4>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center gap-2">
                    <SiHtml5 className="text-blue-500 text-xl" />
                    HTML/CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <SiNextdotjs className="text-blue-500 text-xl" />
                    Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <SiSpringboot className="text-blue-500 text-xl" />
                    Spring Boot
                  </li>
                  <li className="flex items-center gap-2">
                    <SiDjango className="text-blue-500 text-xl" />
                    Django
                  </li>
                  <li className="flex items-center gap-2">
                    <SiFlask className="text-blue-500 text-xl" />
                    Flask
                  </li>
                  <li className="flex items-center gap-2">
                    <SiBootstrap className="text-blue-500 text-xl" />
                    Bootstrap
                  </li>
                </ul>
              </div>

              {/* Machine Learning */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-medium mb-3 text-gray-900 flex items-center gap-2">
                  <FaRobot className="text-blue-500" />
                  Machine Learning
                </h4>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center gap-2">
                    <SiPytorch className="text-blue-500 text-xl" />
                    PyTorch
                  </li>
                  <li className="flex items-center gap-2">
                    <SiTensorflow className="text-blue-500 text-xl" />
                    TensorFlow
                  </li>
                  <li className="flex items-center gap-2">
                    <SiScikitlearn className="text-blue-500 text-xl" />
                    Scikit-learn
                  </li>
                  <li className="flex items-center gap-2">
                    <SiSpacy className="text-blue-500 text-xl" />
                    SpaCy
                  </li>
                  <li className="flex items-center gap-2">
                    <SiHuggingface className="text-blue-500 text-xl" />
                    HuggingFace
                  </li>
                  <li className="flex items-center gap-2">
                    <SiKaggle className="text-blue-500 text-xl" />
                    Kaggle
                  </li>
                </ul>
              </div>

              {/* Data Processing */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-medium mb-3 text-gray-900 flex items-center gap-2">
                  <MdDataObject className="text-blue-500" />
                  Data Processing
                </h4>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center gap-2">
                    <SiNumpy className="text-blue-500 text-xl" />
                    NumPy
                  </li>
                  <li className="flex items-center gap-2">
                    <SiPandas className="text-blue-500 text-xl" />
                    Pandas
                  </li>
                  <li className="flex items-center gap-2">
                    <SiApacheecharts className="text-blue-500 text-xl" />
                    Apache Echarts
                  </li>
                </ul>
              </div>

              {/* Parallel Computing */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-medium mb-3 text-gray-900 flex items-center gap-2">
                  <FaServer className="text-blue-500" />
                  Parallel Computing
                </h4>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center gap-2">
                    <FaServer className="text-blue-500 text-xl" />
                    CUDA
                  </li>
                  <li className="flex items-center gap-2">
                    <FaServer className="text-blue-500 text-xl" />
                    OpenMP
                  </li>
                  <li className="flex items-center gap-2">
                    <FaServer className="text-blue-500 text-xl" />
                    Pthreads & MPI
                  </li>
                  <li className="flex items-center gap-2">
                    <FaServer className="text-blue-500 text-xl" />
                    Slurm
                  </li>
                  <li className="flex items-center gap-2">
                    <MdComputer className="text-blue-500 text-xl" />
                    HPC Environments
                  </li>
                </ul>
              </div>

              {/* Hardware Design */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-medium mb-3 text-gray-900 flex items-center gap-2">
                  <FaMicrochip className="text-blue-500" />
                  Hardware Design
                </h4>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center gap-2">
                    <FaMicrochip className="text-blue-500 text-xl" />
                    Verilog
                  </li>
                  <li className="flex items-center gap-2">
                    <FaMicrochip className="text-blue-500 text-xl" />
                    Xilinx Vivado
                  </li>
                  <li className="flex items-center gap-2">
                    <FaMicrochip className="text-blue-500 text-xl" />
                    Cadence Virtuoso
                  </li>
                  <li className="flex items-center gap-2">
                    <FaMicrochip className="text-blue-500 text-xl" />
                    Nexys A7
                  </li>
                </ul>
              </div>

              {/* Embedded Systems */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-medium mb-3 text-gray-900 flex items-center gap-2">
                  <MdComputer className="text-blue-500" />
                  Embedded Systems
                </h4>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center gap-2">
                    <SiArduino className="text-blue-500 text-xl" />
                    Arduino Uno
                  </li>
                  <li className="flex items-center gap-2">
                    <SiRaspberrypi className="text-blue-500 text-xl" />
                    Raspberry Pi
                  </li>
                  <li className="flex items-center gap-2">
                    <SiRos className="text-blue-500 text-xl" />
                    ROS
                  </li>
                </ul>
              </div>

              {/* Cloud Platforms */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-medium mb-3 text-gray-900 flex items-center gap-2">
                  <FaCloud className="text-blue-500" />
                  Cloud Platforms
                </h4>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center gap-2">
                    <FaAws className="text-blue-500 text-xl" />
                    AWS
                  </li>
                  <li className="flex items-center gap-2">
                    <MdCloud className="text-blue-500 text-xl" />
                    Azure
                  </li>
                </ul>
              </div>

              {/* Databases */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-medium mb-3 text-gray-900 flex items-center gap-2">
                  <FaDatabase className="text-blue-500" />
                  Databases
                </h4>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center gap-2">
                    <SiMysql className="text-blue-500 text-xl" />
                    MySQL
                  </li>
                  <li className="flex items-center gap-2">
                    <SiPostgresql className="text-blue-500 text-xl" />
                    PostgreSQL
                  </li>
                  <li className="flex items-center gap-2">
                    <SiSupabase className="text-blue-500 text-xl" />
                    Supabase
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <FaHeart className="text-blue-600" />
              Interests & Hobbies
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-blue-600 font-medium">Rugby</span>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-blue-600 font-medium">Snowboarding</span>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-blue-600 font-medium">Fashion</span>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-blue-600 font-medium">Sailing</span>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-blue-600 font-medium">Cooking</span>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-blue-600 font-medium">Poker</span>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-blue-600 font-medium">TCG</span>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-blue-600 font-medium">AutoML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
