import React from 'react';
import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Education } from './components/Education.js';
import { Interests } from './components/Interests.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#0a0f1d] text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Interests />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
