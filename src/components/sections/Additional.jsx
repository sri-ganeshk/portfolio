import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FiCode } from 'react-icons/fi';

const Additional = () => {
  const skills = [
    "React Native", "React.js", "Next.js", "Express.js", "Node.js", "Python", 
    "C++", "JavaScript", "TypeScript", "SQL", "Prisma", "MongoDB", "DynamoDB", 
    "PostgreSQL", "AWS Lambda", "REST APIs", "WebSockets", "Git", "BeautifulSoup", 
    "Google Gemini API", "Tailwind CSS", "HTML", "CSS", "EJS"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="additional" className="section-padding bg-gradient-to-b from-primary to-secondary">
      <div className="container mx-auto">
        <SectionHeading title="Technical Skills" />
        
        <div className="glass-card p-8 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-accent-primary opacity-5 blur-[80px]"></div>
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-accent-secondary opacity-5 blur-[80px]"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white text-3xl"
              >
                <FiCode />
              </motion.div>
            </div>
            
            <motion.h3
              className="text-xl md:text-2xl font-bold text-center mb-8 text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Proficient in a wide range of technologies
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="px-4 py-2 rounded-full bg-black bg-opacity-50 border border-gray-700 hover:border-accent-secondary hover:text-accent-secondary transition-colors duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Additional;