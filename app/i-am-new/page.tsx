'use client';

import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import Team from '@/components/blocks/team/Team';
import Target from '@/icons/lineal/Target';
import AwardTwo from '@/icons/lineal/AwardTwo';

import { Footer } from '@/components/blocks/footer';
import FigureImage from '@/components/reuseable/FigureImage';
import NextLink from '@/components/reuseable/links/NextLink';
import NavBarLink from '@/components/reuseable/links/NavbarLink';
import AboutUs from '@/components/blocks/about';
import PageProgress from '@/components/common/PageProgress';
import Topbar from '@/components/elements/Topbar';
import Navbar from '@/components/blocks/navbar/Navbar';
import Link from 'next/link';
import Accordion from '@/components/reuseable/accordion';
import data from '@/data/demo-27';

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
            <Link href="/give" className="btn btn-sm btn-danger rounded-pill">
              Give
            </Link>
          }
        />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="section-frame overflow-hidden">
          <div className="wrapper bg-white">
            <div className="container py-13 py-md-13 text-center">
              <div className="row">
                <div className="col-lg-10 col-xxl-8 mx-auto">
                  <h3 className="display-4 mb-3 text-center">New Here? You're Welcome!</h3>
                  <p className="lead fs-lg mb-10 text-center">
                    We’re excited to meet you. Discover what to expect and how to get connected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row mb-8">
              <div className="col-lg-11 col-xxl-10 mx-auto text-center">
                <h3 className="display-3 mb-4">Are you new or planning to visit us?</h3>
                <p className="mb-6 fs-20 px-16">
                  If you’re new or planning your first visit, our FAQ section
                  has everything you need — from service times and parking info to what to expect during worship. We’re
                  excited to meet you and make you feel right at home.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7 mx-auto">
                <div className="accordion-wrapper" id="accordion">
                  {data.accordionList3.map((item) => (
                    <Accordion key={item.no} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer backgroundColor="bg-white" />
    </Fragment>
  );
}
