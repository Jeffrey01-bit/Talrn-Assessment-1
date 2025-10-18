import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './DeveloperProfile.css';

const DeveloperProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleSkillClick = (skillName) => {
    navigate(`/find-dev?skill=${encodeURIComponent(skillName)}`);
  };
  
  const handleDownloadPDF = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/images/Team Lead 7 years ,Fifadra J - AXO2263 - AugmntX.pdf';
    link.download = `${developer.name} - ${developer.id} - AugmntX.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHire = (e) => {
    e.preventDefault();
    // Add hire functionality here
    console.log(`Hiring ${developer.name}`);
  };
  
  const developerData = {
    'AXO2263': {
      name: 'Fifadra J',
      id: 'AXO2263',
      status: 'Active',
      title: 'Team Lead in Vasai',
      description: 'In depth Analysis of the business processes of the industry and can provide technology consultation. Expertise in building web application, stand alone scripts, research oriented work. Have expertise in django using python development framework. Have used most of the python libraries over the years. Have Worked in a company with analytics background. Have experience to develop application from scratch technically handling full stack role for my company. Have around eight years of experience developing software products. Have worked on various cloud platforms like Google Cloud Platform and Amazon web services. Carried out pivots as per the requirement during the product development cycle, used advanced technologies like apache spark and worked closely with business team. Strong logical and analytical skills. Strong and demonstrable problem solving and analytical skills',
      skills: [
        { name: 'Python', years: '7 Years' },
        { name: 'AWS', years: '7 Years' },
        { name: 'PostgreSQL', years: '7 Years' },
        { name: 'MongoDB', years: '7 Years' },
        { name: 'Ngin', years: '7 Years' },
        { name: 'Bootstrap', years: '7 Years' },
        { name: 'jQuery', years: '7 Years' },
        { name: 'CSS', years: '7 Years' },
        { name: 'HTML', years: '7 Years' },
        { name: 'Django', years: '7 Years' },
        { name: 'JavaScript', years: '7 Years' },
        { name: 'OrientDB', years: '7 Years' },
        { name: 'Checkmk', years: '3 Years' },
        { name: 'Node.js', years: '1 Years' },
        { name: 'React', years: '1 Years' }
      ],
      additionalSkills: 'Multi-threading, Apache Spark, CentOS, Ubuntu, Python, CRUD operations, Configuration file, Dynamicity, Email and Slack notifications, Scheduler, MySQL, Salesforce, Survey platform, XML schema, Data transformation, Script generation',
      availability: 'Full-time',
      experience: '7 years',
      industries: ['Computer Networks', 'Software and Platforms', 'Communications and Media', 'Automobile'],
      projects: [
        {
          title: 'Redefining Data Pipeline',
          description: 'Restructured the data pipeline for a data center to provide statistics information about each data center\'s performance. The project involved handling data flowing from multiple layers of servers, transforming and processing data, and ensuring proper data transfer and data quality. Different platforms like CentOS and Ubuntu were used.',
          roles: 'Developed Python scripts for data processing and transfer, implemented multi-threading for optimized data transfer, and performed data validation and quality checks. Deployed binaries of Python scripts on server nodes for maintenance.',
          technologies: 'Python, Multi-threading, Apache Spark, CentOS, Ubuntu, Python',
          industry: 'Computer Networks'
        },
        {
          title: 'Configuration Management Tool',
          description: 'Developed a configuration management tool that allowed CRUD operations on databases, tables, fields, and rows based on the maintained configuration. The tool\'s dynamicity depended on intelligent information stored in the configuration file.',
          roles: 'Designed and implemented the configuration management tool using Django and Python. Ensured that the tool could be configured for different databases and data structures based on the provided configuration.',
          technologies: 'Python, Django, CRUD operations, Configuration file, Dynamicity',
          industry: 'Software and Platforms'
        },
        {
          title: 'Schedule Maintenance Tool',
          description: 'Created a tool for managing scheduled maintenance activities for different servers, zones, and data centers. Teams could define scheduled activities, affected regions, and receive email and Slack notifications. The tool also provided calendar views and various timezone support.',
          roles: 'Designed and developed the maintenance and notification tool using Python and Django. Implemented scheduling, notifications, and calendar views. Supported various timezones.',
          technologies: 'Python, Django, Email and Slack notifications, Scheduler',
          industry: 'Communications and Media'
        },
        {
          title: 'Business Process for Automobile',
          description: 'Implemented a process for sending surveys to an automobile conglomerate\'s customers using a survey platform. Customers received survey links based on touchpoints, and reminders were sent. Data integration with the client\'s system, which included Salesforce and other applications, was established.',
          roles: 'Designed and developed the survey process using Django and Python. Integrated customer data from various applications, managed touchpoint data, and ensured timely survey distribution and reminders.',
          technologies: 'Django, Python, MySQL, Salesforce, Survey platform',
          industry: 'Automobile'
        },
        {
          title: 'Dynamically Creating Python Script',
          description: 'Developed a tool to dynamically create Python scripts for data transformation based on XML schemas. The tool allowed minimal manual intervention and configuration for different data formats.',
          roles: 'Designed and implemented the tool using Django and Python. Configured the tool based on XML schemas, mapped tags to input fields, and generated Python scripts for data transformation.',
          technologies: 'Django, Python, XML schema, Data transformation, Script generation',
          industry: 'Software and Platforms'
        }
      ],
      workHistory: [
        {
          position: 'Full Stack Developer',
          date: 'September-2017',
          description: 'Full-stack development, AWS/GCP, Node.js, Dbs like Postgresql, Mysql. Worked on various products'
        },
        {
          position: 'Full Stack Developer',
          date: 'March-2017 to September-2017',
          company: 'Fafadia Tech.',
          description: 'Developed a Charity marketplace named \'KindHearted\' Exposure to technologies like Django, Python, jQuery, HTML, CSS Exposure to the Linux platform Solely responsible for handling clients and implementing business requirements Documentation of use cases and'
        }
      ],
      education: {
        degree: 'Bachelors degree in Computer Engineering',
        university: 'Mumbai University',
        years: '2012 to 2015'
      },
      language: 'English - Advanced'
    }
  };

  const developer = developerData[id];

  if (!developer) {
    return <div>Developer not found</div>;
  }

  return (
    <div className="developer-profile">
      <div className="breadcrumb">
        ← <Link to="/">Home</Link> / <Link to="/find-dev">Developers</Link> / {developer.id}
      </div>

      <div className="profile-header">
        <div className="profile-left">
          <img src="/images/noimage.jpg" alt={developer.name} className="profile-image" />
        </div>
        <div className="profile-right">
          <div className="profile-info">
            <h1>{developer.name} <span className="dev-id-red">{developer.id}</span> <span className="status-active">{developer.status}</span></h1>
            <h2>{developer.title}</h2>
            <p className="description">{developer.description}</p>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <div className="skill-tags">
          {developer.skills.slice(0, 15).map((skill, index) => (
            <button key={index} className="skill-tag" onClick={() => handleSkillClick(skill.name)}>
              {skill.name}
            </button>
          ))}
        </div>
      </div>

      <div className="industries-section">
        <strong>Industries : </strong>
        {developer.industries.map((industry, index) => (
          <span key={index}>
            <a href="#" className="industry-link">{industry}</a>
            {index < developer.industries.length - 1 && ', '}
          </span>
        ))}
      </div>

      <div className="action-buttons">
        <button className="share-btn" onClick={(e) => {
          e.preventDefault();
          if (navigator.share) {
            navigator.share({
              title: `${developer.name} - ${developer.id}`,
              text: `Check out ${developer.name}'s profile`,
              url: window.location.href
            });
          } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Profile link copied to clipboard!');
          }
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Share
        </button>
        <button className="hire-btn" onClick={handleHire}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Hire Fifadra J
        </button>
        <button className="download-btn" onClick={handleDownloadPDF}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Download PDF
        </button>
      </div>

      <div className="details-section">
        <div className="detail-item">
          <div className="detail-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="15" rx="2" stroke="#000" strokeWidth="2" fill="none"/>
              <path d="M8 2v4M16 2v4M3 10h18" stroke="#000" strokeWidth="2"/>
            </svg>
          </div>
          <div className="detail-label">Availability</div>
          <div className="detail-value">{developer.availability}</div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 6v6l4 2" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="9" stroke="#000" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="detail-label">Total experience</div>
          <div className="detail-value">{developer.experience}</div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 2h12l-4 6 4 6v8H6v-8l4-6-4-6z" stroke="#000" strokeWidth="2" fill="none"/>
              <path d="M6 2h12M6 22h12" stroke="#000" strokeWidth="2"/>
            </svg>
          </div>
          <div className="detail-label">Technical skills</div>
          <div className="skills-list">
            {developer.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-years">{skill.years}</span>
              </div>
            ))}
            <div className="additional-skills">
              {developer.additionalSkills}
            </div>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">⚙️</div>
          <div className="detail-label">Projects</div>
          <div className="projects-list">
            {developer.projects.map((project, index) => (
              <div key={index} className="project-item">
                <h4>• {project.title}</h4>
                <div className="project-section">
                  <strong>Description</strong>
                  <p>{project.description}</p>
                </div>
                <div className="project-section">
                  <strong>Roles and Responsibilities</strong>
                  <p>{project.roles}</p>
                </div>
                <div className="project-section">
                  <strong>Technologies:</strong> {project.technologies}
                </div>
                <div className="project-section">
                  <strong>Industry:</strong> {project.industry}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="7" width="20" height="14" rx="2" stroke="#000" strokeWidth="2" fill="none"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="#000" strokeWidth="2"/>
            </svg>
          </div>
          <div className="detail-label">Work history</div>
          <div className="work-history">
            {developer.workHistory.map((work, index) => (
              <div key={index} className="work-item">
                <div className="work-header">{work.position} • {work.date}</div>
                {work.company && <div className="work-company">{work.company}</div>}
                <div className="work-description">Description: {work.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="detail-label">Education</div>
          <div className="education">
            <div>{developer.education.degree}</div>
            <div className="university">{developer.education.university}</div>
            <div className="years">{developer.education.years}</div>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M14 9l-2 3 8 8 3-3-8-8-3 2z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="detail-label">Language</div>
          <div className="detail-value">{developer.language}</div>
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-left">
          <h3>Hire software developers today</h3>
          <button className="connect-btn">Connect with us</button>
        </div>
        <div className="cta-right">
          <h3>Join the developer network</h3>
          <button className="join-btn">Join AugmntX</button>
        </div>
      </div>
      
      <div className="floating-buttons">
        <button className="float-btn chat-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </button>
        <button className="float-btn scroll-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 15l-6-6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DeveloperProfile;