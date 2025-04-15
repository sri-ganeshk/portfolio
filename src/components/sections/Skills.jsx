import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const Skills = () => {
  const skills = [
    { name: "React Native", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Express.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "C++", level: 70 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "SQL", level: 75 },
    { name: "Prisma", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "DynamoDB", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "AWS Lambda", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: "WebSockets", level: 75 },
    { name: "Git", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "HTML/CSS", level: 90 },
  ];

  const technicalSkills = skills.slice(0, 10);
  const otherSkills = skills.slice(10);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="section-padding bg-primary">
      <div className="container mx-auto">
        <SectionHeading title="My Skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div key={index} variants={skillVariants}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-accent-secondary">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                      style={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Other Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Other Skills</h3>
            <div className="space-y-6">
              {otherSkills.map((skill, index) => (
                <motion.div key={index} variants={skillVariants}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-accent-secondary">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                      style={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Tech Cloud */}
          <motion.div 
            className="col-span-1 md:col-span-2 mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="glass-card p-8 text-center">
              <h3 className="text-2xl font-bold mb-6 text-white">Technologies I Work With</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 rounded-full bg-black bg-opacity-50 border border-gray-700 text-gray-300"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: 'rgba(93, 63, 211, 0.2)',
                      borderColor: '#5D3FD3' 
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;