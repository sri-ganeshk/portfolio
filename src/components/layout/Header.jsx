import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a 
          href="#home"
          className="text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SRI GANESH K
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <motion.li 
                key={link.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={link.href} 
                  className="text-gray-300 hover:text-accent-secondary hover:neon-text transition-all duration-300"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Nav Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'tween' }}
          className="md:hidden fixed top-16 right-0 w-3/4 h-screen bg-black bg-opacity-95 backdrop-blur-lg"
        >
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ scale: 1.1, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={link.href} 
                    className="text-xl text-gray-300 hover:text-accent-secondary hover:neon-text transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;