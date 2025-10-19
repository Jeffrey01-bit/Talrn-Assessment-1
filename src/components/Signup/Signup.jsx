import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState('organisation');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    organization: '',
    website: '',
    workEmail: '',
    phoneNumber: '',
    city: '',
    corporateRegistrationNumber: '',
    referralCode: ''
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
    console.log('Signup submitted:', { accountType, ...formData });
    // Redirect to login page after successful registration
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1 className="signup-title">Create your AugmntX Account</h1>
        <p className="signup-subtitle">
          AugmntX is an exclusive network of the world's top talent.
        </p>
        <p className="signup-description">
          We provide access to top companies and resources that can help accelerate your growth.
        </p>

        <div className="account-type-selector">
          <button
            type="button"
            className={`account-type-btn ${accountType === 'organisation' ? 'active' : ''}`}
            onClick={() => setAccountType('organisation')}
          >
            Organisation
          </button>
          <button
            type="button"
            className={`account-type-btn ${accountType === 'individual' ? 'active' : ''}`}
            onClick={() => setAccountType('individual')}
          >
            Individual
          </button>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name *"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name *"
              required
            />
          </div>

          {accountType === 'organisation' ? (
            <>
              <div className="form-row">
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="Job title *"
                  required
                />
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Organization *"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="Website *"
                  required
                />
                <div className="email-input-group">
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    placeholder="Work email *"
                    required
                  />
                  <span className="email-suffix">@website.com</span>
                </div>
              </div>

              <div className="form-row">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone number *"
                  required
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City *"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  name="corporateRegistrationNumber"
                  value={formData.corporateRegistrationNumber}
                  onChange={handleInputChange}
                  placeholder="Corporate Registration Number *"
                  required
                />
                <input
                  type="text"
                  name="referralCode"
                  value={formData.referralCode}
                  onChange={handleInputChange}
                  placeholder="Referral code"
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-row">
                <input
                  type="email"
                  name="personalEmail"
                  value={formData.personalEmail || ''}
                  onChange={handleInputChange}
                  placeholder="Personal email *"
                  required
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone number *"
                  required
                />
              </div>

              <div className="form-row">
                <select
                  name="skills"
                  value={formData.skills || ''}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Skills *</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="React">React</option>
                  <option value="Node.js">Node.js</option>
                  <option value="PHP">PHP</option>
                  <option value="C#">C#</option>
                  <option value="Ruby">Ruby</option>
                  <option value="Go">Go</option>
                  <option value="Swift">Swift</option>
                </select>
                <select
                  name="experience"
                  value={formData.experience || ''}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Years of Experience *</option>
                  <option value="less-than-1">&lt; 1 year</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div className="form-row">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City *"
                  required
                />
                <input
                  type="text"
                  name="referralCode"
                  value={formData.referralCode}
                  onChange={handleInputChange}
                  placeholder="Referral code"
                />
              </div>
            </>
          )}

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;