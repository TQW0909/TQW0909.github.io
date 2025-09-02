'use client';

import React, { useState } from 'react';
import { FaCode, FaRobot, FaEye, FaGamepad, FaUsers, FaCalendarAlt, FaGithub, FaServer, FaCloud, FaDatabase, FaPlay, FaImage, FaMapMarkerAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiSupabase, SiOpenai, SiPytorch, SiOpencv, SiLinux } from 'react-icons/si';
import Image from 'next/image';

const Projects: React.FC = () => {
  const [expandedVideos, setExpandedVideos] = useState<{ [key: string]: boolean }>({});

  const toggleVideo = (projectTitle: string) => {
    setExpandedVideos(prev => ({
      ...prev,
      [projectTitle]: !prev[projectTitle]
    }));
  };

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
      ],
      github: "https://github.com/stephencme/anyprompt",
      media: {
        type: "video",
        src: "/videos/projects/Anyprompt Demo.mp4",
        alt: "AnyPrompt Demo Video",
        caption: "Demonstration of AnyPrompt prompt engineering editor interface and workflow"
      }
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
      ],
      github: "https://github.com/TQW0909/CSCI-545-Personal-Project",
      media: {
        type: "video",
        src: "/videos/projects/Robot Arm Demo.mp4",
        alt: "Robotic Arm Demo Video",
        caption: "Demonstration of object detection and retrieval system"
      }
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
      ],
      github: "https://github.com/TQW0909/Deepfake_image_detection_project",
      media: {
        type: "image",
        src: "/images/projects/deepfake-detection-results.png",
        alt: "Deepfake Detection Results",
        caption: "Model performance metrics and confusion matrix"
      }
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
      ],
      github: "https://github.com/TQW0909/EE354-Project",
      media: {
        type: "image",
        src: "/images/projects/fpga-poker-game.png",
        alt: "FPGA Poker Game Interface",
        caption: "VGA display showing the poker game interface"
      }
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
      ],
      github: "https://github.com/TQW0909/EE451_Project",
      media: {
        type: "image",
        src: "/images/projects/abc-optimization-results.png",
        alt: "ABC Optimization Results",
        caption: "Speed-up analysis and performance comparison charts"
      }
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
      ],
      github: "https://github.com/TQW0909/EE250_Project",
      media: {
        type: "image",
        src: "/images/projects/garden-monitor-dashboard.png",
        alt: "Garden Monitor Dashboard",
        caption: "Real-time sensor data and control interface"
      }
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
      ],
      media: {
        type: "video",
        src: "/videos/projects/KitchenConscience Demo.mp4",
        alt: "KitchenConscience Demo Video",
        caption: "Demonstration of KitchenConscience food tracking and kitchen management interface"
      }
    }
  ];

  return (
    <section id="projects" className="section py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Academic Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my academic work spanning machine learning, computer vision, 
            robotics, and software engineering projects.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card overflow-hidden hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
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
                            <FaMapMarkerAlt className="text-blue-500" />
                            {project.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* GitHub Link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 text-sm font-medium shadow-lg hover-lift"
                    >
                      <FaGithub className="text-lg" />
                      View Code
                    </a>
                  )}
                </div>

                {/* Project Description */}
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Project Media */}
                {project.media && project.title !== "Deepfake Image Detection" && project.title !== "Accelerating Artificial Bee Colony Optimization Algorithm" && project.title !== "Remote Garden Monitor" && project.title !== "Ultimate Texas Hold'em Game on Nexys A7 FPGA" && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      {project.media.type === 'video' ? <FaPlay className="text-blue-500" /> : <FaImage className="text-blue-500" />}
                      Demo
                    </h4>
                    <div className="relative rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                      {project.media.type === 'video' ? (
                        expandedVideos[project.title] ? (
                          <div className="relative">
                            <video 
                              className="w-full h-96 object-contain bg-gray-900"
                              controls
                              autoPlay
                            >
                              <source src={project.media.src} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                            <button
                              onClick={() => toggleVideo(project.title)}
                              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-all duration-300 shadow-lg"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <div className="relative h-64 bg-gray-900 flex items-center justify-center cursor-pointer group" onClick={() => toggleVideo(project.title)}>
                            <div className="text-center">
                              <div className="w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                                <FaPlay className="text-white text-2xl ml-1" />
                              </div>
                              <p className="text-white text-lg font-medium">Click to Watch Demo</p>
                              <p className="text-gray-300 text-sm mt-2">{project.media.alt}</p>
                            </div>
                          </div>
                        )
                      ) : (
                        <div className="relative h-64">
                          <Image
                            src={project.media.src}
                            alt={project.media.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )}
                      {project.media.caption && (
                        <div className="p-4 bg-gray-50 border-t">
                          <p className="text-sm text-gray-600 text-center">{project.media.caption}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Paper Link for DeepFake Detection */}
                {project.title === "Deepfake Image Detection" && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      📄 Paper
                    </h4>
                    <div className="flex justify-center">
                      <a
                        href="/papers/DeepFake Detection Paper.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 text-lg font-medium shadow-lg hover-lift"
                      >
                        📄 View Research Paper
                      </a>
                    </div>
                  </div>
                )}

                {/* Paper Link for Ant Colony Optimization */}
                {project.title === "Accelerating Artificial Bee Colony Optimization Algorithm" && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      📄 Paper
                    </h4>
                    <div className="flex justify-center">
                      <a
                        href="/papers/Accelerating ABC Algorithm.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 text-lg font-medium shadow-lg hover-lift"
                      >
                        📄 View Research Paper
                      </a>
                    </div>
                  </div>
                )}

                {/* Paper Link for Remote Garden Monitor */}
                {project.title === "Remote Garden Monitor" && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      📄 Writeup
                    </h4>
                    <div className="flex justify-center">
                      <a
                        href="/papers/Remote Garden Monito Writeup.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 text-lg font-medium shadow-lg hover-lift"
                      >
                        📄 View Project Writeup
                      </a>
                    </div>
                  </div>
                )}

                {/* Technologies Used */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="skill-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3">
                        <span className="text-blue-500 mt-2 text-lg">•</span>
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
