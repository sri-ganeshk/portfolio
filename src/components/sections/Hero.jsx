import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';
import FuturisticButton from '../ui/FuturisticButton';

const Hero = () => {
  const avatarRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!avatarRef.current) return;

      const { left, top, width, height } = avatarRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate distance from cursor to center of element
      const deltaX = (e.clientX - centerX) / 25;
      const deltaY = (e.clientY - centerY) / 25;
      
      // Apply 3D transform
      avatarRef.current.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-primary rounded-full filter blur-[150px] opacity-20"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-accent-secondary rounded-full filter blur-[150px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side text */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-accent-secondary font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 gradient-text neon-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Sri Ganesh K
            </motion.h1>
            <motion.div 
              className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-xl md:text-2xl font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <span>Tech Enthusiast & Problem Solver</span>
            </motion.div>
            <motion.p 
              className="text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Passionate about building innovative solutions to real-world problems. 
              Skilled in React Native, Express.js, and cloud technologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <FuturisticButton onClick={() => document.getElementById('contact').scrollIntoView()}>
                Get In Touch
              </FuturisticButton>
              <FuturisticButton onClick={() => document.getElementById('projects').scrollIntoView()}>
                View Projects
              </FuturisticButton>
            </motion.div>
            
            <motion.div 
              className="flex mt-8 gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-primary text-2xl"
                whileHover={{ y: -5, scale: 1.2 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-primary text-2xl"
                whileHover={{ y: -5, scale: 1.2 }}
              >
                <FiLinkedin />
              </motion.a>
              <motion.a 
                href="https://leetcode.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-primary text-2xl"
                whileHover={{ y: -5, scale: 1.2 }}
              >
                <FiCode />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right side Avatar */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              ref={avatarRef}
              className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-accent-primary animate-float"
              style={{ transition: 'transform 0.1s ease-out' }}
            >
              {/* Replace with your own image */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary opacity-90">
                <div className="w-full h-full flex items-center justify-center text-white text-9xl">
                  SG
                </div>
              </div>
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;