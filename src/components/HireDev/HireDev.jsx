import React, { useState } from 'react';
import './HireDev.css';

const HireDev = () => {
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    companyName: '',
    workEmail: '',
    phone: '',
    howDidYouHear: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="hire-dev-container">
      <div className="hire-dev-content">
        <h1 className="hire-dev-title">Hire the best dedicated developers</h1>
        <p className="hire-dev-subtitle">
          Hire pre-vetted developers with strong technical and communication skills at unbeatable prices.
        </p>
        <p className="hire-dev-guarantee">
          If you decide to stop within one week, you pay nothing.
        </p>

        <form className="hire-dev-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                placeholder="Job Title *"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Company Name *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleInputChange}
                placeholder="Work Email *"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone *"
                required
              />
            </div>
            <div className="form-group">
              <select
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleInputChange}
                required
              >
                <option value="">How did you hear about us? *</option>
                <option value="google">Google Search</option>
                <option value="social-media">Social Media</option>
                <option value="referral">Referral</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <p className="required-fields">* These fields are required.</p>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireDev;