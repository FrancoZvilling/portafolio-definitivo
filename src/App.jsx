import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WorkPage from './pages/WorkPage';

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      <div className="relative z-10 w-full bg-gradient-to-b from-transparent to-space-900/90">
        <About />
        <Projects />
        <Contact />

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-space-900">
          <p>© {new Date().getFullYear()} {t('footer.text')}</p>
        </footer>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen text-white bg-space-900 selection:bg-space-accent/30 selection:text-white">
        <StarBackground />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:category" element={<WorkPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
