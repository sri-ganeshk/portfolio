import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import data from '../data.json';

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
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
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {data.experience.map((exp, i) => (
            <motion.div
              key={i}
              className={`relative border-l border-muted border-opacity-30 pl-6 md:pl-10 group ${
                i === data.experience.length - 1 ? 'pb-4' : 'pb-12'
              }`}
              variants={itemVariants}
            >
              <div className="absolute w-4 h-4 rounded-full bg-primary border-[2px] border-muted border-opacity-50 -left-[8.5px] top-1.5 group-hover:border-light transition-colors duration-300 z-10"></div>
              <div className="absolute w-4 h-4 rounded-full bg-light opacity-0 scale-50 group-hover:scale-[1.8] group-hover:opacity-20 -left-[8.5px] top-1.5 transition-all duration-500 z-0 pointer-events-none"></div>

              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 mt-1">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-light group-hover:text-white transition-colors">{exp.role}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm md:text-base text-muted mt-2 sm:gap-4">
                    <span className="font-medium text-light text-opacity-90">{exp.company}</span>
                    <span className="hidden sm:inline w-1 h-1 rounded-full bg-muted opacity-50"></span>
                    <span className="opacity-80 mt-1 sm:mt-0">{exp.location}</span>
                  </div>
                </div>
                <span className="text-xs md:text-sm font-mono text-light bg-light bg-opacity-5 border border-light border-opacity-10 px-3 py-1.5 rounded-full inline-block mt-3 md:mt-0 w-max shrink-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3 mt-4 md:mt-6">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start text-muted text-sm md:text-base group-hover:text-opacity-100 transition-opacity">
                    <span className="text-light opacity-40 mr-3 mt-1.5 text-xs group-hover:text-opacity-80 transition-opacity">▹</span>
                    <span className="leading-relaxed opacity-90">{resp}</span>
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
