function generateJobHTML(jobKey) {
  const job = window.jobDetailData[jobKey];
  if (!job) return null;
  
  return `
    <div class="job-detail-page">
      <header class="header">
        <div class="header-content">
          <div class="logo">
            <img src="/images/AugmntX-Logo.png" alt="AugmntX" style="height: 40px" />
          </div>
          <nav class="nav">
            <a href="https://augmntx.com/why" target="_blank" rel="noopener noreferrer" class="nav-link">Why</a>
            <div class="industries-dropdown">
              <a href="#" class="nav-link">Industries ▼</a>
              <div class="dropdown-menu">
                <a href="#" class="dropdown-item">Travel</a>
                <a href="#" class="dropdown-item">Automotive</a>
                <a href="#" class="dropdown-item">Banking</a>
              </div>
            </div>
            <a href="#" class="nav-link">Find Dev</a>
            <a href="https://augmntx.com/remote-jobs" target="_blank" rel="noopener noreferrer" class="nav-link">Remote Jobs</a>
            <a href="https://augmntx.com/hire" class="hire-btn">Hire Dev</a>
            <a href="https://augmntx.com/admin/auth/login" target="_blank" rel="noopener noreferrer" class="nav-link">Login</a>
          </nav>
        </div>
      </header>
      
      <div class="breadcrumb">
        ← <a href="#" onclick="window.close()">Home</a> / <a href="#" onclick="window.close()">Jobs</a> / ${job.id}
      </div>
      
      <div class="job-detail-container">
        <div class="job-content">
          <div class="job-detail-header">
            <h1 class="job-title">${job.title}</h1>
          </div>
          
          <div class="job-meta">
            <span>📋 ${job.type}</span>
            <span>•</span>
            <span>🌍 ${job.location}</span>
            <span>•</span>
            <span>🏠 Remote</span>
            <span>•</span>
            <span>⏱ ${job.experience}</span>
          </div>
          
          <div class="skills-section">
            <div class="skills-content">
              <h3>Mandatory Technical Skills:</h3>
              <div class="skills-tags">
                ${job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
              </div>
            </div>
            <div class="job-sidebar">
              <div class="match-circle">
                <div class="circle"></div>
                <span class="match-text">Match %<br/>unavailable</span>
              </div>
              <button class="apply-btn-sidebar">Apply ✈</button>
            </div>
          </div>
          
          <div class="description-section">
            <h3>Job Description</h3>
            <p>${job.description}</p>
            
            ${job.sections.map(section => `
              <h4>${section.title}</h4>
              ${section.content.map(item => `<p>${item}</p>`).join('')}
            `).join('')}
            
            <div class="job-details">
              <div class="detail-row">
                <span class="detail-label">Interview Rounds:</span>
                <span>${job.interviewRounds}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Valid Through:</span>
                <span>${job.validThrough}</span>
              </div>
            </div>
            
            <div class="bottom-section">
              <button class="apply-btn">Apply ✈</button>
              <div class="match-circle">
                <div class="circle"></div>
                <span class="match-text">Match %<br/>unavailable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-main">
            <div class="footer-section">
              <div class="footer-logo">
                <img src="/images/augmntxlogo.png" alt="AugmntX" style="height: 40px" />
              </div>
            </div>
            <div class="footer-section">
              <h3>Information</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Corporate Information</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h3>For Developers</h3>
              <ul>
                <li><a href="#">Browse Jobs</a></li>
                <li><a href="#">Developer Resources</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h3>Support</h3>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 AugmntX. All rights reserved.</p>
            <div class="social-links">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `;
}

function initJobDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const jobTitle = urlParams.get('job');
  
  const html = generateJobHTML(jobTitle);
  if (html) {
    document.title = `${jobTitle} - Job Detail`;
    document.getElementById('job-content').innerHTML = html;
  } else {
    document.title = '404 - Job Not Found';
    document.getElementById('job-content').innerHTML = `
      <div class="job-detail-page">
        <header class="header">
          <div class="header-content">
            <div class="logo">
              <img src="/images/AugmntX-Logo.png" alt="AugmntX" style="height: 40px" />
            </div>
            <nav class="nav">
              <a href="https://augmntx.com/why" target="_blank" rel="noopener noreferrer" class="nav-link">Why</a>
              <div class="industries-dropdown">
                <a href="#" class="nav-link">Industries ▼</a>
                <div class="dropdown-menu">
                  <a href="#" class="dropdown-item">Travel</a>
                  <a href="#" class="dropdown-item">Automotive</a>
                  <a href="#" class="dropdown-item">Banking</a>
                </div>
              </div>
              <a href="#" class="nav-link">Find Dev</a>
              <a href="https://augmntx.com/remote-jobs" target="_blank" rel="noopener noreferrer" class="nav-link">Remote Jobs</a>
              <a href="https://augmntx.com/hire" class="hire-btn">Hire Dev</a>
              <a href="https://augmntx.com/admin/auth/login" target="_blank" rel="noopener noreferrer" class="nav-link">Login</a>
            </nav>
          </div>
        </header>
        
        <div class="breadcrumb">
          ← <a href="#" onclick="window.close()">Home</a> / <a href="#" onclick="window.close()">Jobs</a> / 404
        </div>
        
        <div style="text-align: center; padding: 4rem 2rem; min-height: 50vh; display: flex; flex-direction: column; justify-content: center;">
          <h1 style="font-size: 3rem; color: #374151; margin-bottom: 1rem;">404</h1>
          <h2 style="font-size: 1.5rem; color: #6b7280; margin-bottom: 1rem;">Page Not Found</h2>
          <p style="color: #9ca3af;">Job details for "${jobTitle}" are not available.</p>
        </div>
        
        <footer class="footer">
          <div class="footer-content">
            <div class="footer-main">
              <div class="footer-section">
                <div class="footer-logo">
                  <img src="/images/augmntxlogo.png" alt="AugmntX" style="height: 40px" />
                </div>
              </div>
              <div class="footer-section">
                <h3>Information</h3>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Corporate Information</a></li>
                </ul>
              </div>
              <div class="footer-section">
                <h3>For Developers</h3>
                <ul>
                  <li><a href="#">Browse Jobs</a></li>
                  <li><a href="#">Developer Resources</a></li>
                </ul>
              </div>
              <div class="footer-section">
                <h3>Support</h3>
                <ul>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div class="footer-bottom">
              <p>&copy; 2024 AugmntX. All rights reserved.</p>
              <div class="social-links">
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" aria-label="Twitter">Twitter</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    `;
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initJobDetail);