import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FindDev.css';

const FindDev = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [skillFilter, setSkillFilter] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  
  const handleSkillClick = (e, skillName) => {
    e.stopPropagation();
    if (!selectedSkills.includes(skillName)) {
      const newSkills = [...selectedSkills, skillName];
      setSelectedSkills(newSkills);
      updateURL(newSkills);
    }
  };
  
  const removeSkill = (skillToRemove) => {
    const newSkills = selectedSkills.filter(skill => skill !== skillToRemove);
    setSelectedSkills(newSkills);
    updateURL(newSkills);
  };
  
  const updateURL = (skills) => {
    if (skills.length > 0) {
      navigate(`/find-dev?skills=${skills.map(s => encodeURIComponent(s)).join(',')}`);
    } else {
      navigate('/find-dev');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const skill = params.get('skill');
    const skills = params.get('skills');
    
    if (skills) {
      const skillArray = skills.split(',').map(s => decodeURIComponent(s));
      setSelectedSkills(skillArray);
      setSkillFilter(skillArray.join(', '));
    } else if (skill) {
      setSelectedSkills([skill]);
      setSkillFilter(skill);
    } else {
      setSelectedSkills([]);
      setSkillFilter('');
    }
  }, [location.search]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCurrentPageDevelopers = () => {
    const filteredDevs = allDevelopers.filter(dev => {
      const matchesSearch = searchTerm === '' || 
        dev.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
        dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dev.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSkills = selectedSkills.length === 0 || 
        selectedSkills.some(selectedSkill => 
          dev.skills.some(devSkill => 
            devSkill.toLowerCase().includes(selectedSkill.toLowerCase())
          )
        );
      
      return matchesSearch && matchesSkills;
    });
    
    const itemsPerPage = 8;
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
      id: 'AXO50419',
      name: 'Harsh H',
      title: 'Full Stack Developer, 5 years',
      skills: ['React.js', 'Trello', 'PostgreSQL'],
      description: 'Skilled Full Stack Developer with expertise in React.js, Next.js, Node.js, and n8n workflow automation. Proficient in building scalable applications, integrating third-pa...',
      industries: ['Business Productivity', 'SaaS', 'Social Media']
    },
    {
      id: 'AXO30078',
      name: 'Harshini H',
      title: 'Senior ColdFusion Develo..., 7 years',
      skills: ['ColdFusion', 'SQL Server', 'Agile Sc...'],
      description: 'Senior ColdFusion Developer skilled in ColdFusion (legacy & latest versions), SQL Server, and front-end technologies including HTML5, CSS, JavaScript, jQuery, Bootstrap. ...',
      industries: ['Legacy Systems', 'Enterprise']
    },
    {
      id: 'AXF23841',
      name: 'Solanki D',
      title: 'Drupal Developer, 3 years',
      skills: ['Drupal', 'PHP', 'MySQL'],
      description: 'Drupal developer proficient in PHP, MySQL, HTML, CSS, and JavaScript. Skilled in building and customizing Drupal sites, including custom module development, theming, and ...',
      industries: ['Web Development', 'CMS']
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
      skills: ['JavaScript', 'HTML', 'CSS'],
      description: 'A dedicated team player with strong interpersonal, organizational and communication skills. Capacity to handle challenging responsibilities...',
      industries: ['Ecommerce', 'Fintech']
    },
    {
      id: 'AXO2617',
      name: 'Daudia K',
      title: 'Senior React Native ..., 11 years',
      skills: ['React', 'JavaScript', 'Node.js'],
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
      skills: ['Bootstrap', 'CSS', 'HTML'],
      description: 'Creative UI/UX designer focused on user-centered design principles. Experience in creating intuitive interfaces for web and mobile applications...',
      industries: ['Design', 'Mobile Apps']
    },
    {
      id: 'AXO3022',
      name: 'Alex T',
      title: 'Data Scientist, 9 years',
      skills: ['Python', 'Django', 'PostgreSQL'],
      description: 'Data scientist with strong background in machine learning and statistical analysis. Expertise in building predictive models and data pipelines...',
      industries: ['Analytics', 'AI/ML']
    },
    {
      id: 'AXO3123',
      name: 'John D',
      title: 'Backend Developer, 5 years',
      skills: ['Node.js', 'JavaScript', 'MongoDB'],
      description: 'Experienced backend developer specializing in scalable server-side applications. Expert in API development and database optimization...',
      industries: ['Web Development', 'API Services']
    },
    {
      id: 'AXO3224',
      name: 'Lisa W',
      title: 'Mobile Developer, 6 years',
      skills: ['React', 'JavaScript', 'CSS'],
      description: 'Mobile app developer with expertise in cross-platform development. Specialized in creating high-performance mobile applications...',
      industries: ['Mobile Apps', 'Cross-platform']
    },
    {
      id: 'AXO3325',
      name: 'Mike R',
      title: 'Cloud Architect, 10 years',
      skills: ['AWS', 'Nginx', 'Docker'],
      description: 'Senior cloud architect with extensive experience in designing and implementing cloud infrastructure solutions...',
      industries: ['Cloud Computing', 'Infrastructure']
    },
    {
      id: 'AXO3426',
      name: 'Emma S',
      title: 'QA Engineer, 4 years',
      skills: ['JavaScript', 'jQuery', 'HTML'],
      description: 'Quality assurance engineer focused on automated testing and continuous integration. Expert in test automation frameworks...',
      industries: ['Testing', 'Quality Assurance']
    },
    {
      id: 'AXO3527',
      name: 'Ryan P',
      title: 'Security Engineer, 8 years',
      skills: ['Checkmk', 'Python', 'AWS'],
      description: 'Cybersecurity specialist with focus on application security and vulnerability assessment. Expert in security best practices...',
      industries: ['Cybersecurity', 'Risk Management']
    },
    {
      id: 'AXO3628',
      name: 'Anna K',
      title: 'Frontend Developer, 5 years',
      skills: ['React', 'Bootstrap', 'CSS'],
      description: 'Frontend developer with expertise in modern JavaScript frameworks and responsive design...',
      industries: ['Web Development', 'UI/UX']
    },
    {
      id: 'AXO3729',
      name: 'Tom B',
      title: 'Backend Engineer, 7 years',
      skills: ['Python', 'Django', 'PostgreSQL'],
      description: 'Backend engineer specializing in scalable web applications and database optimization...',
      industries: ['Web Services', 'Database']
    },
    {
      id: 'AXO3830',
      name: 'Sophie L',
      title: 'Product Manager, 6 years',
      skills: ['OrientDB', 'MongoDB', 'Python'],
      description: 'Product manager with experience in leading cross-functional teams and product strategy...',
      industries: ['Product Management', 'Strategy']
    },
    {
      id: 'AXO3931',
      name: 'James H',
      title: 'DevOps Specialist, 9 years',
      skills: ['AWS', 'Nginx', 'Docker'],
      description: 'DevOps specialist with expertise in CI/CD pipelines and container orchestration...',
      industries: ['DevOps', 'Cloud Infrastructure']
    },
    {
      id: 'AXO4032',
      name: 'Rachel M',
      title: 'Data Analyst, 4 years',
      skills: ['Python', 'PostgreSQL', 'Django'],
      description: 'Data analyst with strong skills in data visualization and statistical analysis...',
      industries: ['Data Analytics', 'Business Intelligence']
    },
    {
      id: 'AXO4133',
      name: 'Kevin W',
      title: 'Mobile Developer, 8 years',
      skills: ['React', 'JavaScript', 'Node.js'],
      description: 'iOS developer with extensive experience in native mobile app development...',
      industries: ['Mobile Development', 'iOS']
    },
    {
      id: 'AXO4234',
      name: 'Nina R',
      title: 'UX Designer, 6 years',
      skills: ['Bootstrap', 'jQuery', 'CSS'],
      description: 'UX designer focused on creating intuitive user experiences and conducting user research...',
      industries: ['Design', 'User Experience']
    },
    {
      id: 'AXO4335',
      name: 'Chris T',
      title: 'Full Stack Developer, 7 years',
      skills: ['JavaScript', 'React', 'Node.js'],
      description: 'Full stack developer with expertise in modern web technologies and scalable applications...',
      industries: ['Web Development', 'Full Stack']
    },
    {
      id: 'AXO4436',
      name: 'Maya S',
      title: 'Machine Learning Engineer, 5 years',
      skills: ['Python', 'Django', 'MongoDB'],
      description: 'ML engineer specializing in building and deploying machine learning models...',
      industries: ['AI/ML', 'Data Science']
    },
    {
      id: 'AXO4537',
      name: 'Daniel K',
      title: 'Cloud Engineer, 9 years',
      skills: ['AWS', 'Nginx', 'PostgreSQL'],
      description: 'Cloud engineer with expertise in multi-cloud architectures and infrastructure automation...',
      industries: ['Cloud Computing', 'Infrastructure']
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
          {selectedSkills.length > 0 && (
            <div className="filter-header">
              <h1>Hire Talents with skills in <span className="skill-highlight">{selectedSkills.join(', ')}</span></h1>
              <div className="selected-skills">
                {selectedSkills.map((skill, index) => (
                  <span key={index} className="skill-filter-tag">
                    {skill}
                    <button onClick={() => removeSkill(skill)} className="remove-skill">×</button>
                  </span>
                ))}
              </div>
            </div>
          )}
          
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
              <div key={dev.id} className="developer-card" onClick={() => window.location.href = `/developer/${dev.id}`} style={{cursor: 'pointer'}}>
                <div className="dev-header">
                  <div className="dev-profile">
                    <img src={['Lalvani', 'Daudia', 'Fifadra', 'Maria', 'Alex', 'John', 'Rachel'].includes(dev.name.split(' ')[0]) ? '/images/noimage.jpg' : `https://randomuser.me/api/portraits/${['Sarah', 'Lisa', 'Emma', 'Sophie', 'Anna', 'Nina', 'Maya'].includes(dev.name.split(' ')[0]) ? 'women' : 'men'}/${Math.abs(dev.name.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % 100}.jpg`} alt={dev.name} className="dev-avatar" />
                  </div>
                  <div className="dev-info">
                    <h3>{dev.name} <span className="dev-id">{dev.id}</span></h3>
                    <p className="dev-title">{dev.title}</p>
                    <div className="dev-skills">
                      {dev.skills.map((skill, index) => (
                        <button key={index} className="skill-tag" onClick={(e) => handleSkillClick(e, skill)}>
                          {skill}
                        </button>
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
                  <button className="hire-btn" onClick={(e) => { e.stopPropagation(); console.log(`Hiring ${dev.name}`); }}>🔗 Hire {dev.name.split(' ')[0]}</button>
                  <button className="download-btn" onClick={(e) => { e.stopPropagation(); downloadPDF(dev); }}>⬇ Download PDF</button>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button 
              className={currentPage === 1 ? 'active' : ''}
              onClick={() => handlePageChange(1)}
            >
              1
            </button>
            <button 
              className={currentPage === 2 ? 'active' : ''}
              onClick={() => handlePageChange(2)}
            >
              2
            </button>
            <button 
              className={currentPage === 3 ? 'active' : ''}
              onClick={() => handlePageChange(3)}
            >
              3
            </button>
            <button onClick={() => handlePageChange(Math.min(currentPage + 1, 3))}>»</button>
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