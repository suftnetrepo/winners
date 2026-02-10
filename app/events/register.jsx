'use client';

import { CheckCircle} from 'lucide-react';
import { useState } from 'react';
import { capitalizeFirstLetter } from '@/utils/helpers';
import { useRegister } from '@/hooks/useEvents';

const RegistrationModal = ({ show, onClose, eventTitle, eventId }) => {
    const { isSubmitting, submit, error, success } = useRegister()
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        mobile: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));

        if (errors[id]) {
            setErrors((prev) => ({ ...prev, [id]: '' }));
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

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            await submit({
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                mobile: formData.mobile,
                eventId: eventId
            });

            setTimeout(() => {
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    mobile: ''
                });

            }, 3000);
        } else {
            setErrors(newErrors);
        }
    };

    if (!show) return null;

    return (
        <>
            <div className="modal-backdrop fade show" onClick={onClose} style={{ zIndex: 1040 }} />
            <div className="modal fade show d-block" tabIndex={-1} style={{ zIndex: 1050 }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-body pt-2">
                            <p className="fs-24 mb-4 mt-4"><span className='fw-bold text-dark'>Register for</span> {capitalizeFirstLetter(eventTitle)}</p>

                            {success && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <CheckCircle size={20} className="me-2" />
                                    <strong>Success!</strong> You've been registered for this event.
                                    <button type="button" className="btn-close" onClick={() => onClose()} />
                                </div>
                            )}
                            {error && (
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    {error}
                                    <button type="button" className="btn-close" onClick={() => onClose()} />
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="first_name" className="form-label" style={styles.formLabel}>
                                            Firstname
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
                                            Lastname
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

                                    <div className="col-md-6">
                                        <label htmlFor="mobile" className="form-label" style={styles.formLabel}>
                                            Mobile
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                                            id="mobile"
                                            placeholder="Enter your mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            style={styles.formControl}
                                        />
                                        {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label" style={styles.formLabel}>
                                            Email
                                        </label>
                                        <input
                                            type="text"
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

                                <div className="d-flex gap-2 mt-4">
                                    <button type="button" className="btn btn-secondary flex-fill" onClick={onClose} disabled={isSubmitting}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary flex-fill" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" />
                                                Submit...
                                            </>
                                        ) : (
                                            'Submit'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
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
        transition: 'all 0.3s',
        fontSize: '14px'
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
    }
};

export default RegistrationModal;
