'use client';

import { Fragment } from 'react';
import type { NextPage } from 'next';
import PageProgress from '@/components/common/PageProgress';
import { Footer } from '@/components/blocks/footer';
import Hero2 from '@/components/blocks/hero/Hero3';
import useLightBox from '@/hooks/useLightBox';
import { Navbar } from '@/components/blocks/navbar';
import Link from 'next/link';
import Contact from '@/components/elements/contact';
import Tiles from '@/components/blocks/tiles';
import Fact from '@/components/reuseable/Fact';
import Talk from '@/components/reuseable/Contact2';
import Slider from '@/components/reuseable/Slider';

const Home: NextPage = () => {
  useLightBox();

  return (
    <Fragment>
      <PageProgress />

      <header className="wrapper bg-dark">
        <Navbar
          info
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none"
        
        />
      </header>

      <main className="content-wrapper">
        <section className=" bg-light">
          <Hero2 />
          <div className="container pt-10 pt-md-14 pb-13 pb-md-15 mb-n14">
            <Tiles />
          </div>
          <Fact />
          <div className="container pt-md-18 pb-md-18 ">
            <Talk />
          </div>
          <Slider />
          <div className="container  pt-md-9 pb-13 pb-md-15 mb-n14">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Home;
