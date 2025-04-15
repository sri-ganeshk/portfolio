import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Additional from './components/sections/Additional';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ParticleBackground from './components/ui/ParticleBackground';
import Loader from './components/ui/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Additional />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;