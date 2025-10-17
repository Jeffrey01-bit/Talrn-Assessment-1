import React, { useState, useEffect } from 'react';
import './FindDev.css';

const FindDev = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCurrentPageDevelopers = () => {
    const filteredDevs = allDevelopers.filter(dev => 
      searchTerm === '' || 
      dev.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const itemsPerPage = 5;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredDevs.slice(startIndex, endIndex);
  };

  const downloadPDF = (dev) => {
    const fileMap = {
      'AXO2263': 'Team Lead 7 years ,Fifadra J - AXO2263 - AugmntX.pdf',
      'AXO2385': 'PHP Laravel Developer, 7 years,Borhade S - AXO2385 - AugmntX.pdf',
      'AXF171': 'Front End Developer, 12 years,Kumar S - AXF171 - AugmntX.pdf',
      'AXO2617': 'Senior React Native ..., 11 years,Daudia K - AXO2617 - AugmntX.pdf'
    };
    
    const fileName = fileMap[dev.id];
    if (fileName) {
      const link = document.createElement('a');
      link.href = `/images/${fileName}`;
      link.download = fileName;
      link.click();
    } else {
      const generatedFileName = `${dev.title},${dev.name} - ${dev.id} - AugmntX.pdf`;
      const content = `Developer Profile\n\nName: ${dev.name}\nID: ${dev.id}\nTitle: ${dev.title}\nSkills: ${dev.skills.join(', ')}\nDescription: ${dev.description}\nIndustries: ${dev.industries.join(', ')}\n\nAugmntX Resource Profile`;
      const blob = new Blob([content], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = generatedFileName;
      link.click();
      URL.revokeObjectURL(link.href);
    }
  };

  const allDevelopers = [
    {
      id: 'AXO2263',
      name: 'Fifadra J',
      title: 'Team Lead, 7 years',
      skills: ['Python', 'AWS', 'PostgreSQL'],
      description: 'In depth Analysis of the business processes of the industry and can provide technology consultation. Expertise in building web application ...',
      industries: ['Automobile', 'Communications and Media']
    },
    {
      id: 'AXO2385',
      name: 'Borhade S',
      title: 'PHP Laravel Developer, 7 years',
      skills: ['PHP', 'Laravel', 'Vue JS'],
      description: 'Full-stack Software Developer with 7+ years of experience architecting and developing scalable, secure, and maintainable web applications. P...',
      industries: ['IT services']
    },
    {
      id: 'AXF171',
      name: 'Kumar S',
      title: 'Front End Developer, 12 years',
      skills: ['PHP', 'JavaScript', 'xamp'],
      description: 'A dedicated team player with strong interpersonal, organizational and communication skills. Capacity to handle challenging responsibilities...',
      industries: ['Ecommerce', 'Fintech']
    },
    {
      id: 'AXO2617',
      name: 'Daudia K',
      title: 'Senior React Native ..., 11 years',
      skills: ['SwiftUI', 'Xcode', 'Git'],
      description: 'A seasoned mobile app developer with over 11 years of experience delivering high-quality, scalable solutions. Specialized in React Native fo...',
      industries: ['Ecommerce', 'Finance', 'Food Delivery', 'Healthcare']
    },
    {
      id: 'AXO2618',
      name: 'Lalvani O',
      title: 'Java Developer, 4 years',
      skills: ['Java', 'Hibernate', 'Spring'],
      description: 'He is java developer with exp. of 4 years and further. he has exp. of working in commerce projects. & Ed tech. he also have tech skills in...',
      industries: ['Ecommerce', 'EdTech', 'Education']
    },
    {
      id: 'AXO2719',
      name: 'Sarah M',
      title: 'Full Stack Developer, 6 years',
      skills: ['React', 'Node.js', 'MongoDB'],
      description: 'Experienced full-stack developer with expertise in modern web technologies. Specialized in building scalable applications with clean architecture...',
      industries: ['Fintech', 'Healthcare']
    },
    {
      id: 'AXO2820',
      name: 'David L',
      title: 'DevOps Engineer, 8 years',
      skills: ['Docker', 'Kubernetes', 'AWS'],
      description: 'Senior DevOps engineer with extensive experience in cloud infrastructure and automation. Expert in containerization and CI/CD pipelines...',
      industries: ['Cloud Services', 'Enterprise']
    },
    {
      id: 'AXO2921',
      name: 'Maria R',
      title: 'UI/UX Designer, 5 years',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
      description: 'Creative UI/UX designer focused on user-centered design principles. Experience in creating intuitive interfaces for web and mobile applications...',
      industries: ['Design', 'Mobile Apps']
    },
    {
      id: 'AXO3022',
      name: 'Alex T',
      title: 'Data Scientist, 9 years',
      skills: ['Python', 'TensorFlow', 'SQL'],
      description: 'Data scientist with strong background in machine learning and statistical analysis. Expertise in building predictive models and data pipelines...',
      industries: ['Analytics', 'AI/ML']
    },
    {
      id: 'AXO3123',
      name: 'John D',
      title: 'Backend Developer, 5 years',
      skills: ['Node.js', 'Express', 'MySQL'],
      description: 'Experienced backend developer specializing in scalable server-side applications. Expert in API development and database optimization...',
      industries: ['Web Development', 'API Services']
    },
    {
      id: 'AXO3224',
      name: 'Lisa W',
      title: 'Mobile Developer, 6 years',
      skills: ['Flutter', 'Dart', 'Firebase'],
      description: 'Mobile app developer with expertise in cross-platform development. Specialized in creating high-performance mobile applications...',
      industries: ['Mobile Apps', 'Cross-platform']
    },
    {
      id: 'AXO3325',
      name: 'Mike R',
      title: 'Cloud Architect, 10 years',
      skills: ['Azure', 'Terraform', 'Docker'],
      description: 'Senior cloud architect with extensive experience in designing and implementing cloud infrastructure solutions...',
      industries: ['Cloud Computing', 'Infrastructure']
    },
    {
      id: 'AXO3426',
      name: 'Emma S',
      title: 'QA Engineer, 4 years',
      skills: ['Selenium', 'Jest', 'Cypress'],
      description: 'Quality assurance engineer focused on automated testing and continuous integration. Expert in test automation frameworks...',
      industries: ['Testing', 'Quality Assurance']
    },
    {
      id: 'AXO3527',
      name: 'Ryan P',
      title: 'Security Engineer, 8 years',
      skills: ['Cybersecurity', 'Penetration Testing', 'OWASP'],
      description: 'Cybersecurity specialist with focus on application security and vulnerability assessment. Expert in security best practices...',
      industries: ['Cybersecurity', 'Risk Management']
    }
  ];

  return (
    <div className="find-dev-container">
      <div className="find-dev-content">
        <aside className="sidebar">
          <div className="hiring-resources">
            <h3>Hiring resources</h3>
            <ul>
              <li><a href="#">Guide to Hiring devs (→)</a></li>
              <li><a href="#">Job Template (→)</a></li>
              <li><a href="#">Interview Questions (→)</a></li>
              <li><a href="#">Common Mistakes (→)</a></li>
            </ul>
          </div>
          
          <div className="need-help">
            <h3>Need help?</h3>
            <ul>
              <li><a href="#">Book a meeting (→)</a></li>
              <li><a href="#">Chat with an expert (→)</a></li>
            </ul>
          </div>
        </aside>

        <main className="main-content">
          <div className="search-section">
            <input 
              type="text" 
              placeholder="Search for skills" 
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="developers-grid">
            {getCurrentPageDevelopers().map((dev) => (
              <div key={dev.id} className="developer-card">
                <div className="dev-header">
                  <div className="dev-profile">
                    <img src="/images/noimage.jpg" alt={dev.name} className="dev-avatar" />
                    <div className="augmntx-logo">
                      <span>AugmntX</span>
                      <small>Resource Profile</small>
                    </div>
                  </div>
                  <div className="dev-info">
                    <h3>{dev.name} <span className="dev-id">{dev.id}</span></h3>
                    <p className="dev-title">{dev.title}</p>
                    <div className="dev-skills">
                      {dev.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="dev-description">
                  <p>{dev.description}</p>
                </div>
                
                <div className="dev-industries">
                  <strong>Industries:</strong>
                  {dev.industries.map((industry, index) => (
                    <span key={index}>
                      <a href="#" className="industry-link">{industry}</a>
                      {index < dev.industries.length - 1 && ', '}
                    </span>
                  ))}
                </div>
                
                <div className="dev-actions">
                  <button className="hire-btn">🔗 Hire {dev.name.split(' ')[0]}</button>
                  <button className="download-btn" onClick={() => downloadPDF(dev)}>⬇ Download PDF</button>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button 
              className={currentPage === 1 ? 'active' : ''}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            <button 
              className={currentPage === 2 ? 'active' : ''}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            <button 
              className={currentPage === 3 ? 'active' : ''}
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>
            <button onClick={() => setCurrentPage(Math.min(currentPage + 1, 3))}>»</button>
          </div>
        </main>
      </div>

      <div className="features-section">
        <div className="features-container">
          <div className="feature">
            <div className="feature-icon">👤</div>
            <h3>Verified profiles</h3>
            <p>AugmntX vets profiles rigorously & the best candidates are handpicked by our experts.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">✈️</div>
            <h3>Fast onboarding</h3>
            <p>You'll be able to get an developer working on your project within 2 to 3 business days.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🌐</div>
            <h3>Effortless scaling</h3>
            <p>With our large talent pool of dev, you can effortlessly scale your team fast.</p>
          </div>
        </div>
      </div>

      <button className={`scroll-to-top ${isScrolled ? 'scrolled' : ''}`} onClick={scrollToTop}>
        ↑
      </button>

      <div 
        className="contact-widget"
        onMouseEnter={() => setShowContactOptions(true)}
        onMouseLeave={() => setShowContactOptions(false)}
      >
        <div className="message-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
        </div>
        <div className={`contact-options ${showContactOptions ? 'show' : ''}`}>
          <a href="mailto:contact@augmntx.com" className="contact-option email" title="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a href="https://wa.me/1234567890" className="contact-option whatsapp" title="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindDev;