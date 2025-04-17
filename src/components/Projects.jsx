import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "FitBill - Gym Management System",
      description: "A comprehensive cross-platform solution designed for modern gym businesses that streamlines membership management, attendance tracking, and financial operations. The system automatically sends timely membership renewal notifications, monitors daily facility usage patterns, and provides insightful financial analytics through intuitive dashboards, enabling gym owners to make data-driven decisions and optimize operational efficiency.",
      tech: ["React Native", "Express.js", "Prisma", "SQL", "AWS Lambda"],
      image: "/images/fitbill-preview.png",
      liveLink: "http://youtube.com/watch?v=Dbkf_2kh1ho",
      highlights: [
        "Automated membership renewal alerts",
        "Daily check-in/check-out tracking",
        "Financial dashboards",
        "Supports hundreds of daily active users"
      ]
    },
    {
      title: "Student Attendance Tracking System",
      description: "An innovative serverless attendance solution leveraging AWS Lambda and Python to deliver cost-effective, real-time attendance tracking for educational institutions. The system employs sophisticated HTML parsing techniques with BeautifulSoup to extract attendance data from various sources, processes it through a highly optimized pipeline, and delivers accurate, instantaneous results to thousands of users daily without incurring operational costs, making it an ideal solution for resource-constrained educational environments.",
      tech: ["AWS Lambda", "Python", "WebSocket", "DynamoDB", "BeautifulSoup"],
      image: "/images/attendance-preview.png",
      liveLink: "https://github.com/sri-ganeshk/Attendance_tracker",
      highlights: [
        "Handles ~3,000 unique daily users",
        "10,000+ requests/day at zero cost",
        "Avg response time of 1.5-2 seconds",
        "Real-time HTML parsing"
      ]
    },
    {
      title: "StudySphere – Curated Learning Platform",
      description: "An advanced educational platform that revolutionizes self-paced learning through AI-powered content organization and generation. StudySphere allows users to curate and structure courses on any topic with intelligent assistance, automatically generating customized flashcards, comprehensive notes, and interactive quizzes tailored to individual learning preferences. The integration with Google Gemini API enables sophisticated content summarization and knowledge extraction, creating a personalized learning experience that adapts to users' comprehension levels and learning styles.",
      tech: ["Next.js", "Prisma", "Google Gemini API", "TailwindCSS", "PostgreSQL"],
      image: "/images/studysphere-preview.png",
      liveLink: "https://hackthon-six.vercel.app/",
      highlights: [
        "Automatic flashcards & notes generation",
        "On-the-fly quizzes",
        "AI-powered content summarization",
        "Self-paced, structured learning"
      ]
    },
    {
      title: "Movie Review Platform",
      description: "A modern, fully responsive web application designed for movie enthusiasts to discover, review, and engage with film content. The platform leverages The Movie Database API to provide users with real-time access to a vast library of films, complete with detailed information and high-quality imagery. With a robust user authentication system using JWT tokens, the application delivers personalized experiences allowing users to create accounts, save favorites, and contribute their own reviews to the community. The intuitive interface, built with React and styled with Tailwind CSS, ensures a seamless viewing experience across all devices.",
      tech: ["React", "Tailwind CSS", "TMDB API", "MongoDB", "JWT", "Responsive Design"],
      image: "/images/movie-review-preview.png",
      liveLink: "https://movie-review-omega-seven.vercel.app/",
      highlights: [
        "Real-time movie data integration with TMDB API",
        "Secure JWT-based user authentication",
        "Intuitive and fully responsive design",
        "Personalized user experiences with saved preferences"
      ]
    },
    {
      title: "Pressure Cooker Whistle Counter",
      description: "An innovative Android application born from everyday necessity, designed to automate the mundane task of counting pressure cooker whistles during cooking. This offline-first app utilizes sophisticated audio processing algorithms to detect and count whistles in real-time using the device's microphone, without requiring an internet connection. With a focus on privacy, the application processes all audio data locally and on-the-fly without storing any recordings. The implementation includes custom sound analysis using Fast Fourier Transform (FFT) and Tarsos DSP library to accurately identify the distinctive whistle frequency pattern amid background noise, making cooking precision effortless for users.",
      tech: ["Java", "Kotlin", "FFT", "Tarsos DSP", "Spectrograms", "Android Media"],
      image: "/images/whistle-counter-preview.png",
      liveLink: "",
      highlights: [
        "Offline operation for areas with limited connectivity",
        "Privacy-focused with no data storage",
        "Real-time audio processing and frequency analysis",
        "Future ML integration for multi-cooker scenarios"
      ]
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">PORTFOLIO</h4>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Project selector - mobile version */}
          <motion.div 
            className="md:hidden w-full mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted">SELECT PROJECT</p>
              <div className="text-xs text-muted">{activeProject + 1}/{projects.length}</div>
            </div>
            <div className="flex overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`snap-start flex-shrink-0 w-[75%] mr-3 p-4 cursor-pointer transition-all duration-300 ${
                    activeProject === index 
                      ? "bg-secondary bg-opacity-50 border border-light border-opacity-20" 
                      : "bg-secondary bg-opacity-10 border border-muted border-opacity-10"
                  }`}
                  onClick={() => setActiveProject(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className={`font-medium text-sm mb-1 ${
                    activeProject === index ? "text-light" : "text-muted"
                  }`}>
                    {project.title.split(" - ")[0]}
                  </h3>
                  <p className="text-xs text-muted line-clamp-1">
                    {project.tech.slice(0, 3).join(", ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project selector - desktop version */}
          <motion.div 
            className="hidden md:block md:col-span-4" 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border-l border-muted ${
                  activeProject === index ? "border-opacity-100" : "border-opacity-20"
                } p-4 cursor-pointer transition-all duration-300 ${
                  activeProject === index ? "bg-secondary bg-opacity-30" : ""
                }`}
                onClick={() => setActiveProject(index)}
                whileHover={{
                  backgroundColor: "rgba(26, 26, 26, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                <h3 className={`font-medium text-sm mb-1 ${
                  activeProject === index ? "text-light" : "text-muted"
                }`}>
                  {project.title.split(" - ")[0]}
                </h3>
                <p className="text-xs text-muted line-clamp-1">
                  {project.tech.slice(0, 3).join(", ")}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Project details */}
          <motion.div 
            className="col-span-1 md:col-span-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeProject}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-secondary bg-opacity-20 p-4 md:p-6 border border-muted border-opacity-10"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">{projects[activeProject].title}</h3>
              <p className="text-sm md:text-base text-muted mb-4 md:mb-6 leading-relaxed">
                {projects[activeProject].description}
              </p>
              
              <div className="mb-4 md:mb-6">
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">KEY HIGHLIGHTS</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {projects[activeProject].highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-light opacity-50 mt-1">→</span>
                      <span className="text-xs md:text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs py-1 px-2 md:px-3 bg-primary border border-muted border-opacity-20 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {projects[activeProject].liveLink && (
                <div className="mt-6 md:mt-8 flex justify-center md:justify-end">
                  <a 
                    href={projects[activeProject].liveLink}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-mono text-xs inline-flex items-center px-5 py-2 md:px-6 md:py-2 border border-light hover:bg-light hover:bg-opacity-5 transition-all duration-300 group"
                  >
                    VIEW PROJECT
                    <svg className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;