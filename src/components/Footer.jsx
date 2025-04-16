import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary py-12 border-t border-muted border-opacity-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <div className="flex items-center mb-2">
              <div className="w-[2px] h-6 bg-light mr-2"></div>
              <span className="font-mono text-lg tracking-wider">SRI GANESH K</span>
            </div>
            <p className="text-muted text-sm">
              Tech enthusiast building innovative solutions
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            <a href="#home" className="text-muted hover:text-light transition-colors">Home</a>
            <a href="#projects" className="text-muted hover:text-light transition-colors">Projects</a>
            <a href="#skills" className="text-muted hover:text-light transition-colors">Skills</a>
            <a href="#contact" className="text-muted hover:text-light transition-colors">Contact</a>
          </motion.div>
        </div>
        
        <div className="border-t border-muted border-opacity-10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted mb-4 md:mb-0"
          >
            © {currentYear} Sri Ganesh K. All rights reserved.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-4"
          >
            <a 
              href="https://github.com/sri-ganeshkcontiune" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-light transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.522 21.276 9.522 21.008C9.522 20.766 9.513 20.011 9.508 19.172C6.726 19.791 6.143 17.898 6.143 17.898C5.699 16.754 5.064 16.451 5.064 16.451C4.187 15.818 5.131 15.829 5.131 15.829C6.104 15.898 6.626 16.868 6.626 16.868C7.498 18.412 8.974 17.945 9.541 17.687C9.63 17.058 9.888 16.592 10.175 16.32C7.956 16.046 5.62 15.233 5.62 11.477C5.62 10.386 6.01 9.491 6.646 8.787C6.546 8.531 6.202 7.57 6.747 6.181C6.747 6.181 7.563 5.908 9.497 7.211C10.29 7.002 11.151 6.898 12.001 6.894C12.849 6.899 13.71 7.002 14.505 7.211C16.437 5.908 17.252 6.181 17.252 6.181C17.798 7.57 17.454 8.531 17.354 8.787C17.991 9.491 18.379 10.386 18.379 11.477C18.379 15.246 16.038 16.044 13.813 16.313C14.172 16.647 14.492 17.308 14.492 18.313C14.492 19.754 14.479 20.674 14.479 21.007C14.479 21.278 14.659 21.586 15.167 21.49C19.137 20.162 22 16.418 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
              </svg>
            </a>
            <a 
              href="https://leetcode.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-light transition-colors"
            >
              <span className="sr-only">LeetCode</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.102 17.933L14.29 16.505L7.592 22.227C7.29 22.483 6.678 22.591 6.301 22.227C5.917 21.863 5.997 21.415 6.301 21.158L13.016 15.435L11.203 14.007L4.055 20.476C3.585 20.904 2.829 21.098 2.117 20.476C1.404 19.854 1.225 18.793 2.117 18.045L9.391 11.564L7.592 10.136L2.117 14.721C1.221 15.478 0 15.092 0 13.8V3.509C0 2.313 1.13 1.854 2.117 2.709L16.102 14.007C17.458 15.15 17.458 16.79 16.102 17.933Z" fill="currentColor"/>
                <path d="M22.8434 9.9357C23.2764 10.2992 23.2764 10.8849 22.8434 11.2481L19.5559 13.9623C19.1229 14.3259 18.4329 14.3259 17.9999 13.9623L14.7124 11.2481C14.2794 10.8846 14.2794 10.2989 14.7124 9.9357L17.9999 7.22148C18.4329 6.85782 19.1226 6.85782 19.5556 7.22148L22.8431 9.9357H22.8434Z" fill="currentColor"/>
              </svg>
            </a>
            <a 
              href="https://www.codechef.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-light transition-colors"
            >
              <span className="sr-only">CodeChef</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3 2.55L11.1 2.65C10.8 3.15 10.7 3.35 10.6 3.65C10.5 4.2 10.7 4.65 11 5.2C11.5 6.45 11.9 7.4 11 8.6C10.9 8.75 9.4 9.1 9.2 9.25C8.8 9.65 8.6 10.1 8.7 10.65C8.9 11.6 9.7 11.8 10.3 12.5C10.5 12.7 10.7 13.15 10.5 13.35C10.3 13.55 10.1 13.25 10 13.15C9.4 12.7 8.8 12.45 8.1 12.6C7.3 12.8 7.2 13.7 7.3 14.4C7.35 14.85 7.4 15.35 7.6 15.75C7.8 16.15 8.1 16.35 8.5 16.65C9.1 17 9.45 17.5 9.45 18.25C9.4 18.35 9.4 18.45 9.35 18.55C9 18.55 8.85 18.25 8.65 18.15C7.95 17.65 7.4 17.15 6.45 17.05C5.5 17 4.55 17.55 4.2 18.5C4.15 18.65 4.15 18.85 4.05 18.85C3.95 18.85 3.9 18.6 3.85 18.4C3.7 17.65 3.7 16.9 3.9 16.15C4.25 14.85 5.55 13.75 6.95 14.05C7.2 14.1 7.45 14.2 7.65 14.3C7.85 14.4 8.15 14.7 8.35 14.55C8.55 14.4 8.45 14.1 8.4 13.9C8.35 13.35 8.25 12.85 8.4 12.3C8.55 11.75 8.95 11.7 9.4 11.7C9.7 11.7 10 11.85 10.2 12.05C10.45 12.35 10.55 12.75 10.95 12.85C11.65 13 11.75 12.15 11.85 11.7C11.95 11.2 11.95 10.65 12.05 10.15C12.2 9.35 12.8 9 13.55 9.2C14.65 9.5 15.55 8.75 16.3 8.05" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </a>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs text-muted mt-4 md:mt-0"
          >
            Last updated: {new Date("2025-04-16").toLocaleDateString()}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;