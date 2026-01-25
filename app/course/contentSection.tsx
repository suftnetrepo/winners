import welcomeImage from "@/assets/welcome-person.jpg";

const ContentSection = () => {
  return (
    <section className="py-5 bg-cream">
      <div className="container py-4">
        <div className="row align-items-center g-5">
          {/* Image Column */}
          <div className="col-lg-5 animate-fade-up">
            <div className="image-container">
              <img
                src={welcomeImage}
                alt="Welcoming smile"
                className="img-fluid w-100"
                style={{ objectFit: 'cover', aspectRatio: '4/5' }}
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-7 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span 
              className="text-uppercase fw-semibold small"
              style={{ color: 'var(--wofbi-primary)', letterSpacing: '0.1em' }}
            >
              Where do you need help?
            </span>
            
            <h2 
              className="mt-3 mb-4 fw-bold"
              style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', lineHeight: 1.2 }}
            >
              Are you{' '}
              <span className="text-gradient">
                Depressed, Oppressed, Stagnated, and Harassed
              </span>{' '}
              by Life's Challenges?
            </h2>

            <p className="lead mb-4" style={{ color: 'var(--wofbi-muted)' }}>
              Is life fuzzy and unpredictable for you? You don't seem to be in control 
              anymore. You struggle in one area or the other; finance, business, health, 
              family, career, etc and you don't really seem to understand what is going on.
            </p>

            <ul className="list-unstyled mb-4">
              <li className="d-flex gap-3 mb-3">
                <span className="bullet-point"></span>
                <p className="mb-0">
                  <a href="#" className="link-accent fw-medium">Is your home and family</a>{' '}
                  far from being at peace?
                </p>
              </li>
              <li className="d-flex gap-3 mb-3">
                <span className="bullet-point"></span>
                <p className="mb-0">
                  <a href="#" className="link-accent fw-medium">Are you in debt?</a>{' '}
                  Is money an issue? Are bills piling up and you don't know what to do?
                </p>
              </li>
              <li className="d-flex gap-3 mb-3">
                <span className="bullet-point"></span>
                <p className="mb-0">
                  <a href="#" className="link-accent fw-medium">Are you tired of failing every now and then?</a>{' '}
                  Circling back to where you started from or you feel stuck at the same spot?
                </p>
              </li>
            </ul>

            <p className="fs-5">
              At WOFBI, we do not offer mere secular education; we also provide{' '}
              <a href="#" className="link-accent fw-medium">deep spiritual enlightenment</a>, 
              as well as mental{' '}
              <a href="#" className="link-accent fw-medium">empowerment for exploits</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
