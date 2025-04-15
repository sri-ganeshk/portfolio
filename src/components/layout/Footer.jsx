import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-black bg-opacity-70 backdrop-blur-lg py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Sri Ganesh K</h3>
            <p className="text-gray-400">
              Tech enthusiast skilled at solving real-world problems through innovative solutions.
            </p>
            <div className="flex space-x-4 pt-3">
              <motion.a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-gray-400 hover:text-accent-primary text-xl"
              >
                <FiGithub />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-gray-400 hover:text-accent-primary text-xl"
              >
                <FiLinkedin />
              </motion.a>
              <motion.a 
                href="mailto:sriganesh.kollimarla@gmail.com" 
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-gray-400 hover:text-accent-primary text-xl"
              >
                <FiMail />
              </motion.a>
              <motion.a 
                href="tel:+916303798641" 
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-gray-400 hover:text-accent-primary text-xl"
              >
                <FiPhone />
              </motion.a>
            </div>
          </div>
          
          {/* Middle */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-accent-secondary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <FiMail className="text-accent-secondary" />
                <span>sriganesh.kollimarla@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiPhone className="text-accent-secondary" />
                <span>+91 6303798641</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>© {currentYear} Sri Ganesh K. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;