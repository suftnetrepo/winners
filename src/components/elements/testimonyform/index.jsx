import { useTestimony } from '@/hooks/useEmail';
import React, { useState } from 'react';

const TestimonyForm = () => {
  const { submit, success, error } = useTestimony()
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    subscribe: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First Name is required';
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last Name is required';
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {

      await submit({
        firstName: formData.first_name,
        lastName: formData.last_name,
        email: formData.email,
        message: formData.message
      });

      setTimeout(() => {
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          message: '',
          subscribe: false
        });
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='mb-14' style={styles.body}>
      <div className="container">
        <div style={styles.formContainer}>
          {success && (
            <div className="alert alert-success" role="alert">
              <i className="bi bi-check-circle-fill me-2"></i>
              Thank you, {formData.name}! Your prayer request has been received. We'll be in touch soon.
            </div>
          )}

          <form onSubmit={handleSubmit}>
           <div className="row  mb-3 mb-md-0">
                <div className="col-md-6">
                  <label htmlFor="first_name" className="form-label" style={styles.formLabel}>
                    Firstname <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                    id="first_name"
                    placeholder="Enter your firstname"
                    value={formData.first_name}
                    onChange={handleChange}
                    style={styles.formControl}
                  />
                  {errors.first_name && <div className="invalid-feedback">{errors.first_name}</div>}
                </div>
                <div className="col-md-6">
                  <label htmlFor="last_name" className="form-label" style={styles.formLabel}>
                    Lastname <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                    id="last_name"
                    placeholder="Enter your lastname"
                    value={formData.last_name}
                    onChange={handleChange}
                    style={styles.formControl}
                  />
                  {errors.last_name && <div className="invalid-feedback">{errors.last_name}</div>}
                </div>
              </div>

            <div className='row mt-3'>
              <div className="mb-3">
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
              <label htmlFor="message" className="form-label" style={styles.formLabel}>
                Message <span className="text-danger">*</span>
              </label>
              <textarea
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                id="message"
                rows="6"
                placeholder="Describe your testimony - whether for healing, guidance, provision, or thanksgiving..."
                value={formData.message}
                onChange={handleChange}
                style={styles.formControl}
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            <button type="submit" style={styles.submitBtn}>
              <i className="bi bi-send-check-fill me-2"></i>Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {

  formContainer: {
    background: 'white',
    borderRadius: '25px',
    padding: '50px',
    boxShadow: '0 5px 10px rgba(0,0,0,0.08)',
    maxWidth: '700px',
    margin: '0 auto'
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

};

export default TestimonyForm;