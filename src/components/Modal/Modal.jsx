import React from 'react';
import './Modal.css';
import { allTechOptions } from '../../data/jobsData';

const Modal = ({ 
  showModal, 
  setShowModal, 
  dateFilter, 
  setDateFilter,
  selectedTech,
  handleTechChange,
  techSearch,
  setTechSearch,
  clearAllFilters
}) => {
  const filteredTechOptions = allTechOptions.filter(tech =>
    tech.name.toLowerCase().includes(techSearch.toLowerCase())
  );

  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Filter & Sort</h3>
          <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
        </div>
        
        <div className="modal-content">
          <div className="modal-section">
            <h4>📅 Date Posted</h4>
            <div className="filter-options">
              <div className="filter-option">
                <input 
                  type="radio" 
                  id="modal-past3days" 
                  name="modalDateFilter" 
                  value="past3days"
                  checked={dateFilter === 'past3days'}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
                <label htmlFor="modal-past3days">Past 3 Days</label>
              </div>
              <div className="filter-option">
                <input 
                  type="radio" 
                  id="modal-pastweek" 
                  name="modalDateFilter" 
                  value="pastweek"
                  checked={dateFilter === 'pastweek'}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
                <label htmlFor="modal-pastweek">Past Week</label>
              </div>
              <div className="filter-option">
                <input 
                  type="radio" 
                  id="modal-pastmonth" 
                  name="modalDateFilter" 
                  value="pastmonth"
                  checked={dateFilter === 'pastmonth'}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
                <label htmlFor="modal-pastmonth">Past Month</label>
              </div>
              <div className="filter-option">
                <input 
                  type="radio" 
                  id="modal-all" 
                  name="modalDateFilter" 
                  value="all"
                  checked={dateFilter === 'all'}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
                <label htmlFor="modal-all">All</label>
              </div>
            </div>
          </div>

          <div className="modal-section">
            <h4>⚡ Technology / Tools</h4>
            <input
              type="text"
              className="tech-search"
              value={techSearch}
              onChange={(e) => setTechSearch(e.target.value)}
            />
            <div className="tech-grid">
              {filteredTechOptions.map(tech => (
                <div key={tech.name} className="tech-option">
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <input 
                      type="checkbox" 
                      id={`modal-${tech.name}`}
                      checked={selectedTech.includes(tech.name)}
                      onChange={() => handleTechChange(tech.name)}
                    />
                    <label htmlFor={`modal-${tech.name}`}>{tech.name}</label>
                  </div>
                  <span className="tech-count">({tech.count})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="clear-btn" onClick={clearAllFilters}>Clear All</button>
          <button className="search-btn" onClick={() => setShowModal(false)}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;