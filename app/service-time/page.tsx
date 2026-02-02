'use client';

import { Fragment } from 'react';
import React from 'react';
import { MapPinHouse, Clock1, Clock } from 'lucide-react';
import Footer from '@/components/blocks/footer/Footer';
import NextLink from '@/components/reuseable/links/NextLink';
import PageProgress from '@/components/common/PageProgress';
import Navbar from '@/components/blocks/navbar/Navbar';
import Link from 'next/link';
import { useRegularServices } from '@/hooks/useRegularServices';

export default function Page() {
  const { data, error, loading } = useRegularServices()

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
        {/* ========== title section ========== */}
        <section className="section-frame overflow-hidden">
          <div className="wrapper bg-gray">
            <div className="container py-13 py-md-13 text-center">
              <div className="row">
                <div className="col-lg-10 col-xxl-8 mx-auto">
                  <h3 className="display-4 mb-3 text-center">Worship With Us</h3>
                  <p className="lead fs-lg mb-10 text-center">
                    Come and be refreshed in God's presence during our uplifting service times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white py-4">
          <div className="container pt-11 pt-md-13 pb-11 pb-md-13 text-center">
            {
              data?.data?.map((j, i) => (<div key={i} className="row ">
                <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                  <h3 className="display-1 fs-24 mb-1 px-md-15 px-lg-0">{j.title}</h3>
                  <div className="d-flex justify-content-center items-center mb-1">
                    <div className="d-flex align-items-center me-8">
                      <Clock className="me-1" size={32} />
                      <span className="fs-16 text-dark">Start - {j.start_time}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <Clock1 className="me-1" size={32} />
                      <span className="fs-16 text-dark">End - {j.end_time}</span>

                    </div>
                  </div>
                  {
                    j.remote ? (<></>

                    ) : (
                      <div className="d-flex justify-content-center items-center mb-1">
                        <MapPinHouse className="me-2" size={30} />
                        <span className="fs-18 text-dark"> Ormiston Bushfield Academy Peterborough PE2 5RQ </span>
                      </div>
                    )
                  }

                  <p className="lead fs-17 lh-sm mb-7 mx-md-13 mx-lg-10">
                    {j.description}
                  </p>
                  {
                    j.remote && (
                      <NextLink href={j.remote_link ?? ''} title="Join Online" className="btn btn-soft-primary rounded-pill mb-8" />
                    )
                  }

                </div>
              </div>)
              )
            }
          </div>
        </div>
      </main>

      <Footer backgroundColor='bg-gray' />
    </Fragment>
  );
}
