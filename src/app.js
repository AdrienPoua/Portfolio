import { useState, useContext, createContext } from 'react';
import React from 'react';
import styles from './assets/styles/resets.scss';
import Landing from './sections/landing';
import About from './sections/about'

export const Context = createContext();
export default function App() {
  const [language, setLanguage] = useState(true);

  return (
    <>
      <Context.Provider value={[language, setLanguage]}>
        <Landing />
        <About />
      </Context.Provider>
    </>
  );
}
