import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="/images/AugmntX-Logo.png" alt="AugmntX" style={{height: '40px'}} />
        </div>
        <nav className="nav">
          <a href="https://augmntx.com/why" target="_blank" rel="noopener noreferrer" className="nav-link">Why</a>
          <div className="industries-dropdown">
            <a href="#" className="nav-link">Industries ▼</a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Travel</a>
              <a href="#" className="dropdown-item">Automotive</a>
              <a href="#" className="dropdown-item">Banking</a>
              <a href="#" className="dropdown-item">Capital Markets</a>
              <a href="#" className="dropdown-item">Healthcare</a>
              <a href="#" className="dropdown-item">Digital Commerce</a>
              <a href="#" className="dropdown-item">View all</a>
            </div>
          </div>
          <Link to="/find-dev" className="nav-link">Find Dev</Link>
          <Link to="/" className="nav-link">Remote Jobs</Link>
          <Link to="/hire-dev" className="nav-link hire-dev-btn" target="_blank">Hire Dev</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;