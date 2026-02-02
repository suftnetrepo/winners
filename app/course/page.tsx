'use client';

import { Fragment } from 'react';
import React, { useState } from 'react';
import Footer from '@/components/blocks/footer/Footer';
import PageProgress from '@/components/common/PageProgress';
import Navbar from '@/components/blocks/navbar/Navbar';
import Link from 'next/link';

export default function BfcPage() {

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
        <section className="section-frame overflow-hidden">
          <div className="wrapper bg-gray">
            <div className="container py-13 py-md-13 text-center">
              <div className="row">
                <div className="col-lg-10 col-xxl-8 mx-auto">
                  <h3 className="display-4 mb-3 text-center">Believers Foundation Class</h3>
                  <p className="lead fs-lg mb-10 text-center">
                    Building on unshakable foundations, contending for the faith once delivered.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <div className="container pt-13 pb-15 pb-md-17 py-lg-16 ps-lg-15 pe-xxl-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-12 col-md-6">
              <div className="hero-text">
                <p>
                  In the journey of life, foundations are vitally important to destiny. In fact, God's word
                  declares that if the foundation is destroyed, the righteous can do nothing – <span className="scripture-ref">Psa. 11:3</span>.
                  To make the most of one's Christian adventure, it is important to address the foundations of
                  the faith. We are admonished to contend for the faith that was once delivered to the saints
                  – <span className="scripture-ref">Jude 3</span>. This means there is an unadulterated dimension of faith; a walk with God that is
                  as God originally intended.
                </p>
                <p className="mt-4">
                  The purpose of the Believers Foundation Class is to ensure that we are all grounded in the
                  foundations of faith that will ensure a profitable and colorful adventure in the Lord.
                </p>
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="col-12 text-center">
                <p className="text fs-20">
                 Join the foundation class every Tuesdays 7PM and see how to connect with the blessings here.
                </p>
                <button type="button" className="btn text-white bg__purple rounded-pill btn-send mb-3">Join us</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer backgroundColor='bg-gray' />
    </Fragment>
  );
}
