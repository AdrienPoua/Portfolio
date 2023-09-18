import { useState, createContext } from 'react';
import React from 'react';
import Landing from './sections/Landing';
import About from './sections/About';
import Footer from './sections/Footer';
import Projects from './sections/Projects';
import Challenges from './sections/Challenges';
import Skills from './sections/Skills';
import Modale from './components/Modal';

export const languageContext = createContext('en');
export const modalContext = createContext();

export default function App() {
  const [language, setLanguage] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <languageContext.Provider value="en">
      <modalContext.Provider value={[isOpen, setIsOpen]}>
        <Modale />
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Challenges />
        <Footer />
      </modalContext.Provider>
    </languageContext.Provider>
  );
}
