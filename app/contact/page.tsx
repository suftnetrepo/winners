'use client';

import next, { NextPage } from 'next';
import { Fragment } from 'react';
import { Footer } from '@/components/blocks/footer';
import PageProgress from '@/components/common/PageProgress';
import ContactForm from '@/components/common/ContactForm';
import ContactTiles from '@/components/elements/tiles/Contact-Tiles';
import Navbar from '@/components/blocks/navbar/Navbar';
import Link from 'next/link';
import { useSettings } from '@/hooks/useSettings';
import { completeAddress, formatPhoneNumbers } from '@/utils/helpers';

const ContactTwo: NextPage = () => {
  const { data, error, loading } = useSettings()
  const phoneNumbers = formatPhoneNumbers(data?.data?.mobile)
  const address = completeAddress(data?.data?.address)

  return (
    <Fragment>
      <PageProgress />

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
        <section className="wrapper bg-white">
          <div className="container py-20 py-md-20">
            {/* ========== contact info section ========== */}
            <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
              <ContactTiles />

              <div className="col-lg-5">
                <h2 className="display-4 mb-8">Got any questions? Don't hesitate to get in touch.</h2>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-location-pin-alt" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">Address</h5>
                    {
                      address ? (
                        <address>
                          {
                            address
                          }
                        </address>
                      ) : (
                        <address>
                          Ormiston Bushfield Academy Peterborough PE2 5RQ. <br className="d-none d-md-block" />
                          London, United Kingdom
                        </address>
                      )
                    }
                  </div>
                </div>

                <div className="d-flex flex-row mb-2">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-phone-volume" />
                    </div>
                  </div>

                  <div>
                      <h5 className="mb-1">Phone</h5>
                      <div dangerouslySetInnerHTML={{ __html: phoneNumbers }} />
                    </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-envelope" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">E-mail</h5>
                    <p className="mb-0">
                      <a href="mailto:WinnersChapel.InternationalPeterborough@winners-chapel.org.uk" className="link-body">
                        WinnersChapel.InternationalPeterborough@winners-chapel.org.uk                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer backgroundColor='bg-light' />
    </Fragment>
  );
};

export default ContactTwo;
