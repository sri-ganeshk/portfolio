import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeRedirect from './components/ResumeRedirect.tsx';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Education from './components/Education.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Loader from './components/Loader.tsx';
import { Toaster } from 'sonner';

function App(): React.ReactElement {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<ResumeRedirect />} />
        <Route
          path="/*"
          element={
            <AnimatePresence>
              {loading ? (
                <Loader key="loader" />
              ) : (
                <motion.div
                  key="app"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-primary text-accent min-h-screen"
                >
                  <Header />
                  <main>
                    <Hero />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Education />
                    <Contact />
                  </main>
                  <Footer />
                </motion.div>
              )}
            </AnimatePresence>
          }
        />
      </Routes>
      <Toaster
        position="top-right"
        theme="dark"
        duration={3000}
        toastOptions={{
          style: {
            background: '#111',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#f5f5f5',
            fontFamily: 'monospace',
            fontSize: '0.8rem',
          },
        }}
      />
    </Router>
  );
}

export default App;
