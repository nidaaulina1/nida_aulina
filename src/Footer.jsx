import React from "react";
import './App.css';  // Import file CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © 2024 Nature Company. NCentertaiment.
        </p>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
