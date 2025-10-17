import React from 'react';
import './JobDetail.css';

const JobDetail = () => {
  return (
    <div className="job-detail-page">
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
            <a href="#" className="nav-link">Find Dev</a>
            <a href="https://augmntx.com/remote-jobs" target="_blank" rel="noopener noreferrer" className="nav-link">Remote Jobs</a>
            <a href="https://augmntx.com/hire" className="hire-btn">Hire Dev</a>
            <a href="https://augmntx.com/admin/auth/login" target="_blank" rel="noopener noreferrer" className="nav-link">Login</a>
          </nav>
        </div>
      </header>

      <div className="breadcrumb">
        ← <a href="#">Home</a> / <a href="#">Jobs</a> / AX271CJ7593
      </div>

      <div className="job-detail-container">
        <div className="job-content">
          <div className="job-detail-header">
            <h1 className="job-title">Senior Full Stack<br/>Developer</h1>
            <button className="share-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
              </svg>
            </button>
          </div>

          <div className="job-meta">
            <span>📋 Contract</span>
            <span>•</span>
            <span>🌍 World Wide</span>
            <span>•</span>
            <span>🏠 Remote</span>
            <span>•</span>
            <span>⏱ 5+ years</span>
          </div>

          <div className="skills-section">
            <div className="skills-content">
              <h3>Mandatory Technical Skills:</h3>
              <div className="skills-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">REST</span>
              </div>
            </div>
            <div className="job-sidebar">
              <div className="match-circle">
                <div className="circle"></div>
                <span className="match-text">Match %<br/>unavailable</span>
              </div>
              <button className="apply-btn-sidebar">Apply ✈</button>
            </div>
          </div>

          <div className="description-section">
            <h3>Job Description</h3>
            <h4>What you'll do</h4>
            <p>Collaborate closely with the SRE team to address and remedy incoming issues, develop incremental features and functionality, and help maintain our technology stack for the products that we deliver across both frontend and backend technologies</p>
            <p>Work with our Product and Delivery Managers to regularly refine the definition of the work in the product backlog, contributing expertise and gaining clarity when needed</p>
            <p>Provide feedback on designs for completeness, implementation effort, and feasibility</p>
            <p>Collaborate with the Product team to plan future sprints by contributing to story definition, providing work estimates, and regularly identifying technical dependencies and blockers</p>
            <p>Understand and advocate for ongoing sprint goals and help motivate our teams to finish sprints on time and with minimal technical debt</p>
            <p>Review your team members' code submissions to ensure our work meets the needs of the project in terms of quality, correctness, consistency, and performance</p>
            <p>Participate in regular shares with client stakeholders on project progress and delivered features and functionality</p>
            <p>Support the engineering department by sharing the technical knowledge you learn with your project teams</p>
            <p>Identify when your project team members are stuck on a technical challenge and offer support</p>
            <p>Produce documentation on methods, decisions, technical approaches, and other contexts to improve the developer experience on our projects</p>
            
            <h4>Requirements</h4>
            <p>5+ years of Full Stack experience with expertise in Node.js and/or Python</p>
            <p>Deep appreciation of the design practice and can protect the integrity of design intent without compromising fidelity</p>
            <p>Responds positively to both professional and project-based feedback and can help the team adapt to changing priorities within fast-paced projects</p>
            <p>Organized, self-motivated, and comfortable advocating for your needs and the needs of the project</p>
            <p>You have experience building full-stack applications across both the frontend and service layer using modern Typescript frameworks (ie. React, React Native, Nest)</p>
            <p>You have experience creating both REST and GraphQL APIs that enable client applications to persist, process, and retrieve data from various types of databases (ie. PostgreSQL, MySQL, MongoDB, DynamoDB)</p>
            <p>You are excited to learn new technologies and adopt new solutions to deliver amazing products and further your depth of knowledge as an engineer and technologist</p>
            <p>You have contributed to technical design discussions and helped evaluate different technical solutions to influence architectural decision-making</p>
            <p>You are comfortable following general Agile delivery methodologies and participating in regularly scheduled standups and ceremonies (we do our best to prioritize progress over process)</p>
            
            <h4>Nice to haves</h4>
            <p>Experience using ML models and AI services to power real-live products (ie. Google Cloud AI, Azure AI, AWS AI or Bedrock, GPT, Dialogflow, Claude, LangChain)</p>
            <p>Experience implementing ML algorithms with common frameworks in end-to-end applications (ie. TensorFlow, Synaptic, ML5.js, Spark ML)</p>
            <p>Experience in an agency setting</p>
            
            <p className="job-id">AXJSK257</p>
            
            <div className="job-details">
              <div className="detail-row">
                <span className="detail-label">Interview Rounds:</span>
                <span>3</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Valid Through:</span>
                <span>30th March 2026</span>
              </div>
            </div>
            
            <div className="bottom-section">
              <button className="apply-btn">Apply ✈</button>
              <div className="match-circle">
                <div className="circle"></div>
                <span className="match-text">Match %<br/>unavailable</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default JobDetail;