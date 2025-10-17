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
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>For Developers</h3>
            <ul>
              <li><a href="#">Browse Jobs</a></li>
              <li><a href="#">Developer Resources</a></li>
              <li><a href="#">Salary Guide</a></li>
              <li><a href="#">Interview Prep</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>For Companies</h3>
            <ul>
              <li><a href="#">Hire Developers</a></li>
              <li><a href="#">Post a Job</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Enterprise</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 AugmntX. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="GitHub">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;