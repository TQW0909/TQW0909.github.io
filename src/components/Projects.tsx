'use client';

import React from 'react';
import { FaCode, FaRobot, FaEye, FaGamepad, FaUsers, FaCalendarAlt, FaGithub, FaServer, FaCloud, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiSupabase, SiOpenai, SiPytorch, SiOpencv, SiLinux } from 'react-icons/si';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AnyPrompt",
      type: "Group Project, Team Lead",
      duration: "January 2025 – May 2025",
      icon: <FaCode className="text-3xl text-blue-600" />,
      description: "Open-source prompt engineering editor using TypeScript, Next.js, and Supabase to significantly boost prompt engineering productivity in development settings by approximately 50%.",
      technologies: ["TypeScript", "Next.js", "Supabase", "OpenAI API", "Anthropic API"],
      achievements: [
        "Led the development of an open-source prompt engineering editor",
        "Utilized OpenAI and Anthropic APIs to facilitate direct prompt execution, version control of prompts, and detailed run history tracking",
        "Fostered streamlined collaboration across the team and stakeholders through effective team leadership, clear communication, and proactive stakeholder engagement"
      ]
    },
    {
      title: "Automatic Object Detection and Retrieval using Robotic Arm",
      type: "Independent Project",
      duration: "October 2024 – December 2024",
      icon: <FaRobot className="text-3xl text-blue-600" />,
      description: "Machine learning system to autonomously detect and pick up objects using a robotic arm, involving object detection, coordinate transformation, and robotic control.",
      technologies: ["OpenCV", "YOLO10s", "RRT", "Robotic Control", "Computer Vision"],
      achievements: [
        "Composed a machine learning system to autonomously detect and pick up objects using a robotic arm",
        "Detected objects using a OpenCV-calibrated camera and the YOLO10s model, and calculated world coordinates",
        "Converted object coordinates to the robotic arm reference frame using a transformation matrix and determined the final pose using TSR and inverse kinematics",
        "Integrated Rapidly-exploring Random Tree (RRT) for path planning to move the arm to the target position for object retrieval"
      ]
    },
    {
      title: "Deepfake Image Detection",
      type: "Independent Project",
      duration: "January 2024 – May 2024",
      icon: <FaEye className="text-3xl text-blue-600" />,
      description: "VGG-16 based Convolutional Neural Network (CNN) model in PyTorch for deepfake image detection, achieving 76.94% accuracy on a 50,000-image test set.",
      technologies: ["PyTorch", "VGG-16", "CNN", "CUDA", "USC HPC", "Data Augmentation"],
      achievements: [
        "Developed and implemented a VGG-16 based Convolutional Neural Network (CNN) model in PyTorch for deepfake image detection, achieving 76.94% accuracy on a 50,000-image test set",
        "Applied data augmentation techniques and transfer learning to enhance model performance and generalization capabilities, leveraging CUDA and machine learning infrastructure (USC HPC) for efficient training and tuning",
        "Conducted thorough analysis and identified poor dataset quality and selection as key factors affecting model accuracy"
      ]
    },
    {
      title: "Ultimate Texas Hold'em Game on Nexys A7 FPGA",
      type: "Two-Member Group Project",
      duration: "January 2024 – April 2024",
      icon: <FaGamepad className="text-3xl text-blue-600" />,
      description: "Replicated Ultimate Texas Hold'em on Nexys A7 FPGA using Verilog, with a VGA monitor for game visualization and comprehensive module testing.",
      technologies: ["Verilog", "FPGA", "VGA", "QuestaSim", "Xilinx Vivado", "State Machine"],
      achievements: [
        "Replicated Ultimate Texas Hold'em on Nexys A7 FPGA using Verilog, with a VGA monitor for game visualization and comprehensive module testing using QuestaSim and synthesis using Xilinx Vivado",
        "Designed game-state logic with a state machine to handle game flow, betting options, card dealing, and user options via switches",
        "Facilitated modules for random card generation, hand ranking, and hand comparison to determine game outcomes"
      ]
    },
    {
      title: "Accelerating Artificial Bee Colony Optimization Algorithm",
      type: "Two Person Group Project",
      duration: "October 2023 – December 2023",
      location: "Los Angeles, CA",
      icon: <FaServer className="text-3xl text-blue-600" />,
      description: "Enhanced the ABC optimization algorithm with a multi-swarm strategy on the CPU implemented through Pthreads in C++.",
      technologies: ["C++", "Pthreads", "Multi-swarm Strategy", "HPC", "AMD Epyc-7513", "Optimization Algorithms"],
      achievements: [
        "Enhanced the ABC optimization algorithm with a multi-swarm strategy on the CPU implemented through Pthreads in C++",
        "Achieved near-ideal speed-up (e.g., ~16x speed-up with 16 processors) over the serial implementation on four benchmark optimization functions on AMD Epyc-7513 CPUs (2.4 GHz) on the USC High-Performance Computing environment",
        "Generated a comprehensive analysis of the algorithm's parameters, evaluating their impact on both runtime and solution quality, leading to optimized performance settings"
      ]
    },
    {
      title: "Remote Garden Monitor",
      type: "Two Person Group Project",
      duration: "October 2023 – December 2023",
      location: "Los Angeles, CA",
      icon: <FaCloud className="text-3xl text-blue-600" />,
      description: "IoT-based garden monitor with a web interface for real-time data visualization and remote watering control.",
      technologies: ["IoT", "Raspberry Pi", "Azure", "Flask", "MQTT", "Web Interface", "Sensors"],
      achievements: [
        "Engineered an IoT-based garden monitor with a web interface for real-time data visualization and remote watering control",
        "Integrated a Raspberry Pi to gather garden data (temperature, humidity, light intensity) and control the watering actuator, using encrypted MQTT for communication with an Azure server",
        "Deployed a Microsoft Azure server to host the Flask web application, fostering the efficient storage of collected data, real-time weather data fetching, and HTTP user interface interactions"
      ]
    },
    {
      title: "KitchenConscience",
      type: "Group Project, Backend leader",
      duration: "February 2023 – May 2023",
      location: "Los Angeles, CA",
      icon: <FaDatabase className="text-3xl text-blue-600" />,
      description: "Web application for tracking food expiration dates and ownership of items through creating multi-threaded digital kitchen-spaces shared by multiple users with different access privileges.",
      technologies: ["Spring Boot", "JDBC", "MySQL", "AWS", "Multi-threading", "Backend Development"],
      achievements: [
        "Crafted a web application targeted at users who share a kitchen space to aid them in tracking food expiration dates and ownership of items through creating multi-threaded digital kitchen-spaces that are shared by multiple users with different access privileges",
        "Utilized Spring Boot and JDBC to build the backend of the application and hosted the MySQL database on AWS",
        "Collaborated with frontend team through effective communication to streamline project development"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Academic Projects</h2>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {project.icon}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                          <FaUsers className="text-blue-500" />
                          {project.type}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaCalendarAlt className="text-blue-500" />
                          {project.duration}
                        </span>
                        {project.location && (
                          <span className="flex items-center gap-2">
                            <FaGithub className="text-blue-500" />
                            {project.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
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
                    {project.achievements.map((achievement, achievementIndex) => (
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

export default Projects;
