import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/images/augmntxlogo.png" alt="AugmntX" style={{height: '40px'}} />
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.augmntx.app&hl=en-US" target="_blank" rel="noopener noreferrer" className="google-play-btn">
              <img src="/images/play_store.svg" alt="Get it on Google Play" style={{height: '40px'}} />
            </a>
          </div>
          
          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Tech Stack</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>AugmntX</h3>
            <ul>
              <li><a href="#">View Profiles</a></li>
              <li><a href="#">Discover</a></li>
              <li><a href="#">On Demand Talent</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Augmentation Data</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">Email Opt-Out</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Vendor</h3>
            <ul>
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Vendor Login</a></li>
              <li><a href="#">Post Job</a></li>
              <li><a href="#">Remote Jobs</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div>© 2022 - 2025 AugmntX - Labor Omnia Vincit ⚡ by <a href="#" style={{color: 'var(--bs-primary)'}}>SuperLabs</a></div>
          <div className="footer-links">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;