import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Avatar from './Avatar'; // Added import
import { github, linkdien, codechef, leetcode } from '../constant.js';

const DottedText = ({ text }) => {
  const letters = text.split('');
  
  return (
    <div className="pixelated-text">
      {letters}
    </div>
  );
};

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };


  return (
    <section id="home" className="h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute left-1/3 top-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-[#202020] to-transparent opacity-30 blur-xl"
          animate={{ 
            x: [0, 10, 0], 
            y: [0, -10, 0],
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute right-1/4 bottom-1/3 w-64 h-64 rounded-full bg-gradient-to-bl from-[#252525] to-transparent opacity-20 blur-xl"
          animate={{ 
            x: [0, -15, 0], 
            y: [0, 15, 0],
            scale: [1, 1.03, 1] 
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>
      
      {/* Nothing-styled top bar */}
      <div className="absolute top-0 left-0 right-0 bg-primary bg-opacity-50 flex justify-between items-center px-6 py-1 border-b border-muted border-opacity-10">
        <div className="font-mono text-xs text-muted">{formatTime(currentTime)}-{formatDate(currentTime)}</div>
        <div className="font-mono text-xs text-muted">~NRUSIMHA SRI GANESH K</div>
      </div>
      
      <div className="container-custom"> {/* Main container for hero content */}
        
        {/* Avatar Element - Added Here */}
        <div className="hidden md:block absolute top-1/2 right-20 lg:right-32 transform -translate-y-1/2 z-10">
          <Avatar />
        </div>

        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={childVariants} className="mb-4">
            <div className="inline-block w-12 h-[1px] bg-muted mr-4 align-middle"></div>
            <span className="text-muted text-sm font-mono">PORTFOLIO </span>
          </motion.div>
          
          {/* Nothing-inspired headline with dotted/pixel effect */}
          <motion.h1 
            variants={childVariants}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            <div className="mb-2 font-mono text-sm tracking-wider text-muted">HELLO, I'M</div>
            <div className="nothing-headline font-mono tracking-wide">
              <DottedText text="SRI GANESH K" />
            </div>
            <div className="mt-3 text-gradient">Tech Enthusiast & Developer</div>
          </motion.h1>
          
          <motion.p 
            variants={childVariants}
            className="text-muted text-lg md:text-xl mb-10 max-w-xl"
          >
            Solving real-world problems through innovative solutions. 
            Eager to apply technical expertise and creativity in dynamic environments.
          </motion.p>
          
          {/* Social media and resume section */}
          <motion.div 
            variants={childVariants}
            className="flex flex-wrap gap-6 mb-12"
          >
            <a href="https://github.com/sri-ganeshk" target="_blank" rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm text-muted hover:text-light transition-colors">
              <span className="w-5 h-5 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5" dangerouslySetInnerHTML={{ __html: github }} />
              GITHUB
            </a>
            
            <a href="https://leetcode.com/u/sri_2498" target="_blank" rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm text-muted hover:text-light transition-colors">
              <span className="w-5 h-5 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5 opacity-70 hover:opacity-100 transition-opacity" dangerouslySetInnerHTML={{ __html: leetcode }} />
              LEETCODE
            </a>
            
            <a href="https://www.codechef.com/users/s_2498" target="_blank" rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm text-muted hover:text-light transition-colors">
              <span className="w-5 h-5 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5 opacity-70 hover:opacity-100 transition-opacity" dangerouslySetInnerHTML={{ __html: codechef }} />
              CODECHEF
            </a>
            
            <a href="https://www.linkedin.com/in/sri-ganesh-k-5706ab269/" target="_blank" rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm text-muted hover:text-light transition-colors">
              <span className="w-5 h-5 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5" dangerouslySetInnerHTML={{ __html: linkdien }} />
              LINKEDIN
            </a>
          </motion.div>
          
          <motion.div 
            variants={childVariants}
            className="flex flex-wrap gap-5"
          >
            <a href="#experience" className="nothing-btn group">
              VIEW EXPERIENCE
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href={import.meta.env.VITE_RESUME_URL || "/SRI_GANESH_Resume.pdf"} target="_blank" rel="noopener noreferrer" className="nothing-btn">
              RESUME
              <Download className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      
    </section>
  );
};

export default Hero;