import React, { useState } from 'react';


const PrayerRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subscribe: false
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          subscribe: false
        });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='mb-14' style={styles.body}>
      <div className="container">
        <div style={styles.formContainer}>
          <div style={styles.headerSection}>
            <div >
              <i className="bi bi-envelope" style={styles.mailIcon}></i>
            </div>
            <h1 className="fw-bold mb-3 text-dark">We're Praying With You</h1>
            <p style={styles.infoText}>
              Let us join you in prayer. Share your heart, your struggles, or your praise. 
              Our prayer team is committed to interceding on your behalf.
            </p>
          </div>
          
          {submitted && (
            <div className="alert alert-success" role="alert">
              <i className="bi bi-check-circle-fill me-2"></i>
              Thank you, {formData.name}! Your prayer request has been received. We'll be in touch soon.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <label htmlFor="name" className="form-label" style={styles.formLabel}>
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.formControl}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label" style={styles.formLabel}>
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.formControl}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
            </div>
            
            <div className="mb-3">
              <label htmlFor="phone" className="form-label" style={styles.formLabel}>
                Phone Number <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                style={styles.formControl}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="message" className="form-label" style={styles.formLabel}>
                Message <span className="text-danger">*</span>
              </label>
              <textarea
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                id="message"
                rows="6"
                placeholder="Describe your prayer request - whether for healing, guidance, provision, or thanksgiving..."
                value={formData.message}
                onChange={handleChange}
                style={styles.formControl}
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
            
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
              />
              <label className="form-check-label text-muted" htmlFor="subscribe">
                I would like to receive prayer updates and devotional encouragement
              </label>
            </div>
            
            <button type="submit" style={styles.submitBtn}>
              <i className="bi bi-send-check-fill me-2"></i>Submit Prayer Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    padding: '10px 0',
  },
  formContainer: {
    background: 'white',
    borderRadius: '25px',
    padding: '50px',
    boxShadow: '0 15px 20px rgba(0,0,0,0.08)',
    maxWidth: '700px',
    margin: '0 auto'
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  mailIconWrapper: {
    display: 'inline-block',
    padding: '20px',
    background: 'linear-gradient(135deg, #5c6ac4 0%, #4285f4 100%)',
    borderRadius: '20px',
    marginBottom: '25px'
  },
  mailIcon: {
    fontSize: '3rem',
    color: 'black'
  },
  formLabel: {
    fontWeight: '600',
    color: '#333',
    marginBottom: '8px'
  },
  formControl: {
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    padding: '12px 15px',
    transition: 'all 0.3s'
  },
  submitBtn: {
    background: 'linear-gradient(135deg, #5c6ac4 0%, #4285f4 100%)',
    border: 'none',
    color: 'white',
    padding: '14px 60px',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '1.1rem',
    transition: 'all 0.3s',
    display: 'block',
    margin: '30px auto 0',
    cursor: 'pointer'
  },
  infoText: {
    color: '#666',
    fontSize: '0.95rem',
    lineHeight: '1.6'
  }
};

export default PrayerRequestForm;