import React, { useState, useEffect } from 'react';
import './Header.css';

const industries = [
  "Travel",
  "Automotive", 
  "Banking",
  "Capital Markets",
  "Healthcare",
  "Digital Commerce",
  "View all"
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <img src="/images/AugmntX-Logo.png" alt="AugmntX" style={{height: '40px'}} />
        </div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <a href="https://augmntx.com/why" target="_blank" rel="noopener noreferrer" className="nav-link">Why</a>
          <div className="industries-dropdown">
            <a href="#" className="nav-link">Industries ▼</a>
            <div className="dropdown-menu">
              {industries.map(industry => (
                <a key={industry} href="#" className="dropdown-item">{industry}</a>
              ))}
            </div>
          </div>
          <a href="#" className="nav-link">Find Dev</a>
          <a href="https://augmntx.com/remote-jobs" target="_blank" rel="noopener noreferrer" className="nav-link">Remote Jobs</a>
          <a href="https://augmntx.com/hire" className="hire-btn" style={{fontSize: '14px'}}>Hire Dev</a>
          <a href="https://augmntx.com/admin/auth/login" target="_blank" rel="noopener noreferrer" className="nav-link">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;