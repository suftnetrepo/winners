import { FC } from 'react';
import SocialLinks from '@/components/reuseable/SocialLinks';
type Footer8Props = {
  backgroundColor?: string;
};

const Footer = ({ backgroundColor = 'bg-white' }: Footer8Props) => {
  return (
    <footer className={backgroundColor}>
      <div className="container pt-13 pb-7">
        <div className="row gx-lg-0 gy-6">
          <div className="col-lg-4">
            <div className="widget">
              <img className="mb-4" src="/img/logo_1.png" srcSet="/img/logo_1.png" alt="" />
              <p className="lead mb-0">
                Welcome to Winners Chapel International, Peterborough. We are an arm of the Living Faith Church
                Worldwide.
              </p>
            </div>
          </div>

          <div className="col-lg-3 offset-lg-2">
            <div className="widget">
              <div className="d-flex flex-row">
                <div>
                  <div className="icon text-primary fs-28 me-4 mt-n1">
                    <i className="uil uil-phone-volume" />
                  </div>
                </div>

                <div>
                  <h5 className="mb-1">Phone</h5>
                  <p className="mb-0">
                    +44 7480970535 <br />
                    +44 7427336298
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="widget">
              <div className="d-flex flex-row">
                <div>
                  <div className="icon text-primary fs-28 me-4 mt-n1">
                    <i className="uil uil-location-pin-alt" />
                  </div>
                </div>

                <div className="align-self-start justify-content-start">
                  <h5 className="mb-1">Address</h5>
                  <address>Ormiston Bushfield Academy Peterborough PE2 5RQ</address>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-11 mt-md-12 mb-7" />
        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">© 2025 Suftnet. All rights reserved.</p>
          <SocialLinks className="nav social social-muted mb-0 text-md-end" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
