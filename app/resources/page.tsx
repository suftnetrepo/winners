'use client';
import { useState } from 'react'
import { Fragment } from 'react';
import { Footer } from '@/components/blocks/footer';
import PageProgress from '@/components/common/PageProgress';
import Navbar from '@/components/blocks/navbar/Navbar';
import Link from 'next/link';
import { Home, DollarSign, RefreshCw, MapPin, Send } from 'lucide-react';

export default function Page() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        campus: ''
    });

    const [validated, setValidated] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    const campuses = [
        { value: 'birmingham', label: 'Birmingham Campus - 5th - 10th August' },
        { value: 'dunford', label: 'Dunford Campus - 19th - 25th August' },
        { value: 'coventry', label: 'Coventry Campus - 26th - 31st August' },
        { value: 'leicester', label: 'Leicester Campus - 21st - 26th October' }
    ];
    return (
        <Fragment>
          
          
            <PageProgress />

            {/* <Topbar /> */}
            <header className="wrapper bg-light">
                <Navbar
                    info
                    navOtherClass="navbar-other ms-lg-4"
                    navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                    button={
                        <Link href="/give" className="btn btn-sm btn-danger rounded-pill">
                            Give
                        </Link>
                    }
                />
            </header>

            <main className="content-wrapper">
                {/* ========== title section ========== */}
                <section className="hero-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 text-center">
                                <h1 className="hero-title">WOFBI: Basic Certificate Course</h1>
                                <p className="hero-subtitle">Transform Your Life Through Deep Spiritual Enlightenment</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="image-container">
                                    <img  src="/img/welcome-person.jpg" srcSet="/img/welcome-person.jpg" alt="Professional woman smiling" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card question-card">
                                    <div className="card-body">
                                        <h2 className="question-title">WHERE DO YOU NEED HELP?</h2>
                                        <p className="main-question">
                                            ARE YOU <span className="highlight-text">DEPRESSED, OPPRESSED, STAGNATED, AND HARASSED</span> BY LIFE'S CHALLENGES?
                                        </p>

                                        <p className="mb-4">
                                            Is life fuzzy and unpredictable for you? You don't seem to be in control anymore. You struggle in one area or the other; finance, business, health, family, career, etc and you don't really seem to understand what is going on.
                                        </p>

                                        <ul className="sub-questions">
                                            <li>
                                                <i className="fas fa-home"></i>
                                                <div>
                                                    <strong className="highlight-text">Is your home and family</strong> far from being at peace?
                                                </div>
                                            </li>
                                            <li>
                                                <i className="fas fa-money-bill-wave"></i>
                                                <div>
                                                    <strong className="highlight-text">Are you in debt?</strong> Is money an issue? Are bills piling up and you don't know what to do?
                                                </div>
                                            </li>
                                            <li>
                                                <i className="fas fa-sync-alt"></i>
                                                <div>
                                                    <strong className="highlight-text">Are you tired of failing every now and then?</strong> Circling back to where you started from or you feel stuck at the same spot?
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="alert wofbi-statement">
                                    <p className="mb-0">
                                        <strong>At WOFBI,</strong> we do not offer mere secular education; we also provide
                                        <strong className="highlight-text"> deep spiritual enlightenment</strong>, as well as mental
                                        <strong className="highlight-text"> empowerment for exploits</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="campus-section">
                    <div className="container">
                        <h2 className="text-center mb-5" style={{ fontSize: '2.5rem', fontWeight: '700' }}>Various Campus to Choose From</h2>

                        <div className="row">
                            {campuses.map((campus, index) => (
                                <div key={index} className="col-md-6 mb-3">
                                    <div className="card campus-card">
                                        <div className="card-body">
                                            <div className="campus-title">
                                                <i className="fas fa-map-marker-alt me-2"></i>{campus.label.split(' - ')[0]}
                                            </div>
                                            <div className="campus-date">{campus.label.split(' - ').slice(1).join(' - ')}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Registration Section */}
                <section className="register-section">
                    <div className="container">
                        <h2 className="register-title text-center">Register for WOFBI</h2>
                        <p className="text-center mb-5" style={{ fontSize: '1.2rem' }}>Take the first step towards transformation today</p>

                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="registration-form-container">
                                    {submitted && (
                                        <div className="alert alert-success" role="alert">
                                            <i className="fas fa-check-circle me-2"></i>
                                            Thank you for registering! We'll contact you soon.
                                        </div>
                                    )}

                                    <div className={`needs-validation ${validated ? 'was-validated' : ''}`} >
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="firstName" className="form-label">First Name *</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="firstName"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your first name"
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide your first name.
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="lastName" className="form-label">Last Name *</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="lastName"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your last name"
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide your last name.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="email" className="form-label">Email *</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="your.email@example.com"
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide a valid email address.
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="phone" className="form-label">Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Enter your phone number"
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide your phone number.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 mb-4">
                                                <label htmlFor="campus" className="form-label">Select Campus *</label>
                                                <select
                                                    className="form-select"
                                                    id="campus"
                                                    name="campus"
                                                    value={formData.campus}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="">Choose a campus...</option>
                                                    {campuses.map((campus) => (
                                                        <option key={campus.value} value={campus.value}>
                                                            {campus.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="invalid-feedback">
                                                    Please select a campus.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-center mt-4">
                                            <button
                                                type="button"
                                                onClick={handleSubmit}
                                                className="btn btn-submit-form"
                                            >
                                                Submit <i className="fas fa-paper-plane ms-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer backgroundColor="bg-gray" />
        </Fragment>
    );
}
