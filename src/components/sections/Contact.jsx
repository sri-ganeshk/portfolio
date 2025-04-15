import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import FuturisticButton from '../ui/FuturisticButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -left-40 bottom-0 w-96 h-96 bg-accent-primary rounded-full filter blur-[150px] opacity-10"></div>
      <div className="absolute -right-40 top-20 w-96 h-96 bg-accent-secondary rounded-full filter blur-[150px] opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <SectionHeading title="Contact Me" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out to me for any questions, opportunities, or just to say hi. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center mr-4">
                  <FiMail className="text-accent-secondary text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                  <a href="mailto:sriganesh.kollimarla@gmail.com" className="text-white hover:text-accent-secondary transition-colors">
                    sriganesh.kollimarla@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center mr-4">
                  <FiPhone className="text-accent-secondary text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                  <a href="tel:+916303798641" className="text-white hover:text-accent-secondary transition-colors">
                    +91 6303798641
                  </a>
                </div>
              </motion.div>
              
              <div className="flex items-center space-x-6 mt-12 pl-4">
                <motion.a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.2 }}
                  className="text-gray-400 hover:text-accent-primary text-2xl"
                >
                  <FiGithub />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.2 }}
                  className="text-gray-400 hover:text-accent-primary text-2xl"
                >
                  <FiLinkedin />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:border-accent-secondary text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:border-accent-secondary text-white"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 bg-black bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:border-accent-secondary text-white"
                    placeholder="Hi there, I'd like to talk about..."
                  />
                </div>
                
                <div>
                  <FuturisticButton className="w-full flex items-center justify-center">
                    {isSubmitting ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        <FiSend className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </FuturisticButton>
                  
                  {submitSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 bg-green-500 bg-opacity-20 border border-green-500 rounded text-green-400 text-center"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;