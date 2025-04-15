import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0f] flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 mb-6"
        >
          <div className="w-full h-full rounded-full border-t-4 border-b-4 border-accent-primary animate-spin"></div>
        </motion.div>
        
        <motion.h2 
          className="text-2xl font-bold gradient-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SRI GANESH K
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Loader;