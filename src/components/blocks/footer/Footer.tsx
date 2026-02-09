
'use client';

import SocialLinks from '@/components/reuseable/SocialLinks';
import { useSettings } from '@/hooks/useSettings';
import { completeAddress, formatPhoneNumbers } from '@/utils/helpers';

type Footer8Props = {
  backgroundColor?: string;
};

const Footer = ({ backgroundColor = 'bg-white' }: Footer8Props) => {
  const { data, loading, error } = useSettings()
  const phoneNumbers = formatPhoneNumbers(data?.data?.mobile)

  return (
    <footer className={backgroundColor}>
      <div className="container pt-13 pb-7">
        <div className="row gx-lg-0 gy-6 align-items-start">

          {/* Logo / Description */}

          <div className="col-lg-4">
            <div className='row'>
              <div className="col-lg-4">
                <img className="mb-1" src="/img/logo.png" srcSet="/img/logo.png" alt="" />
              </div>
              <div className="col-lg-8">
                <p className="lead mb-0">
                  Welcome to Winners Chapel International, Peterborough. We are an arm of the Living Faith Church Worldwide.
                </p>
              </div>
            </div>


          </div>

          {/* Phone */}
          <div className="col-lg-2">
            <div className="widget">
              <div className="d-flex flex-row">
                <div className="icon text-primary fs-28 me-4 mt-n1">
                  <i className="uil uil-phone-volume" />
                </div>
                <div>
                  <h5 className="mb-1">Phone</h5>
                  <div dangerouslySetInnerHTML={{ __html: phoneNumbers }} />
                </div>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-lg-3">
            <div className="widget">
              <div className="d-flex flex-row">
                <div className="icon text-primary fs-28 me-4 mt-n1">
                  <i className="uil uil-envelope" />
                </div>
                <div style={{ maxWidth: '100%' }}>
                  <h5 className="mb-1">Email</h5>
                  <p className="mb-0 text-truncate">
                    <a
                      href={`mailto:${data?.data?.email || 'info@winnerschapel-peterborough.org'}`}
                      className="d-inline-block text-truncate"
                      style={{ whiteSpace: 'nowrap', maxWidth: '100%' }}
                    >
                      info@winnerschapel-peterborough.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="col-lg-3">
            <div className="widget">
              <div className="d-flex flex-row">
                <div className="icon text-primary fs-28 me-4 mt-n1">
                  <i className="uil uil-location-pin-alt" />
                </div>
                <div>
                  <h5 className="mb-1">Address</h5>
                  <address className="mb-0">
                    Orton Waterville, Peterborough, City of Peterborough, United Kingdom, PE2 5SP
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-11 mt-md-12 mb-7" />
        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">© 2026 Suftnet. All rights reserved.</p>
          <SocialLinks className="nav social social-muted mb-0 text-md-end" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
