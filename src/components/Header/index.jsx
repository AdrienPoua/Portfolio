import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { FaBars } from "react-icons/fa";
import _ from "lodash";

export default function Index() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  const [showNavbar, setShowNavbar] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      // Mettez à jour la taille de la fenêtre lors du redimensionnement
      setWindowSize({ width: window.innerWidth });
      
      // Mettez à jour également l'état showNavbar en fonction de la taille de la fenêtre
      setShowNavbar(window.innerWidth > 768);
    };

    // Ajoutez un écouteur d'événement pour le redimensionnement de la fenêtre
    window.addEventListener("resize", handleResize);

    // Retirez l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleLinks = () => setShowNavbar(!showNavbar);

  const menuItems = [
    "About",
    "Compétences",
    "Projets",
    "Challenges",
    "Contact",
  ];

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mettez à jour isFixed en fonction du défilement et de la largeur de la fenêtre
      setIsFixed(window.scrollY > 800 && windowSize.width > 768);
    };

    // Ajoutez un écouteur d'événement pour le défilement
    window.addEventListener("scroll", handleScroll);

    // Retirez l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowSize]); // Incluez windowSize comme dépendance

  return (
    <header
      className={`d-flex flex-c justify-content-end bg-white  w-100 ${
        isFixed ? "position-fixed z-3 border-bottom border-1 border-dark" : ""
      }`}
    >
      <button
        className={`nav-toggle d-md-none mt-5 d-flex justify-content-center ${
          styles.hamburger
        } ${showNavbar ? styles["hamburger--active"] : ""}`}
        onClick={toggleLinks}
      >
        <FaBars />
      </button>
      <nav
        className={`h-100 d-flex flex-column flex-md-row ${
          showNavbar ? styles["navbar--active"] : ""
        } ${styles.navbar}`}
      >
        <ul
          className={`${styles.links}  d-flex flex-column flex-md-row h-100 gap-5 align-items-end `}
        >
          {menuItems.map((text, i) => (
            <li key={i} className={`px-md-0 fs-4`}>
              <a
                href={`#${_.deburr(text).toLowerCase()}`}
                className={`text-dark text-decoration-none`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
