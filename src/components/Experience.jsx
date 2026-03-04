import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import data from '../data.json';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="section-padding bg-secondary bg-opacity-30">
      <div className="container-custom" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">CAREER</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <motion.div 
          className="space-y-12 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {data.experience.map((exp, i) => (
            <motion.div 
              key={i} 
              className="relative border-l-2 border-muted border-opacity-30 pl-6 md:pl-8 pb-4"
              variants={itemVariants}
            >
              <div className="absolute w-4 h-4 bg-primary border-2 border-light rounded-full -left-[9px] top-1"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <span className="text-sm font-mono text-light bg-light bg-opacity-10 px-3 py-1 rounded inline-block mt-2 md:mt-0 w-max">
                  {exp.period}
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center text-muted mb-4 gap-2 sm:gap-4">
                <span className="font-medium text-light text-opacity-90">{exp.company}</span>
                <span className="hidden sm:inline">•</span>
                <span>{exp.location}</span>
              </div>
              
              <ul className="space-y-3 mt-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start text-muted">
                    <span className="text-light opacity-50 mr-3 mt-1.5 text-xs">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
