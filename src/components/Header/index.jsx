import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";
import { FaBars } from "react-icons/fa";
import _ from "lodash";

export default function Index() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const headerRef = useRef(null);
  const [showLinks, setShowLinks] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        setShowLinks(false);
      }
    };
    console.log(windowSize);
    // Vérifier si la taille de la fenêtre est inférieure à 768 avant d'ajouter l'écouteur d'événement.
    if (windowSize < 768) {
      console.log("scroll");
      window.addEventListener("scroll", handleScroll);
    }
    // Le nettoyage de l'effet retirera l'écouteur d'événement lors du démontage du composant.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowSize]);
  useEffect(() => {
    setShowLinks(windowSize > 768);
  }, [windowSize]);

  const toggleLinks = () => setShowLinks(!showLinks);
  const menuItems = [
    "About",
    "Compétences",
    "Projets",
    "Challenges",
    "Contact",
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`flex-column flex-md-row h-100 ${styles.header} ${
          showLinks ? styles["header--active"] : ""
        }`}
      >
        <nav className={` ${styles.navbar}`}>
          <ul
            className={`${styles.links}  d-flex flex-column flex-md-row h-100 gap-5 align-items-end `}
          >
            {menuItems.map((text, i) => (
              <li key={i} className={`px-md-0 fs-4  `}>
                <a
                  href={`#${_.deburr(text).toLowerCase()}`}
                  className={` text-dark  text-decoration-none`}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <button
        className={`nav-toggle d-md-none mt-5 d-flex justify-content-center   ${
          styles.hamburger
        } ${showLinks ? styles["hamburger--active"] : ""}`}
        onClick={toggleLinks}
      >
        <FaBars />
      </button>
    </>
  );
}
