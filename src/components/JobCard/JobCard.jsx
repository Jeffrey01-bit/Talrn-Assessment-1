import React from "react";
import { Link } from "react-router-dom";
import "./JobCard.css";

const JobCard = ({ job, onShare }) => {
  return (
    <div className="job-card">
      <div className="job-header">
        <div>
          <h3 className="job-title">
            <a href={`/job-detail.html?job=${encodeURIComponent(job.title)}`} target="_blank" rel="noopener noreferrer">
              {job.title}
            </a>
          </h3>
          <div className="job-experience">{job.experience}</div>
        </div>
        <button className="share-btn" onClick={() => onShare(job.title)}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
          </svg>
        </button>
      </div>

      <div className="job-tags">
        {job.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="progress-bar"></div>

      <div className="auth-links">
        <Link to="/login">
          Login
        </Link>{" "}
        or{" "}
        <Link to="/signup">
          sign up
        </Link>{" "}
        to know your profile Match %
      </div>

      <div className="job-footer">
        <div className="job-location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#000000">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          {job.location}
        </div>
        <div className="job-type-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#000000">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
          {job.type}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
