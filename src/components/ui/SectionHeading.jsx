import { motion } from 'framer-motion';

const SectionHeading = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold gradient-text">{title}</h2>
      <div className="mt-3 mx-auto w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
    </motion.div>
  );
};

export default SectionHeading;