import React, { useState, useEffect } from 'react';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>

      {scrolled && (
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Coba cari 'Tolong menolong'"
          />
          <button className="search-button">
            <span role="img" aria-label="search">🔍</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;