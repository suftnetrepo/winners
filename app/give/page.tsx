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
import AccordionList from '@/components/common/AccordionList';
import { GivingSteps } from '@/components/blocks/steps';

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
        />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="section-frame overflow-hidden">
          <div className="wrapper bg-gray">
            <div className="container py-13 py-md-13 text-center">
              <div className="row">
                <div className="col-lg-10 col-xxl-8 mx-auto">
                  <h3 className="display-4 mb-3 text-center">Covenant of Blessing</h3>
                  <p className="lead fs-lg mb-10 text-center">
                    When you give your tithe and offering, you unlock Kingdom blessings — prepare for divine provision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <GivingSteps />
      </main>

      <Footer backgroundColor="bg-gray" />
    </Fragment>
  );
}
