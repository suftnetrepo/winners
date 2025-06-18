'use client';

import { Fragment } from 'react';
import { Calendar, MapPinHouse, Clock1, Clock, Video, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { Footer } from '@/components/blocks/footer';
import NextLink from '@/components/reuseable/links/NextLink';
import PageProgress from '@/components/common/PageProgress';
import Navbar from '@/components/blocks/navbar/Navbar';
import Link from 'next/link';

export default function Page() {
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
            <Link href="/login" className="btn btn-sm btn-danger rounded-pill">
              Give
            </Link>
          }
        />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="section-frame overflow-hidden">
          <div className="wrapper bg-gray">
            <div className="container py-13 py-md-13 text-center">
              <div className="row">
                <div className="col-lg-10 col-xxl-8 mx-auto">
                  <h3 className="display-4 mb-3 text-center">We Believe in the Power of Prayer</h3>
                  <p className="lead fs-lg mb-10 text-center">
                    Whatever you're facing, you're not alone. Let us stand with you in prayer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white py-4">
          <div className="container pt-11 pt-md-13 pb-11 pb-md-13 text-center">
            <div className="row">
              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                <h3 className="display-1 fs-24 mb-1 px-md-15 px-lg-0">Convenant Hour of Prayer</h3>
                <div className="d-flex justify-content-center items-center mb-1">
                  <div className="d-flex align-items-center me-8">
                    <Clock className="me-2" size={32} />
                    <span className="fs-16 text-dark">Start - 5:30am</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Clock1 className="me-2" size={32} />
                    <span className="fs-16 text-dark">End - 6:30pm</span>
                  </div>
                </div>
  
                <p className="lead fs-17 lh-sm mb-7 mx-md-13 mx-lg-10">
                  We are a creative company that focuses on long term relationships with customers.
                </p>
                <NextLink href="#" title="Join Online" className="btn btn-soft-primary rounded-pill" />
              </div>
            </div>
            <div className="row mt-8">
              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                <h3 className="display-1 fs-24 mb-1 px-md-15 px-lg-0">Mid Day Prayer</h3>
                <div className="d-flex justify-content-center items-center mb-1">
                  <div className="d-flex align-items-center me-8">
                    <Clock className="me-2" size={32} />
                    <span className="fs-16 text-dark">Start - 12:00 noon</span>
                  </div>
                  {/* <div className="d-flex align-items-center">
                    <Clock1 className="me-2" size={32} />
                    <span className="fs-16 text-dark">End - 8:3pm</span>
                  </div> */}
                </div>
                
                <p className="lead fs-17 lh-sm mb-7 mx-md-13 mx-lg-10">
                  We are a creative company that focuses on long term relationships with customers.
                </p>
                <NextLink href="#" title="Join Online" className="btn btn-soft-primary rounded-pill" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
