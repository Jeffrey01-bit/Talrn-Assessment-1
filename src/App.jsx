import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import JobCard from './components/JobCard/JobCard';
import Sidebar from './components/Sidebar/Sidebar';
import Modal from './components/Modal/Modal';
import FindDev from './components/FindDev/FindDev';
import DeveloperProfile from './components/DeveloperProfile/DeveloperProfile';
import HireDev from './components/HireDev/HireDev';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import NotFound from './components/NotFound/NotFound';
import './styles/variables.css';
import './styles/global.css';
import { allJobs } from './data/jobsData';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [minExperience, setMinExperience] = useState('0');
  const [maxExperience, setMaxExperience] = useState('30');
  const [showModal, setShowModal] = useState(false);
  const [techSearch, setTechSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const [visibleJobs, setVisibleJobs] = useState(6);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [activeFilterSection, setActiveFilterSection] = useState('date');

  const handleTechChange = (tech) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const handleLocationChange = (location) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };

  const clearAllFilters = () => {
    setSelectedTech([]);
    setSelectedLocations([]);
    setDateFilter('all');
    setMinExperience('0');
    setMaxExperience('30');
    setTechSearch('');
    setLocationSearch('');
    setSearchTerm('');
  };

  const shareJob = (jobTitle) => {
    if (navigator.share) {
      navigator.share({
        title: jobTitle,
        text: `Check out this job: ${jobTitle}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${jobTitle} - ${window.location.href}`);
      alert('Job link copied to clipboard!');
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

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

  const showMoreJobs = () => {
    setVisibleJobs(prev => Math.min(prev + 4, filteredJobs.length));
  };

  const getExperienceNumber = (expStr) => {
    const match = expStr.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = searchTerm === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDate = dateFilter === 'all' || 
      (dateFilter === 'past3days' && job.datePosted <= 3) ||
      (dateFilter === 'pastweek' && job.datePosted <= 7) ||
      (dateFilter === 'pastmonth' && job.datePosted <= 30);

    const matchesTech = selectedTech.length === 0 || 
      selectedTech.some(tech => 
        job.tags.some(tag => 
          tag.toLowerCase().includes(tech.toLowerCase()) ||
          tech.toLowerCase().includes(tag.toLowerCase())
        )
      );

    const matchesLocation = selectedLocations.length === 0 ||
      selectedLocations.some(loc => 
        job.location.toLowerCase().includes(loc.toLowerCase())
      );

    const jobExp = getExperienceNumber(job.experience);
    const minExp = parseInt(minExperience);
    const maxExp = parseInt(maxExperience);
    const matchesExperience = jobExp >= minExp && jobExp <= maxExp;

    return matchesSearch && matchesDate && matchesTech && matchesLocation && matchesExperience;
  });

  const displayedJobs = filteredJobs.slice(0, visibleJobs);

  return (
    <>
      <div className="main-container">
        <Sidebar 
          filteredJobsCount={filteredJobs.length}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          selectedTech={selectedTech}
          handleTechChange={handleTechChange}
          selectedLocations={selectedLocations}
          handleLocationChange={handleLocationChange}
          minExperience={minExperience}
          setMinExperience={setMinExperience}
          maxExperience={maxExperience}
          setMaxExperience={setMaxExperience}
          techSearch={techSearch}
          setTechSearch={setTechSearch}
          locationSearch={locationSearch}
          setLocationSearch={setLocationSearch}
          setShowModal={setShowModal}
        />

        <main className="content">
          <div className="search-section">
            <input
              type="text"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder=" "
            />
            <label className="search-label">Search Keywords,Eg:(Python, Full Stack..)</label>
          </div>

          <div className="mobile-filters">
            <button className="mobile-filter-btn" onClick={() => { setActiveFilterSection('date'); setShowMobileFilter(true); }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#5271ff"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
              Date Posted
            </button>
            <button className="mobile-filter-btn" onClick={() => { setActiveFilterSection('tech'); setShowMobileFilter(true); }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#5271ff"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
              Technology / Tools
            </button>
            <button className="mobile-filter-btn" onClick={() => { setActiveFilterSection('experience'); setShowMobileFilter(true); }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#5271ff"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
              Years of Experience
            </button>
          </div>

          <div className="jobs-grid">
            {displayedJobs.map(job => (
              <JobCard key={job.id} job={job} onShare={shareJob} />
            ))}
          </div>

          {visibleJobs < filteredJobs.length && (
            <div className="show-more-jobs">
              <button className="show-more-jobs-btn" onClick={showMoreJobs}>
                Show More
              </button>
            </div>
          )}
        </main>
      </div>

      <button className={`scroll-to-top ${isScrolled ? 'scrolled' : ''}`} onClick={scrollToTop}>
        ↑
      </button>

      {showModal && (
        <Modal 
          showModal={showModal}
          setShowModal={setShowModal}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          selectedTech={selectedTech}
          handleTechChange={handleTechChange}
          techSearch={techSearch}
          setTechSearch={setTechSearch}
          clearAllFilters={clearAllFilters}
        />
      )}

      {showMobileFilter && (
        <div className="mobile-filter-modal">
          <div className="mobile-filter-overlay" onClick={() => setShowMobileFilter(false)}></div>
          <div className="mobile-filter-content">
            <div className="mobile-filter-header">
              <h3>Filter & Sort</h3>
              <button className="close-btn" onClick={() => setShowMobileFilter(false)}>×</button>
            </div>
            
            <div className="mobile-filter-sections">
              <div className={`filter-accordion ${activeFilterSection === 'date' ? 'active' : ''}`}>
                <div className="filter-accordion-header" onClick={() => setActiveFilterSection(activeFilterSection === 'date' ? '' : 'date')}>
                  <span>📅 Date Posted</span>
                  <span>{activeFilterSection === 'date' ? '▲' : '▼'}</span>
                </div>
                {activeFilterSection === 'date' && (
                  <div className="filter-accordion-content">
                    <div className="filter-options">
                      <label><input type="radio" name="mobileDateFilter" value="past3days" checked={dateFilter === 'past3days'} onChange={(e) => setDateFilter(e.target.value)} /> Past 3 Days</label>
                      <label><input type="radio" name="mobileDateFilter" value="pastweek" checked={dateFilter === 'pastweek'} onChange={(e) => setDateFilter(e.target.value)} /> Past Week</label>
                      <label><input type="radio" name="mobileDateFilter" value="pastmonth" checked={dateFilter === 'pastmonth'} onChange={(e) => setDateFilter(e.target.value)} /> Past Month</label>
                      <label><input type="radio" name="mobileDateFilter" value="all" checked={dateFilter === 'all'} onChange={(e) => setDateFilter(e.target.value)} /> All</label>
                    </div>
                  </div>
                )}
              </div>

              <div className={`filter-accordion ${activeFilterSection === 'tech' ? 'active' : ''}`}>
                <div className="filter-accordion-header" onClick={() => setActiveFilterSection(activeFilterSection === 'tech' ? '' : 'tech')}>
                  <span>⚡ Technology / Tools</span>
                  <span>{activeFilterSection === 'tech' ? '▲' : '▼'}</span>
                </div>
                {activeFilterSection === 'tech' && (
                  <div className="filter-accordion-content">
                    <input type="text" className="tech-search" value={techSearch} onChange={(e) => setTechSearch(e.target.value)} placeholder="Search technology..." />
                  </div>
                )}
              </div>

              <div className={`filter-accordion ${activeFilterSection === 'experience' ? 'active' : ''}`}>
                <div className="filter-accordion-header" onClick={() => setActiveFilterSection(activeFilterSection === 'experience' ? '' : 'experience')}>
                  <span>📊 Years of Experience</span>
                  <span>{activeFilterSection === 'experience' ? '▲' : '▼'}</span>
                </div>
                {activeFilterSection === 'experience' && (
                  <div className="filter-accordion-content">
                    <div className="experience-inputs">
                      <div>
                        <label>Min</label>
                        <input type="number" value={minExperience} onChange={(e) => setMinExperience(e.target.value)} />
                      </div>
                      <div>
                        <label>Max</label>
                        <input type="number" value={maxExperience} onChange={(e) => setMaxExperience(e.target.value)} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className={`filter-accordion ${activeFilterSection === 'location' ? 'active' : ''}`}>
                <div className="filter-accordion-header" onClick={() => setActiveFilterSection(activeFilterSection === 'location' ? '' : 'location')}>
                  <span>📍 Locations</span>
                  <span>{activeFilterSection === 'location' ? '▲' : '▼'}</span>
                </div>
                {activeFilterSection === 'location' && (
                  <div className="filter-accordion-content">
                    <input type="text" className="location-search" value={locationSearch} onChange={(e) => setLocationSearch(e.target.value)} placeholder="Search location..." />
                  </div>
                )}
              </div>
            </div>

            <div className="mobile-filter-footer">
              <button className="clear-btn" onClick={clearAllFilters}>Clear All</button>
              <button className="search-btn" onClick={() => setShowMobileFilter(false)}>Search</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-dev" element={<FindDev />} />
          <Route path="/developer/:id" element={<DeveloperProfile />} />
          <Route path="/hire-dev" element={<HireDev />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hiring-guide" element={<NotFound />} />
          <Route path="/job-template" element={<NotFound />} />
          <Route path="/interview-questions" element={<NotFound />} />
          <Route path="/common-mistakes" element={<NotFound />} />
          <Route path="/book-meeting" element={<NotFound />} />
          <Route path="/chat-expert" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;