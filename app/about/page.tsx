'use client';

import { NextPage } from 'next';
import { Fragment } from 'react';
import { Footer } from '@/components/blocks/footer';
import AboutUs from '@/components/blocks/about';
import PageProgress from '@/components/common/PageProgress';
import Navbar from '@/components/blocks/navbar/Navbar';
import Link from 'next/link';

const About: NextPage = () => {
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
        <AboutUs />
      </main>

      {/* ========== footer section ========== */}
       <Footer backgroundColor='bg-gray'  />
    </Fragment>
  );
};

export default About;
