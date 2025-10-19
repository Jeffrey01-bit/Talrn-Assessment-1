import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const location = useLocation();
  
  const getPageName = () => {
    const path = location.pathname;
    const pageNames = {
      '/hiring-guide': 'Guide to Hiring devs',
      '/job-template': 'Job Template',
      '/interview-questions': 'Interview Questions',
      '/common-mistakes': 'Common Mistakes',
      '/book-meeting': 'Book a meeting',
      '/chat-expert': 'Chat with an expert'
    };
    return pageNames[path] || 'Page';
  };

  return (
    <div className="not-found-page">
      <div className="breadcrumb">
        ← <Link to="/">Home</Link> / <Link to="/find-dev">Developers</Link> / <span style={{color: '#666'}}>{getPageName()}</span>
      </div>
      
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist.</p>
      </div>
    </div>
  );
};

export default NotFound;