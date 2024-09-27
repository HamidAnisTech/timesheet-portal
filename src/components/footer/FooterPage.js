import React from "react";
import "./FooterPage.css";
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 WABICARE LLC. All rights reserved.</p>
        <nav className="nav-list">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/career">Careers</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
