import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FiBookOpen, FiAward } from 'react-icons/fi';

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "Vignan's Institute of Information Technology",
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering (CSE)",
      period: "2022 - 2026",
      icon: <FiBookOpen />
    },
    {
      id: 2,
      institution: "Kendriya Vidyalaya No -2 SVN",
      degree: "10+2",
      field: "High School",
      period: "Completed",
      icon: <FiBookOpen />
    }
  ];
  
  const achievements = [
    { 
      id: 1, 
      title: "National Player in KV for Handball goalkeeper", 
      icon: <FiAward /> 
    },
    { 
      id: 2, 
      title: "2019 National & Indian National Mathematics Olympiad (INMO) Regionalist", 
      icon: <FiAward /> 
    },
    { 
      id: 3, 
      title: "Participated in Hackathon conducted by VIIT ACM Chapter", 
      icon: <FiAward /> 
    },
  ];

  return (
    <section id="education" className="section-padding bg-primary">
      <div className="container mx-auto">
        <SectionHeading title="Education & Achievements" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
              <FiBookOpen className="mr-3 text-accent-secondary" /> Education
            </h3>
            
            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-accent-primary to-accent-secondary z-10">
                    {item.icon}
                  </div>
                  <div className="glass-card p-6 ml-2">
                    <h4 className="text-xl font-bold text-white mb-1">{item.institution}</h4>
                    <p className="text-accent-secondary mb-2">{item.degree} · {item.field}</p>
                    <p className="text-gray-400">{item.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
              <FiAward className="mr-3 text-accent-secondary" /> Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="glass-card p-6 border-l-4 border-accent-primary hover:border-accent-secondary transition-colors duration-300"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 text-accent-secondary text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Additional Certifications/Activities could go here */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;