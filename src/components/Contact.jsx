import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Share2, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { github, linkdien } from '../constant.js';
import portfolioData from '../data.json';

const Contact = () => {
  const { personal } = portfolioData;
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    
    // Map form field names to state property names
    const stateMapping = {
      'name': 'name',
      'email': 'email',
      'message': 'message'
    };
    
    setFormData({
      ...formData,
      [stateMapping[fieldName] || fieldName]: fieldValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    // Format the current date and time in UTC as YYYY-MM-DD HH:MM:SS
    const now = new Date();
    const formattedDate = now.toISOString().replace('T', ' ').substring(0, 19);

    // EmailJS configuration
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    // Initialize EmailJS with your public key
    emailjs.init(publicKey);

    // Prepare form data for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: personal.email,
      date_time: formattedDate,
      user_login: 'sri-ganeshk' // could also use personal.links.github.split('/').pop()
    };

    emailjs.send(serviceId, templateId, templateParams)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setStatus(prev => ({ ...prev, submitted: false }));
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">GET IN TOUCH</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-xl font-medium mb-6"
            >
              Let's start a conversation
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-muted mb-8"
            >
              Have a project in mind? Want to discuss collaboration opportunities? 
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.div 
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="mr-4 p-2 border border-muted border-opacity-30">
                  <Mail className="w-6 h-6 text-light opacity-80" />
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Email</h4>
                  <a href={`mailto:${personal.email}`} className="text-muted hover:text-light transition-colors">
                    {personal.email}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="mr-4 p-2 border border-muted border-opacity-30">
                  <Phone className="w-6 h-6 text-light opacity-80" />
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Phone</h4>
                  <a href={`tel:${personal.mobile.replace(/\\s+/g, '')}`} className="text-muted hover:text-light transition-colors">
                    {personal.mobile}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="mr-4 p-2 border border-muted border-opacity-30">
                  <Share2 className="w-6 h-6 text-light opacity-80" />
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Connect</h4>
                  <div className="flex gap-3 mt-2">
                    {/* GitHub */}
                    <a href={personal.links.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                      <span className="sr-only">GitHub</span>
                      <span className="w-5 h-5 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5" dangerouslySetInnerHTML={{ __html: github }} />
                    </a>
                    
                    {/* LinkedIn */}
                    <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                      <span className="sr-only">LinkedIn</span>
                      <span className="w-5 h-5 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5" dangerouslySetInnerHTML={{ __html: linkdien }} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="bg-primary bg-opacity-40 border border-muted border-opacity-10 p-6">
              <h3 className="text-xl font-medium mb-6">Send a Message</h3>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-secondary bg-opacity-40 border border-muted border-opacity-30 p-3 text-light focus:outline-none focus:border-light"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-secondary bg-opacity-40 border border-muted border-opacity-30 p-3 text-light focus:outline-none focus:border-light"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-secondary bg-opacity-40 border border-muted border-opacity-30 p-3 text-light focus:outline-none focus:border-light"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className={`btn btn-primary w-full ${status.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {status.submitted && (
                <div className="mt-4 p-3 bg-green-500 bg-opacity-20 border border-green-500 text-green-300 text-center">
                  Message sent successfully!
                </div>
              )}
              
              {status.error && (
                <div className="mt-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 text-red-300 text-center">
                  {status.error}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;