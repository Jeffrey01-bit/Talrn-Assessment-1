import React from 'react';
import './Sidebar.css';
import { techOptions, locationOptions } from '../../data/jobsData';

const Sidebar = ({ 
  filteredJobsCount, 
  dateFilter, 
  setDateFilter,
  selectedTech,
  handleTechChange,
  selectedLocations,
  handleLocationChange,
  minExperience,
  setMinExperience,
  maxExperience,
  setMaxExperience,
  techSearch,
  setTechSearch,
  locationSearch,
  setLocationSearch,
  setShowModal
}) => {
  return (
    <aside className="sidebar">
      <div className="jobs-count">{filteredJobsCount} jobs</div>
      
      <div className="filter-section">
        <h3 className="filter-title">Sort & Filter</h3>
        
        <div className="date-filter">
          <h4><svg width="20" height="20" viewBox="0 0 24 24" fill="#5271ff" style={{marginRight: '8px'}}><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>Date Posted</h4>
          <div className="filter-options">
            <div className="filter-option">
              <input 
                type="radio" 
                id="past3days" 
                name="dateFilter" 
                value="past3days"
                checked={dateFilter === 'past3days'}
                onChange={(e) => setDateFilter(e.target.value)}
              />
              <label htmlFor="past3days">Past 3 Days</label>
            </div>
            <div className="filter-option">
              <input 
                type="radio" 
                id="pastweek" 
                name="dateFilter" 
                value="pastweek"
                checked={dateFilter === 'pastweek'}
                onChange={(e) => setDateFilter(e.target.value)}
              />
              <label htmlFor="pastweek">Past Week</label>
            </div>
            <div className="filter-option">
              <input 
                type="radio" 
                id="pastmonth" 
                name="dateFilter" 
                value="pastmonth"
                checked={dateFilter === 'pastmonth'}
                onChange={(e) => setDateFilter(e.target.value)}
              />
              <label htmlFor="pastmonth">Past Month</label>
            </div>
            <div className="filter-option">
              <input 
                type="radio" 
                id="all" 
                name="dateFilter" 
                value="all"
                checked={dateFilter === 'all'}
                onChange={(e) => setDateFilter(e.target.value)}
              />
              <label htmlFor="all">All</label>
            </div>
          </div>
        </div>

        <div className="filter-section-divider"></div>

        <div className="tech-filter">
          <h4><svg width="20" height="20" viewBox="0 0 24 24" fill="#5271ff" style={{marginRight: '8px'}}><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>Technology / Tools</h4>
          <input
            type="text"
            className="tech-search"
            value={techSearch}
            onChange={(e) => setTechSearch(e.target.value)}
          />
          {techOptions.filter(tech => 
            tech.name.toLowerCase().includes(techSearch.toLowerCase())
          ).length > 0 ? (
            techOptions.filter(tech => 
              tech.name.toLowerCase().includes(techSearch.toLowerCase())
            ).map(tech => (
              <div key={tech.name} className="tech-option">
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <input 
                    type="checkbox" 
                    id={tech.name}
                    checked={selectedTech.includes(tech.name)}
                    onChange={() => handleTechChange(tech.name)}
                  />
                  <label htmlFor={tech.name}>{tech.name}</label>
                </div>
                <span className="tech-count">({tech.count})</span>
              </div>
            ))
          ) : (
            techSearch && <div style={{color: 'var(--bs-gray-400)', fontSize: '0.9rem', padding: '10px 0'}}>No results found</div>
          )}
          <div className="show-more" onClick={() => setShowModal(true)}>SHOW MORE</div>
        </div>

        <div className="filter-section-divider"></div>

        <div className="experience-filter">
          <h4><svg width="20" height="20" viewBox="0 0 24 24" fill="#5271ff" style={{marginRight: '8px'}}><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>Years of Experience</h4>
          <div className="experience-slider">
            <div className="slider-track"></div>
            <div 
              className="slider-fill" 
              style={{
                left: `${(minExperience / 30) * 100}%`,
                width: `${((maxExperience - minExperience) / 30) * 100}%`
              }}
            ></div>
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={minExperience}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value <= maxExperience) {
                  setMinExperience(value.toString());
                }
              }}
              className="slider-input"
              style={{zIndex: 1}}
            />
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={maxExperience}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value >= minExperience) {
                  setMaxExperience(value.toString());
                }
              }}
              className="slider-input"
              style={{zIndex: 2}}
            />
          </div>
          <div className="experience-range">
            <div>
              <div className="range-label">Min</div>
              <select 
                className="range-input" 
                value={minExperience}
                onChange={(e) => {
                  const value = e.target.value;
                  if (parseInt(value) <= parseInt(maxExperience)) {
                    setMinExperience(value);
                  }
                }}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>
            <div>
              <div className="range-label">Max</div>
              <select 
                className="range-input" 
                value={maxExperience}
                onChange={(e) => {
                  const value = e.target.value;
                  if (parseInt(value) >= parseInt(minExperience)) {
                    setMaxExperience(value);
                  }
                }}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
        </div>

        <div className="filter-section-divider"></div>

        <div className="location-filter">
          <h4><svg width="20" height="20" viewBox="0 0 24 24" fill="#5271ff" style={{marginRight: '8px'}}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>Locations</h4>
          <input
            type="text"
            className="location-search"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
          />
          {locationOptions.filter(location => 
            location.name.toLowerCase().includes(locationSearch.toLowerCase())
          ).length > 0 ? (
            locationOptions.filter(location => 
              location.name.toLowerCase().includes(locationSearch.toLowerCase())
            ).map(location => (
              <div key={location.name} className="location-option">
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <input 
                    type="checkbox" 
                    id={location.name}
                    checked={selectedLocations.includes(location.name)}
                    onChange={() => handleLocationChange(location.name)}
                  />
                  <label htmlFor={location.name}>{location.name}</label>
                </div>
                <span className="tech-count">({location.count})</span>
              </div>
            ))
          ) : (
            locationSearch && <div style={{color: 'var(--bs-gray-400)', fontSize: '0.9rem', padding: '10px 0'}}>No results found</div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;