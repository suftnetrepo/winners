'use client';

import { Fragment } from 'react';
import { Footer } from '@/components/blocks/footer';
import PageProgress from '@/components/common/PageProgress';
import Navbar from '@/components/blocks/navbar/Navbar';
import Link from 'next/link';
import Testimonial from '@/components/blocks/testimonies';

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
                  <h3 className="display-4 mb-3 text-center">Celebrate the Goodness of God</h3>
                  <p className="lead fs-lg mb-10 text-center">
                    Read and share testimonies that reveal God's love, power, and faithfulness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container pt-10 pt-md-14 pb-13 pb-md-15 mb-n14">
          <Testimonial />
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
