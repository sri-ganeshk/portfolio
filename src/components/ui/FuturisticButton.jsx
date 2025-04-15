import { motion } from 'framer-motion';

const FuturisticButton = ({ children, onClick, className }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-3 group ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-80 rounded-md blur-sm group-hover:blur-md transition-all duration-300"></span>
      <span className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></span>
      <span className="relative z-10 inline-block text-white font-medium">{children}</span>
    </motion.button>
  );
};

export default FuturisticButton;