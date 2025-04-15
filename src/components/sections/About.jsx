import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCode, FiSmile } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { delay: custom * 0.2, duration: 0.6 } 
    }),
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-primary to-secondary">
      <div className="container mx-auto">
        <SectionHeading title="About Me" />
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left side */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Background animation */}
            <div className="relative">
              <div className="absolute -left-10 -top-10 w-72 h-72 bg-accent-primary rounded-full filter blur-[120px] opacity-10 animate-pulse-slow"></div>
              <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-accent-secondary rounded-full filter blur-[120px] opacity-10 animate-pulse-slow"></div>
              
              {/* About text */}
              <motion.div 
                className="glass-card p-8 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Tech Enthusiast & Problem Solver</h3>
                <p className="text-gray-300 mb-4">
                  I'm a passionate tech enthusiast with a knack for solving real-world problems through innovative solutions. 
                  My journey in technology has equipped me with skills in modern web and mobile development, cloud technologies, 
                  and system architecture.
                </p>
                <p className="text-gray-300">
                  With experience in building cross-platform applications, serverless architectures, and AI-powered platforms,
                  I'm always eager to apply my technical expertise and creativity in dynamic environments.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side */}
          <div 
            ref={ref}
            className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Cards */}
            {[
              { 
                icon: <FiCode />, 
                title: "Development", 
                text: "Experienced in React, React Native, Express.js and cloud technologies", 
                delay: 0 
              },
              { 
                icon: <FiAward />, 
                title: "Achievements", 
                text: "National Player in Handball and Mathematics Olympiad Regionalist", 
                delay: 1 
              },
              { 
                icon: <FiSmile />, 
                title: "Projects", 
                text: "Built real-world applications with thousands of daily active users", 
                delay: 2 
              },
              { 
                icon: <FiCode />, 
                title: "Tech Stack", 
                text: "Proficient in JavaScript, TypeScript, Python, and various databases", 
                delay: 3 
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                custom={card.delay}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="glass-card p-6 flex flex-col items-center text-center hover:border-accent-primary transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center mb-4 text-white text-2xl group-hover:animate-float">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                <p className="text-gray-400">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;