import { useState, useContext, createContext } from 'react';
import React from 'react';
import Landing from './sections/landing';
import About from './sections/about'
import Footer from './sections/Footer';
import Projects from './sections/Projects';
import Fun from './sections/Fun';
import Skills from './sections/skills/Index';
export const Context = createContext();
export default function App() {
  const [language, setLanguage] = useState(true);

  return (
    <>
      <Context.Provider value={[language, setLanguage]}>
        <Landing />
        <About />
        <Skills/>
        <Projects/>
        <Fun/>
        <Footer/>
      </Context.Provider>
    </>
  );
}
