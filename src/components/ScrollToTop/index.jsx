import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Affiche le bouton lorsque l'utilisateur fait défiler la page
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Fonction pour faire défiler vers le haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="btn btn-primary scroll-to-top-button"
          onClick={scrollToTop}
        >
          <span>&#8593;</span>
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
