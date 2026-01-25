import { useState } from "react";

const RegisterSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    campus: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for registering! We will contact you soon.");
  };

  return (
    <section className="py-5 bg-cream-dark">
      <div className="container py-4" style={{ maxWidth: '700px' }}>
        <div className="text-center mb-5 animate-fade-up">
          <h2 
            className="text-gradient fw-bold mb-3"
            style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem' }}
          >
            Register for WOFBI
          </h2>
          <p className="lead" style={{ color: 'var(--wofbi-muted)' }}>
            Take the first step towards transforming your life. Fill out the form below to secure your spot.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="card card-elevated p-4 p-md-5 animate-fade-up bg-white"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="row g-4">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label fw-medium">
                First Name
              </label>
              <input 
                type="text"
                className="form-control form-control-lg"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label fw-medium">
                Last Name
              </label>
              <input 
                type="text"
                className="form-control form-control-lg"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-sm-6">
              <label htmlFor="email" className="form-label fw-medium">
                Email Address
              </label>
              <input 
                type="email"
                className="form-control form-control-lg"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-sm-6">
              <label htmlFor="phone" className="form-label fw-medium">
                Phone Number
              </label>
              <input 
                type="tel"
                className="form-control form-control-lg"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="campus" className="form-label fw-medium">
                Select Campus
              </label>
              <select 
                className="form-select form-select-lg"
                id="campus"
                name="campus"
                value={formData.campus}
                onChange={handleChange}
                required
              >
                <option value="">Choose your preferred campus</option>
                <option value="birmingham">Birmingham Campus (5th - 10th August)</option>
                <option value="dartford">Dartford Campus (19th - 25th August)</option>
                <option value="coventry">Coventry Campus (26th - 31st August)</option>
                <option value="leicester">Leicester Campus (21st - 26th October)</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-wofbi w-100 mt-4">
            Register Now
          </button>

          <p className="mt-3 text-center small" style={{ color: 'var(--wofbi-muted)' }}>
            By registering, you agree to our terms and conditions.
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterSection;
