import React, { useState, useEffect } from 'react';


const Search = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) { // Atur batas scroll yang diinginkan
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className={`search-bar ${isScrolled ? 'scrolled' : ''}`}>
      <input
        type="text"
        className="search-input"
        placeholder='Coba cari "Tolong menolong"'
      />
      <button className="search-button">
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16l4-4-4-4m8 8l-4-4 4-4"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
