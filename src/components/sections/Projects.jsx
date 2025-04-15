import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "FitBill",
      description: "A cross-platform Gym Management System for real-time customer membership management, attendance tracking, and financial monitoring.",
      techStack: ["React Native", "Express.js", "Prisma", "SQL", "AWS Lambda"],
      features: [
        "Automated membership renewal alerts",
        "Daily check-in/check-out tracking",
        "Revenue & expense dashboards",
        "Responsive mobile UI optimized for real-time usage",
        "Supports hundreds of daily active users"
      ],
      image: "/assets/images/fitbill.jpg" // This is a placeholder, you'll need to add actual images
    },
    {
      id: 2,
      title: "Student Attendance Tracking System",
      description: "A serverless attendance tracking system built with Python and deployed on AWS Lambda.",
      techStack: ["AWS Lambda", "Python", "WebSocket", "DynamoDB"],
      features: [
        "BeautifulSoup for real-time HTML parsing",
        "Handles ~3,000 unique daily users",
        "Processes 10,000+ requests/day at zero cost",
        "Average response time of 1.5-2 seconds",
        "Real-time data updates"
      ],
      image: "/assets/images/attendance.jpg" // This is a placeholder
    },
    {
      id: 3,
      title: "FilmSphere",
      description: "A dynamic web platform that allows users to curate and structure courses on any topic in an organized and interactive format.",
      techStack: ["Next.js", "Prisma", "Google Gemini API"],
      features: [
        "Automatic generation of flashcards and notes",
        "On-the-fly Q&A and quizzes",
        "AI-powered content generation",
        "Personalized learning experiences",
        "Real-time responsiveness"
      ],
      image: "/assets/images/filmsphere.jpg" // This is a placeholder
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-secondary to-primary">
      <div className="container mx-auto">
        <SectionHeading title="My Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card overflow-hidden group cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              {/* Project Image Container */}
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white text-5xl font-bold">
                  {project.title.slice(0, 2)}
                </div>
                <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                {/* Project Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="w-10 h-1 bg-accent-secondary mt-2"></div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-5">
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-black bg-opacity-50 text-accent-secondary border border-accent-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-accent-primary hover:text-accent-secondary transition-colors"
                  >
                    View Details
                  </motion.button>
                  <div className="flex space-x-3">
                    <motion.a 
                      href="#" 
                      whileHover={{ y: -3 }}
                      className="text-gray-400 hover:text-accent-secondary"
                    >
                      <FiGithub size={18} />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      whileHover={{ y: -3 }}
                      className="text-gray-400 hover:text-accent-secondary"
                    >
                      <FiExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Project Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
              onClick={() => setActiveProject(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-secondary w-full max-w-3xl rounded-lg overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="h-48 md:h-64 bg-gradient-to-br from-accent-primary to-accent-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-4xl font-bold text-white">{activeProject.title}</h2>
                  </div>
                  <button 
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white"
                    onClick={() => setActiveProject(null)}
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{activeProject.description}</p>
                  
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <ul className="list-disc pl-5 mb-6 text-gray-300 space-y-1">
                    {activeProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-bold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeProject.techStack.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-sm px-3 py-1 rounded-full bg-black bg-opacity-50 text-accent-secondary border border-accent-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-end space-x-4">
                    <motion.a 
                      href="#" 
                      className="flex items-center space-x-2 text-white px-4 py-2 rounded-md bg-accent-primary hover:bg-opacity-80 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub /> <span>Source Code</span>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="flex items-center space-x-2 text-white px-4 py-2 rounded-md bg-accent-secondary hover:bg-opacity-80 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink /> <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;